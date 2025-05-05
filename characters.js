const marioCharacters = [
  {
    name: "Mario",
    positions: ["SS", "2B", "CF", "SP"],
    hitting: { power: 75, speed: 80, contact: 85, vision: 80, clutch: 88, stealing: 70, fielding: 85, iq: 90 },
    pitching: { control: 78, velocity: 68, break: 63, special: 88, clutch: 83, stamina: 78 },
    overall: 85,
    chemistry: ["Luigi", "Peach", "Yoshi"],
    favoriteLineupSpots: [2, 3, 5]
  },
  {
    name: "Luigi",
    positions: ["3B", "LF", "RP", "RF"],
    hitting: { power: 68, speed: 75, contact: 80, vision: 84, clutch: 82, stealing: 65, fielding: 82, iq: 87 },
    pitching: { control: 84, velocity: 67, break: 72, special: 78, clutch: 82, stamina: 80 },
    overall: 85,
    chemistry: ["Mario", "Toadette", "Daisy"],
    favoriteLineupSpots: [1, 6, 9]
  },
  {
    name: "Peach",
    positions: ["RP", "LF", "2B", "SP"],
    hitting: { power: 58, speed: 90, contact: 80, vision: 87, clutch: 84, stealing: 90, fielding: 82, iq: 94 },
    pitching: { control: 87, velocity: 62, break: 77, special: 90, clutch: 88, stamina: 72 },
    overall: 82,
    chemistry: ["Mario", "Daisy", "Toadette"],
    favoriteLineupSpots: [1, 2, 9]
  },
  {
    name: "Bowser",
    positions: ["1B", "DH", "SP", "C"],
    hitting: { power: 99, speed: 42, contact: 76, vision: 72, clutch: 94, stealing: 22, fielding: 77, iq: 68 },
    pitching: { control: 70, velocity: 96, break: 62, special: 88, clutch: 92, stamina: 87 },
    overall: 88,
    chemistry: ["Bowser Jr.", "Kamek", "Wario"],
    favoriteLineupSpots: [4, 5]
  },
  {
    name: "Yoshi",
    positions: ["CF", "LF", "RF", "2B"],
    hitting: { power: 72, speed: 96, contact: 91, vision: 82, clutch: 80, stealing: 96, fielding: 91, iq: 89 },
    // pitching: { control: 87, velocity: 62, break: 77, special: 90, clutch: 88, stamina: 72 },
    overall: 86,
    chemistry: ["Birdo", "Toad", "Mario"],
    favoriteLineupSpots: [1, 2, 9]
  },
  {
    name: "Donkey Kong",
    positions: ["LF", "1B", "DH", "RF"],
    hitting: { power: 96, speed: 62, contact: 86, vision: 72, clutch: 91, stealing: 58, fielding: 82, iq: 72 },
    // pitching: { control: 70, velocity: 96, break: 62, special: 88, clutch: 92, stamina: 87 },
    overall: 88,
    chemistry: ["Diddy Kong", "Wario", "Hammer Bro"],
    favoriteLineupSpots: [3, 4, 5]
  },
  {
    name: "Toad",
    positions: ["2B", "SP", "CF", "RP"],
    hitting: { power: 52, speed: 92, contact: 82, vision: 87, clutch: 77, stealing: 86, fielding: 84, iq: 88 },
    pitching: { control: 86, velocity: 62, break: 70, special: 72, clutch: 80, stamina: 74 },
    overall: 80,
    chemistry: ["Toadette", "Yoshi", "Luigi"],
    favoriteLineupSpots: [1, 7, 9]
  },
  {
    name: "Wario",
    positions: ["1B", "3B", "DH", "SP"],
    hitting: { power: 92, speed: 47, contact: 80, vision: 62, clutch: 90, stealing: 32, fielding: 72, iq: 67 },
    pitching: { control: 57, velocity: 87, break: 62, special: 77, clutch: 84, stamina: 82 },
    overall: 84,
    chemistry: ["Waluigi", "Donkey Kong", "Bowser"],
    favoriteLineupSpots: [4, 5, 6]
  },
  {
    name: "Daisy",
    positions: ["LF", "CF", "SS", "2B"],
    hitting: { power: 72, speed: 89, contact: 82, vision: 82, clutch: 82, stealing: 77, fielding: 87, iq: 89 },
    // pitching: { control: 86, velocity: 62, break: 70, special: 72, clutch: 80, stamina: 74 },
    overall: 83,
    chemistry: ["Peach", "Luigi", "Toadette"],
    favoriteLineupSpots: [2, 6, 8]
  },
  {
    name: "Rosalina",
    positions: ["SP", "DH", "LF", "RP"],
    hitting: { power: 80, speed: 78, contact: 82, vision: 92, clutch: 90, stealing: 72, fielding: 87, iq: 96 },
    pitching: { control: 93, velocity: 82, break: 91, special: 96, clutch: 93, stamina: 86 },
    overall: 88,
    chemistry: ["Kamek", "Pauline", "Mario"],
    favoriteLineupSpots: [3, 4, 5]
  },
  {
    name: "Toadette",
    positions: ["2B", "SS", "LF", "RP"],
    hitting: { power: 52, speed: 88, contact: 82, vision: 84, clutch: 76, stealing: 90, fielding: 83, iq: 86 },
    pitching: { control: 80, velocity: 58, break: 70, special: 78, clutch: 77, stamina: 70 },
    overall: 81,
    chemistry: ["Toad", "Daisy", "Luigi"],
    favoriteLineupSpots: [1, 7, 9]
  },
  {
    name: "Bowser Jr.",
    positions: ["2B", "C", "LF", "SP"],
    hitting: { power: 80, speed: 70, contact: 78, vision: 75, clutch: 82, stealing: 65, fielding: 80, iq: 85 },
    pitching: { control: 78, velocity: 80, break: 75, special: 85, clutch: 84, stamina: 80 },
    overall: 84,
    chemistry: ["Bowser", "Kamek", "Shy Guy"],
    favoriteLineupSpots: [3, 5, 6]
  },
  {
    name: "Koopa Troopa",
    positions: ["SS", "2B", "CF", "RF"],
    hitting: { power: 55, speed: 85, contact: 75, vision: 78, clutch: 70, stealing: 80, fielding: 85, iq: 80 },
    // pitching: { control: 75, velocity: 60, break: 68, special: 72, clutch: 70, stamina: 68 },
    overall: 79,
    chemistry: ["Dry Bones", "Shy Guy", "Monty Mole"],
    favoriteLineupSpots: [1, 8, 9]
  },
  {
    name: "Shy Guy",
    positions: ["RF", "LF", "2B", "RP"],
    hitting: { power: 60, speed: 78, contact: 74, vision: 76, clutch: 72, stealing: 75, fielding: 78, iq: 82 },
    pitching: { control: 73, velocity: 65, break: 70, special: 74, clutch: 75, stamina: 70 },
    overall: 78,
    chemistry: ["Koopa Troopa", "Dry Bones", "Bowser Jr."],
    favoriteLineupSpots: [7, 8, 9]
  },
  {
    name: "Birdo",
    positions: ["C", "1B", "3B", "DH"],
    hitting: { power: 80, speed: 70, contact: 85, vision: 82, clutch: 84, stealing: 65, fielding: 85, iq: 83 },
    // pitching: { control: 70, velocity: 70, break: 65, special: 68, clutch: 78, stamina: 72 },
    overall: 83,
    chemistry: ["Yoshi", "Pauline", "Monty Mole"],
    favoriteLineupSpots: [3, 5, 6]
  },
  {
    name: "Kamek",
    positions: ["SP", "RP", "SS", "LF"],
    hitting: { power: 58, speed: 58, contact: 62, vision: 76, clutch: 78, stealing: 48, fielding: 80, iq: 95 },
    pitching: { control: 90, velocity: 70, break: 85, special: 92, clutch: 90, stamina: 80 },
    overall: 81,
    chemistry: ["Bowser", "Rosalina", "Bowser Jr."],
    favoriteLineupSpots: [3, 4, 8]
  },
  {
    name: "Waluigi",
    positions: ["1B", "3B", "LF", "RP"],
    hitting: { power: 75, speed: 78, contact: 77, vision: 70, clutch: 82, stealing: 68, fielding: 82, iq: 80 },
    pitching: { control: 80, velocity: 75, break: 72, special: 78, clutch: 80, stamina: 76 },
    overall: 82,
    chemistry: ["Wario", "Hammer Bro", "Shy Guy"],
    favoriteLineupSpots: [5, 6, 7]
  },
  {
    name: "Dry Bones",
    positions: ["SS", "2B", "C", "RP"],
    hitting: { power: 60, speed: 85, contact: 80, vision: 82, clutch: 78, stealing: 82, fielding: 80, iq: 85 },
    pitching: { control: 78, velocity: 65, break: 75, special: 76, clutch: 78, stamina: 74 },
    overall: 81,
    chemistry: ["Koopa Troopa", "Shy Guy", "Monty Mole"],
    favoriteLineupSpots: [8, 9]
  },
  {
    name: "Hammer Bro",
    positions: ["3B", "LF", "DH", "RF"],
    hitting: { power: 92, speed: 55, contact: 78, vision: 68, clutch: 86, stealing: 40, fielding: 75, iq: 75 },
    // pitching: { control: 60, velocity: 85, break: 65, special: 80, clutch: 82, stamina: 78 },
    overall: 83,
    chemistry: ["Donkey Kong", "Waluigi", "Wario"],
    favoriteLineupSpots: [3, 4, 5]
  },
  {
    name: "Monty Mole",
    positions: ["2B", "CF", "LF", "RP"],
    hitting: { power: 70, speed: 80, contact: 75, vision: 72, clutch: 74, stealing: 78, fielding: 80, iq: 78 },
    pitching: { control: 75, velocity: 65, break: 70, special: 72, clutch: 75, stamina: 70 },
    overall: 79,
    chemistry: ["Dry Bones", "Birdo", "Koopa Troopa"],
    favoriteLineupSpots: [6, 8, 9]
  },
  {
    name: "Pauline",
    positions: ["CF", "LF", "2B", "RP"],
    hitting: { power: 70, speed: 85, contact: 80, vision: 88, clutch: 82, stealing: 78, fielding: 80, iq: 90 },
    pitching: { control: 82, velocity: 65, break: 75, special: 80, clutch: 80, stamina: 75 },
    overall: 84,
    chemistry: ["Rosalina", "Birdo", "Mario"],
    favoriteLineupSpots: [1, 2, 4]
  },
  { 
  name: "King Boo", 
  positions: ["SP", "RP", "LF", "DH"], 
  hitting: { power: 85, speed: 60, contact: 75, vision: 80, clutch: 88, stealing: 50, fielding: 78, iq: 85 }, 
  pitching: { control: 88, velocity: 70, break: 85, special: 90, clutch: 90, stamina: 80 }, 
  overall: 86,
  chemistry: ["Petey Piranha", "Boo", "Dry Bones", "Bowser Jr."],
  favoriteLineupSpots: [3, 4, 5]
},
{ 
  name: "Petey Piranha", 
  positions: ["1B", "DH", "LF", "RP"], 
  hitting: { power: 95, speed: 50, contact: 78, vision: 70, clutch: 85, stealing: 40, fielding: 80, iq: 75 }, 
  pitching: { control: 70, velocity: 85, break: 70, special: 80, clutch: 82, stamina: 78 }, 
  overall: 84,
  chemistry: ["King Boo", "Wiggler", "Piranha Plant", "Goomba"],
  favoriteLineupSpots: [4, 5, 6]
},
{ 
  name: "Captain Toad", 
  positions: ["2B", "SS", "CF", "RP"], 
  hitting: { power: 60, speed: 80, contact: 82, vision: 85, clutch: 75, stealing: 80, fielding: 85, iq: 88 }, 
  pitching: { control: 80, velocity: 60, break: 70, special: 75, clutch: 78, stamina: 70 }, 
  overall: 82,
  chemistry: ["Toadette", "Toadsworth", "Professor E. Gadd", "Luigi"],
  favoriteLineupSpots: [1, 2, 7]
},
{ 
  name: "Professor E. Gadd", 
  positions: ["SP", "RP", "SS", "LF"], 
  hitting: { power: 65, speed: 60, contact: 75, vision: 90, clutch: 80, stealing: 50, fielding: 78, iq: 95 }, 
  pitching: { control: 90, velocity: 65, break: 85, special: 92, clutch: 88, stamina: 75 }, 
  overall: 85,
  chemistry: ["Luigi", "Captain Toad", "E. Gaddbot", "Toadsworth"],
  favoriteLineupSpots: [2, 6, 9]
},
{ 
  name: "Nabbit", 
  positions: ["CF", "LF", "2B", "RP"], 
  hitting: { power: 70, speed: 95, contact: 80, vision: 75, clutch: 78, stealing: 90, fielding: 80, iq: 80 }, 
  pitching: { control: 75, velocity: 70, break: 70, special: 78, clutch: 80, stamina: 72 }, 
  overall: 83,
  chemistry: ["Bowser Jr.", "Shy Guy", "Wario", "Waluigi"],
  favoriteLineupSpots: [1, 2, 8]
},
{ 
  name: "Poochy", 
  positions: ["CF", "LF", "RF", "RP"], 
  hitting: { power: 65, speed: 90, contact: 78, vision: 70, clutch: 75, stealing: 85, fielding: 85, iq: 80 }, 
  pitching: { control: 70, velocity: 65, break: 68, special: 72, clutch: 75, stamina: 70 }, 
  overall: 80,
  chemistry: ["Yoshi", "Baby Mario", "Birdo", "Toadette"],
  favoriteLineupSpots: [1, 8, 9]
},
{ 
  name: "Goomba", 
  positions: ["1B", "DH", "LF", "RP"], 
  hitting: { power: 50, speed: 60, contact: 70, vision: 65, clutch: 68, stealing: 40, fielding: 70, iq: 60 }, 
  pitching: { control: 60, velocity: 55, break: 60, special: 65, clutch: 65, stamina: 65 }, 
  overall: 70,
  chemistry: ["Goombella", "Koopa", "Petey Piranha", "Monty Mole"],
  favoriteLineupSpots: [7, 8, 9]
},
{ 
  name: "Koopa Paratroopa", 
  positions: ["CF", "LF", "RF", "RP"], 
  hitting: { power: 60, speed: 85, contact: 75, vision: 70, clutch: 72, stealing: 80, fielding: 80, iq: 75 }, 
  pitching: { control: 70, velocity: 65, break: 70, special: 75, clutch: 75, stamina: 70 }, 
  overall: 78,
  chemistry: ["Koopa Troopa", "Lakitu", "Goomba", "Shy Guy"],
  favoriteLineupSpots: [1, 6, 8]
},
{ 
  name: "Blooper", 
  positions: ["SP", "RP", "CF", "LF"], 
  hitting: { power: 65, speed: 70, contact: 72, vision: 68, clutch: 70, stealing: 60, fielding: 75, iq: 70 }, 
  pitching: { control: 75, velocity: 70, break: 80, special: 85, clutch: 78, stamina: 72 }, 
  overall: 77,
  chemistry: ["Cheep Cheep", "Gooper Blooper", "Koopa Paratroopa", "Monty Mole"],
  favoriteLineupSpots: [7, 8, 9]
},
{
  name: "Lakitu",
  positions: ["CF", "RF", "SP", "2B"],
  hitting: { power: 70, speed: 78, contact: 80, vision: 75, clutch: 85, stealing: 70, fielding: 80, iq: 85 },
  pitching: { control: 76, velocity: 72, break: 70, special: 82, clutch: 80, stamina: 75 },
  overall: 81,
  chemistry: ["Baby Mario", "Diddy Kong", "Funky Kong"],
  favoriteLineupSpots: [2, 4, 7]
},
{
  name: "Fawful",
  positions: ["SS", "3B", "LF"],
  hitting: { power: 68, speed: 65, contact: 78, vision: 80, clutch: 75, stealing: 65, fielding: 77, iq: 83 },
  pitching: { control: 70, velocity: 69, break: 67, special: 80, clutch: 78, stamina: 72 },
  overall: 79,
  chemistry: ["King K. Rool", "Bowser", "Waluigi"],
  favoriteLineupSpots: [3, 5, 8]
},
{
  name: "Baby Mario",
  positions: ["2B", "SS", "CF"],
  hitting: { power: 65, speed: 85, contact: 88, vision: 82, clutch: 80, stealing: 90, fielding: 82, iq: 88 },
  pitching: { control: 70, velocity: 65, break: 60, special: 75, clutch: 80, stamina: 70 },
  overall: 82,
  chemistry: ["Luigi", "Peach", "Yoshi"],
  favoriteLineupSpots: [1, 2, 4]
},
{
  name: "Baby Luigi",
  positions: ["2B", "3B", "CF"],
  hitting: { power: 70, speed: 82, contact: 86, vision: 84, clutch: 81, stealing: 78, fielding: 80, iq: 85 },
  pitching: { control: 75, velocity: 69, break: 66, special: 77, clutch: 80, stamina: 75 },
  overall: 83,
  chemistry: ["Mario", "Daisy", "Toadette"],
  favoriteLineupSpots: [2, 4, 6]
},
{
  name: "Baby Peach",
  positions: ["LF", "RF", "CF"],
  hitting: { power: 60, speed: 70, contact: 88, vision: 85, clutch: 80, stealing: 80, fielding: 75, iq: 85 },
  pitching: { control: 68, velocity: 63, break: 62, special: 70, clutch: 75, stamina: 70 },
  overall: 78,
  chemistry: ["Baby Daisy", "Toadette", "Luigi"],
  favoriteLineupSpots: [3, 5, 7]
},
{
  name: "Baby Daisy",
  positions: ["2B", "3B", "SS"],
  hitting: { power: 62, speed: 78, contact: 85, vision: 83, clutch: 78, stealing: 82, fielding: 80, iq: 83 },
  pitching: { control: 70, velocity: 65, break: 63, special: 72, clutch: 75, stamina: 68 },
  overall: 79,
  chemistry: ["Baby Peach", "Yoshi", "Luigi"],
  favoriteLineupSpots: [2, 5, 9]
},
{
  name: "King K. Rool",
  positions: ["1B", "3B", "SP"],
  hitting: { power: 92, speed: 55, contact: 85, vision: 75, clutch: 90, stealing: 40, fielding: 85, iq: 80 },
  pitching: { control: 80, velocity: 85, break: 90, special: 92, clutch: 88, stamina: 92 },
  overall: 88,
  chemistry: ["Fawful", "Dry Bowser", "Diddy Kong"],
  favoriteLineupSpots: [4, 5, 6]
},
{
  name: "Diddy Kong",
  positions: ["CF", "RF", "LF"],
  hitting: { power: 75, speed: 90, contact: 85, vision: 80, clutch: 88, stealing: 92, fielding: 80, iq: 87 },
  pitching: { control: 75, velocity: 68, break: 72, special: 80, clutch: 85, stamina: 78 },
  overall: 86,
  chemistry: ["Lakitu", "Funky Kong", "Tiny Kong"],
  favoriteLineupSpots: [1, 3, 4]
},
{
  name: "Tiny Kong",
  positions: ["LF", "CF", "RF"],
  hitting: { power: 70, speed: 85, contact: 80, vision: 75, clutch: 80, stealing: 78, fielding: 80, iq: 78 },
  pitching: { control: 70, velocity: 75, break: 80, special: 78, clutch: 80, stamina: 77 },
  overall: 80,
  chemistry: ["Diddy Kong", "Funky Kong", "Lakitu"],
  favoriteLineupSpots: [2, 3, 7]
},
{
  name: "Funky Kong",
  positions: ["RF", "LF", "CF"],
  hitting: { power: 85, speed: 80, contact: 75, vision: 75, clutch: 87, stealing: 75, fielding: 82, iq: 84 },
  pitching: { control: 78, velocity: 80, break: 72, special: 85, clutch: 90, stamina: 82 },
  overall: 86,
  chemistry: ["Diddy Kong", "Tiny Kong", "Lakitu"],
  favoriteLineupSpots: [3, 5, 6]
},
{
  name: "Dry Bowser",
  positions: ["1B", "SP", "RP"],
  hitting: { power: 92, speed: 60, contact: 85, vision: 70, clutch: 95, stealing: 40, fielding: 80, iq: 88 },
  pitching: { control: 88, velocity: 92, break: 90, special: 93, clutch: 92, stamina: 92 },
  overall: 88,
  chemistry: ["King K. Rool", "Waluigi", "Fawful"],
  favoriteLineupSpots: [4, 6, 9]
},
{
  name: "Wiggler",
  positions: ["1B", "3B", "SP"],
  hitting: { power: 80, speed: 70, contact: 85, vision: 80, clutch: 83, stealing: 65, fielding: 85, iq: 85 },
  pitching: { control: 75, velocity: 78, break: 82, special: 80, clutch: 85, stamina: 80 },
  overall: 84,
  chemistry: ["King K. Rool", "Diddy Kong", "Funky Kong"],
  favoriteLineupSpots: [4, 5, 7]
},
{
  name: "Boo",
  positions: ["CF", "RF", "SP"],
  hitting: { power: 70, speed: 75, contact: 82, vision: 84, clutch: 80, stealing: 76, fielding: 75, iq: 85 },
  pitching: { control: 72, velocity: 65, break: 70, special: 78, clutch: 80, stamina: 74 },
  overall: 82,
  chemistry: ["Dry Bowser", "Diddy Kong", "Funky Kong"],
  favoriteLineupSpots: [1, 2, 6]
}

];
const sortLineup = (lineup) => lineup.sort((a, b) => b.hitting.power - a.hitting.power);