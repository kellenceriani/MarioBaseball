const userLineup = [], opponentLineup = [];
let availableCharacters = [...marioCharacters], currentPick = 0, isUserTurn = true, draftStarted = false;
const userList = document.getElementById("user-lineup"), opponentList = document.getElementById("opponent-lineup"), 
      charactersContainer = document.getElementById("characters"), draftStatus = document.getElementById("draft-status"), 
      startBtn = document.getElementById("start-draft"), setupSection = document.getElementById("setup-team"),
      lineupForm = document.getElementById("lineup-form"), finalizeBtn = document.getElementById("finalize-lineup");
      // const compareBtn = document.getElementById("compare-button");
      const simGameBtn = document.getElementById("sim-game-button");
      const boxScoreSection = document.getElementById("box-score");
      const scoreOutput = document.getElementById("score-output");
      
const renderCharacters = () => {
  charactersContainer.innerHTML = "";
  availableCharacters.forEach((char, index) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `<h3>${char.name}</h3><p><strong>Overall:</strong> ${char.overall}</p><p><strong>Best Positions:</strong> ${char.positions.join(", ")}</p>`;
    card.addEventListener("click", () => handlePick(index));
    charactersContainer.appendChild(card);
  });
};

const handlePick = (index) => {
  if (!draftStarted || !isUserTurn || userLineup.length >= 11) return;
  const picked = availableCharacters.splice(index, 1)[0];
  userLineup.push(picked);
  updateTeamUI();
  advanceTurn();
};

const opponentPick = () => {
  if (opponentLineup.length >= 11) return;
  availableCharacters.sort((a, b) => b.overall - a.overall);
  const picked = availableCharacters.shift();
  opponentLineup.push(picked);
  updateTeamUI();
};



const updateTeamUI = () => {
  const formatList = list => list.map((c, i) => {
    const label = (c.position === "SP" || c.position === "RP") ? c.position : (c.batting ? `#${c.batting}` : `#${i + 1}`);
    const pos = c.position || c.positions.join(", ");
    return `<li>${label} - ${c.name} (${pos})${c.outOfPosition ? " <span style='color:red'>(Out of Position)</span>" : ""}</li>`;
  }).join("");

  const sortedUser = sortLineup(userLineup);
  const sortedOpponent = sortLineup(opponentLineup);

  const isPitcher = c => c.position === "SP" || c.position === "RP";
  userList.innerHTML = formatList([...sortedUser.filter(c => !isPitcher(c)), ...sortedUser.filter(isPitcher)]);
  opponentList.innerHTML = formatList([
    ...sortedOpponent.filter(c => !isPitcher(c)),
    ...sortedOpponent.filter(isPitcher)
  ]);

  renderCharacters();
};


const advanceTurn = () => {
  currentPick++;
  updateTeamUI();
  
  // Check if both teams have picked 11 characters
  if (userLineup.length >= 11 && opponentLineup.length >= 11) {
    finalizeOpponentLineup(); // Call this BEFORE updateTeamUI
    updateTeamUI();
    compareBtn.style.display = "inline-block"; // <-- Add this line
    setTimeout(() => {
      draftStatus.textContent = "Draft complete! Click 'Set Up Team' to organize your lineup.";
      draftStarted = false;
      startBtn.style.display = "none";
      setupSection.style.display = "inline-block";
      charactersContainer.innerHTML = "";
    }, 100);
    return;
  }
  
  // Show "Set Up Team" button after user picks 11 characters
  if (userLineup.length === 11) {
    document.getElementById("setup-button").style.display = "inline-block";
  }

  isUserTurn = !isUserTurn;
  draftStatus.textContent = isUserTurn ? "Your turn to pick!" : "Opponent picking...";
  
  if (!isUserTurn) {
    setTimeout(() => {
      opponentPick();
      isUserTurn = true;
      draftStatus.textContent = "Your turn to pick!";
    }, 1000);
  }
  document.getElementById("setup-button").addEventListener("click", () => {
    finalizeOpponentLineup();
    updateTeamUI();
    draftStatus.textContent = "Set your team's positions and batting order!";
    setupSection.style.display = "block";
    renderLineupForm();
  });
};

const finalizeOpponentLineup = () => {
  const final = [], usedPos = new Set(), usedBat = new Set(), allPos = ["1B","2B","3B","SS","LF","CF","RF","C","SP","RP"];
  opponentLineup.forEach(c => {
    const pos = c.positions.find(p => !usedPos.has(p)) || allPos.find(p => !usedPos.has(p));
    usedPos.add(pos);
    let bat = !["SP","RP"].includes(pos) ? [...Array(9)].map((_,i)=>i+1).find(n=>!usedBat.has(n)) : null;
    if (bat) usedBat.add(bat);
    final.push({ ...c, position: pos, batting: bat, outOfPosition: !c.positions.includes(pos) });
  });
  opponentLineup.length = 0;
  opponentLineup.push(...final);
};
const finalizeUserLineup = () => {
  const final = [], usedPos = new Set(), usedBat = new Set(), allPos = ["1B", "2B", "3B", "SS", "LF", "CF", "RF", "C", "SP", "RP"];
  userLineup.forEach(c => {
    let pos = document.querySelector(`[name="position-${c.name}"]`)?.value || c.positions.find(p => !usedPos.has(p)) || allPos.find(p => !usedPos.has(p));
    usedPos.add(pos);
    let bat = ["SP", "RP"].includes(pos) ? null : parseInt(document.querySelector(`[name="batting-${c.name}"]`)?.value) || [...Array(9)].map((_, i) => i + 1).find(n => !usedBat.has(n));
    if (bat) usedBat.add(bat);
    final.push({ ...c, position: pos, batting: bat, outOfPosition: !c.positions.includes(pos) });
  });
  userLineup.splice(0, userLineup.length, ...final);
};



