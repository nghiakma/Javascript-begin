const team = {
  _players: [
    {firstName: "Ray",
    lastName: "Yao",
    age: 28},
    {firstName: "Josh",
    lastName: "Wilcox",
    age: 30},
    {firstName: "Teja",
    lastName: "Gotimukala",
    age: 25},
  ],
  
  _games: [
    {opponent: "Fuel",
    teamPoints: 3,
    opponentPoints: 2},
    {opponent: "Dragons",
    teamPoints: 1,
    opponentPoints: 3},
    {opponent: "NYXL",
    teamPoints: 0,
    opponentPoints: 3},
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer: function(firstName, lastName, age) {
    const newPlayer = {firstName: firstName,
                   lastName: lastName,
                   age: age};
    this._players.push(newPlayer);
  },
  
  addGame: function(opponentName, teamPoints, opponentPoints) {
    const newGame = {opponent: opponentName,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  },
  
};