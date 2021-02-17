var indOffer1 = {
  team: ind,
  receiveText: ["2021 2nd Round (#53)"],
  giveText: ["Sam Darnold", "2021 5th Round"],
  receiveIndex: [[1, 20]],
  giveIndex: [[4, 1]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var indOffer2 = {
  team: ind,
  receiveText: ["2021 3rd Round (#85)", "2021 4th Round (#127)"],
  giveText: ["Sam Darnold"],
  receiveIndex: [[2, 19], [3, 19]],
  giveIndex: [],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var pitOffer1 = {
  team: pit,
  receiveText: ["2021 Round 2 (#56)"],
  giveText: ["Sam Darnold", "2021 6th Round"],
  receiveIndex: [[1, 23]],
  giveIndex: [[5, 14]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var pitOffer2 = {
  team: pit,
  receiveText: ["2021 Round 3 (#88)", "2021 Round 4 (#130)", "2021 Round 6 (#211)"],
  giveText: ["Sam Darnold", "2021 6th Round"],
  receiveIndex: [[2, 22], [3, 22], [5, 22]],
  giveIndex: [[5, 14]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var noOffer = {
  team: no,
  receiveText: ["2021 Round 2 (#60)"],
  giveText: ["Sam Darnold"],
  receiveIndex: [[1, 27]],
  giveIndex: [],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var sfOffer = {
  team: sf,
  receiveText: ["2021 Round 2 (#44)"],
  giveText: ["Sam Darnold", "2021 Round 4"],
  receiveIndex: [[1, 11]],
  giveIndex: [[3, 1]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

darnoldTradeArr = [indOffer1, indOffer2, pitOffer1, pitOffer2, noOffer, sfOffer];

var atlOffer = {
  team: atl,
  receiveText: ["2021 Round 1 (#4)", "2021 Round 2 (#36)", "2021 Round 4 (#110)"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 3], [1, 3], [3, 3]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var detOffer = {
  team: det,
  receiveText: ["2021 Round 1 (#7)", "2021 Round 2 (#39)", "2021 Round 3 (#71)", "2021 Round 4 (#113)", "2022 Round 3"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 7], [1, 6], [2, 6], [3, 5]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var carOffer = {
  team: car,
  receiveText: ["2021 Round 1 (#8)", "2021 Round 2 (#40)", "2021 Round 3 (#72)", "2021 Round 4 (#114)", "2022 Round 2"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 7], [1, 7], [2, 7], [3, 6]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var denOffer = {
  team: den,
  receiveText: ["2021 Round 1 (#9)", "2021 Round 2 (#41)", "2021 Round 3 (#73)", "2021 Round 4 (#115)", "2022 Round 2", "2022 Round 6"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 8], [1, 8], [2, 8], [3, 7]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var wasOffer = {
  team: was,
  receiveText: ["2021 Round 1 (#19)", "2021 Round 2 (#51)", "2021 Round 3 (#76)", "2021 Round 3 (#83)", "2021 Round 4 (#125)", "2022 Round 1"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 18], [1, 18], [2, 17], [2, 11], [3, 17]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

twoTradeArr = [atlOffer, detOffer, carOffer, denOffer, wasOffer]