const renderLineupForm = () => {
  lineupForm.innerHTML = "";
  const battingOrder = [...Array(9).keys()].map(i => i + 1);
  userLineup.forEach((char) => {
    const wrapper = document.createElement("div");
    wrapper.className = "lineup-row";
    const orderSelect = document.createElement("select"), posSelect = document.createElement("select");
    orderSelect.name = `batting-${char.name}`, orderSelect.className = "batting-order";
    orderSelect.innerHTML = `<option value="">--</option>${battingOrder.map(n => `<option value="${n}">#${n}</option>`).join("")}`;
    posSelect.name = `position-${char.name}`, posSelect.className = "position-select";
    posSelect.innerHTML = `<option value="">--</option>${char.positions.map(pos => `<option value="${pos}">${pos}</option>`).join("")}`;
    posSelect.addEventListener("change", () => orderSelect.style.display = (posSelect.value === "SP" || posSelect.value === "RP") ? "none" : "inline-block");
    wrapper.innerHTML = `<strong>${char.name}</strong>: `;
    wrapper.appendChild(orderSelect);
    wrapper.appendChild(document.createTextNode(" | Position: "));
    wrapper.appendChild(posSelect);
    wrapper.appendChild(document.createElement("span")).className = "position-warning";
    lineupForm.appendChild(wrapper);
  });
};

finalizeBtn.addEventListener("click", () => {
  finalizeUserLineup();
  updateTeamUI();
  draftStatus.textContent = "Lineup finalized! Ready to compare.";
  
  compareBtn.style.display = "inline-block";
  simGameBtn.style.display = "inline-block";
  setupSection.style.display = "none";
});

startBtn.addEventListener("click", () => {
  draftStarted = true;
  startBtn.style.display = "none";
  draftStatus.textContent = "Drafting...";
  renderCharacters();
});

const compareBtn = document.getElementById("compare-button");

compareBtn.addEventListener("click", () => {
  compareBtn.disabled = true;
  const computeTeamStats = (team) => {
    let total = 0;
    const details = [];
    const pitchers = [];

    team.forEach((player) => {
      let base = player.overall;
      let mod = 0;

      // Chemistry boost
      const teammates = team.map(p => p.name);
      const chemBoost = player.chemistry ? player.chemistry.filter(n => teammates.includes(n)).length : 0;
      mod += chemBoost * 0.5; // +0.5 per good teammate
      // Lineup construction bonus (only for 1-9 batters)
      if (player.batting && player.favoriteLineupSpots?.includes(player.batting)) {
        mod += 1.0;
      }
      // Out of position penalty
      if (player.outOfPosition) mod -= 2;
      const final = base + mod;
      total += final;
      const label = (player.position === "SP" || player.position === "RP") ? player.position : `#${player.batting}`;
      const playerInfo = `${label} - ${player.name}: ${final.toFixed(1)} <span style="color:gray">(${base}${mod !== 0 ? (mod > 0 ? ` +${mod.toFixed(1)}` : ` ${mod.toFixed(1)}`) : ""})</span>`;
      if (player.position === "SP" || player.position === "RP") {
        pitchers.push(playerInfo);
      } else {
        details.push(playerInfo);
      }
    });

    return {
      details,
      pitchers,
      average: (total / team.length).toFixed(1)
    };
  };

  const userStats = computeTeamStats(userLineup);
  const oppStats = computeTeamStats(opponentLineup);

  // Get the character pool container and clear it
  const characterPool = document.getElementById("character-pool");
  characterPool.innerHTML = "";  // Clear available characters
  // Create and append the comparison HTML
  const comparisonHTML = `
    <div id="team-comparison">
      <h2>Team Comparison</h2>
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="flex: 1; padding-right: 20px;">
          <h3>Your Team</h3>
          <ul>
            ${userStats.details.join("")}
          </ul>
          <p><strong>Team Overall:</strong> ${userStats.average}</p>
          <h4>Pitchers:</h4>
          <ul>
            ${userStats.pitchers.join("")}
          </ul>
        </div>
        <div style="flex: 1; padding-left: 20px;">
          <h3>Opponent's Team</h3>
          <ul>
            ${oppStats.details.join("")}
          </ul>
          <p><strong>Team Overall:</strong> ${oppStats.average}</p>
          <h4>Pitchers:</h4>
          <ul>
            ${oppStats.pitchers.join("")}
          </ul>
        </div>
      </div>
    </div>`;

  // Add the comparison to the page
  characterPool.innerHTML = comparisonHTML; // Replace available characters with comparison
});