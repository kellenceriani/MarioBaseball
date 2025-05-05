simGameBtn.addEventListener("click", () => {
  finalizeUserLineup();
  simulateGame();
});

function simulateGame() {
  const innings = 9;

  const generateStats = (lineup) => {
    const stats = [];
    lineup.sort((a, b) => (a.batting || 0) - (b.batting || 0));
    lineup = lineup.filter(p => p.batting);

    for (let i = 0; i < lineup.length; i++) {
      const player = lineup[i];
      let plateAppearances = Math.floor(Math.random() * 2 + 3);
      if (player.batting <= 3) plateAppearances += 1;

      const overall = player.overall;
      const penalty = player.outOfPosition ? 10 : 0;
      const adjustedOverall = overall - penalty;

      let hits = 0, runs = 0, rbi = 0, hr = 0, sb = 0, k = 0, bb = 0;
      for (let j = 0; j < plateAppearances; j++) {
        const rand = Math.random() * 100;

        if (rand < 10) {
          bb++;
          continue;
        }

        if (rand < adjustedOverall * 0.3) hits++;
        if (rand < adjustedOverall * 0.1) {
          hr++;
          rbi += Math.floor(Math.random() * 3) + 1;
          runs++;
        } else if (rand < adjustedOverall * 0.2) {
          rbi++;
          runs += Math.random() < 0.5 ? 1 : 0;
        }

        if (rand > 85) k++;
        if (rand < adjustedOverall * 0.05) sb++;
      }

      // Ensure there are no more Ks or BBs than Plate Appearances
      k = Math.min(k, plateAppearances);
      bb = Math.min(bb, plateAppearances);

      stats.push({
        name: player.name,
        pos: player.position,
        batting: `#${player.batting}`,
        overall,
        outOfPosition: player.outOfPosition,
        PA: plateAppearances,
        H: hits,
        HR: hr,
        R: runs,
        RBI: rbi,
        SB: sb,
        K: k,
        BB: bb
      });
    }
    return stats;
  };

  const getPitchingStats = (lineup) => {
    const sp = lineup.find(p => p.position === "SP");
    const rps = lineup.filter(p => p.position === "RP");

    let spInnings = Math.floor(4 + Math.random() * 4);
    if (sp && sp.overall > 85 && Math.random() > 0.5) spInnings++;
    if (spInnings > 8) spInnings = 8;

    const remainingInnings = 9 - spInnings;
    const roundedRemaining = parseFloat(remainingInnings.toFixed(1));

    const generateStats = (pitcher, innings, kMax, bbMax, hMax) => {
      const k = Math.floor(Math.random() * kMax);
      const bb = Math.floor(Math.random() * bbMax);
      const hits = Math.floor(Math.random() * hMax);
      return {
        ...pitcher,
        innings: parseFloat(innings.toFixed(1)),
        k,
        bb,
        hits
      };
    };

    const spStats = generateStats(sp, spInnings, 17, 6, 8);

    let inningsLeft = roundedRemaining;
    const rpStats = [];

    for (let i = 0; i < rps.length && inningsLeft > 0.05; i++) {
      const isLastRP = i === rps.length - 1 || inningsLeft <= 1.0;
      const maxChunk = isLastRP ? inningsLeft : Math.min(inningsLeft, Math.random() * 1.5 + 0.2);
      const rpInnings = parseFloat(Math.min(maxChunk, inningsLeft).toFixed(1));

      const rpStat = generateStats(rps[i], rpInnings, 7, 4, 5);
      rpStats.push(rpStat);

      inningsLeft -= rpInnings;
    }

    // Sum up the total K, BB, and H for SP and RP
    const totalK = spStats.k + rpStats.reduce((sum, rp) => sum + rp.k, 0);
    const totalBB = spStats.bb + rpStats.reduce((sum, rp) => sum + rp.bb, 0);
    const totalH = spStats.hits + rpStats.reduce((sum, rp) => sum + rp.hits, 0);

    return {
      sp: spStats,
      rps: rpStats,
      totalK,
      totalBB,
      totalH
    };
  };

  const redistributeKBB = (stats, totalK, totalBB) => {
    const totalOriginalK = stats.reduce((sum, p) => sum + p.K, 0) || 1;
    const totalOriginalBB = stats.reduce((sum, p) => sum + p.BB, 0) || 1;

    stats.forEach(p => {
      p.K = Math.round((p.K / totalOriginalK) * totalK);
      p.BB = Math.round((p.BB / totalOriginalBB) * totalBB);
    });
  };

  const calcScore = (teamStats) => teamStats.reduce((sum, p) => sum + p.R, 0);

  const userStats = generateStats(userLineup);
  const opponentStats = generateStats(opponentLineup);

  const { sp: userSP, rps: userRPs, totalK: userTotalK, totalBB: userTotalBB, totalH: userTotalH } = getPitchingStats(userLineup);
  const { sp: opponentSP, rps: opponentRPs, totalK: oppTotalK, totalBB: oppTotalBB, totalH: oppTotalH } = getPitchingStats(opponentLineup);

  // Enforce K + BB from pitcher stats
  redistributeKBB(userStats, userTotalK, userTotalBB);
  redistributeKBB(opponentStats, oppTotalK, oppTotalBB);

  const renderBox = (teamName, stats, sp, rps, totalK, totalBB, totalH) => {
    const totals = stats.reduce((acc, p) => {
      acc.PA += p.PA;
      acc.H += p.H;
      acc.R += p.R;
      acc.RBI += p.RBI;
      acc.BB += p.BB;
      acc.K += p.K;
      acc.SB += p.SB;
      return acc;
    }, { PA: 0, H: 0, R: 0, RBI: 0, BB: 0, K: 0, SB: 0 });

    // Ensure the totals match the pitching line
    totals.H = totalH;
    totals.K = totalK;
    totals.BB = totalBB;

    // Calculate Total AVG and OPS
    const totalAvg = totals.PA && totals.H ? (totals.H / totals.PA).toFixed(3) : "0.000";
    const totalOps = (parseFloat(totalAvg) + (totals.BB / totals.PA || 0)).toFixed(3);

    return `
      <h4>${teamName}</h4>
      <table class="box-score-table">
        <thead>
          <tr><th>Name</th><th>Pos</th><th>Bat</th><th>Ovr</th><th>PA</th><th>R</th><th>H</th><th>RBI</th><th>BB</th><th>K</th><th>AVG</th><th>OPS</th><th>SB</th></tr>
        </thead>
        <tbody>
          ${stats.map(p => {
            const avg = p.H && p.PA ? (p.H / p.PA).toFixed(3) : "0.000";
            const ops = (parseFloat(avg) + (p.BB / p.PA || 0)).toFixed(3);
            return `<tr>
              <td>${p.name}${p.outOfPosition ? ' <span style="color:red">*</span>' : ''}</td>
              <td>${p.pos}</td>
              <td>${p.batting}</td>
              <td>${p.overall}</td>
              <td>${p.PA}</td>
              <td>${p.R}</td>
              <td>${p.H}</td>
              <td>${p.RBI}</td>
              <td>${p.BB}</td>
              <td>${p.K}</td>
              <td>${avg}</td>
              <td>${ops}</td>
              <td>${p.SB}</td>
            </tr>`; 
          }).join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" style="text-align:left;">Total:</td>
            <td>${totals.PA}</td>
            <td>${totals.R}</td>
            <td>${totals.H}</td>
            <td>${totals.RBI}</td>
            <td>${totals.BB}</td>
            <td>${totals.K}</td>
            <td>${totalAvg}</td>
            <td>${totalOps}</td>
            <td>${totals.SB}</td>
          </tr>
        </tfoot>
      </table>
      <h5>Pitching Line:</h5>
      <p><strong>SP:</strong> ${sp.name} - ${sp.innings} IP, ${sp.hits} H, ${sp.k} K, ${sp.bb} BB</p>
      <p><strong>RP:</strong> ${rps.map(rp => `${rp.name} - ${rp.innings} IP, ${rp.hits} H, ${rp.k} K, ${rp.bb} BB`).join(', ')}</p>
    `;
  };

  const userScore = calcScore(userStats);
  const oppScore = calcScore(opponentStats);

  let output = `<h3>Final Score</h3>
    <p><strong>Your Team:</strong> ${userScore}</p>
    <p><strong>Opponent:</strong> ${oppScore}</p>
    <div style="display: flex; justify-content: space-between;">
      <div style="flex: 1; padding-right: 20px;">${renderBox("Your Team", userStats, userSP, userRPs, userTotalK, userTotalBB, userTotalH)}</div>
      <div style="flex: 1; padding-left: 20px;">${renderBox("Opponent", opponentStats, opponentSP, opponentRPs, oppTotalK, oppTotalBB, oppTotalH)}</div>
    </div>`;

  scoreOutput.innerHTML = output;
  boxScoreSection.style.display = "block";
}
