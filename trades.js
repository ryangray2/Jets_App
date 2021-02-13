var indOffer1 = {
  team: ind,
  receiveText: ["2021 2nd Round"],
  giveText: ["Sam Darnold", "2021 6th Round"],
  receiveIndex: [[1, 21]],
  giveIndex: [[5, 1]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var indOffer2 = {
  team: ind,
  receiveText: ["2021 3rd Round", "2021 4th Round"],
  giveText: ["Sam Darnold", "2021 7th Round"],
  receiveIndex: [[2, 19], [3, 21]],
  giveIndex: [[6, 22]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var pitOffer1 = {
  team: pit,
  receiveText: ["2021 Round 2"],
  giveText: ["Sam Darnold", "2021 7th Round"],
  receiveIndex: [[1, 22]],
  giveIndex: [[6, 22]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var pitOffer2 = {
  team: pit,
  receiveText: ["2021 Round 3", "2021 Round 4"],
  giveText: ["Sam Darnold", "2021 7th Round"],
  receiveIndex: [[2, 22], [3, 22]],
  giveIndex: [[6, 22]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var noOffer = {
  team: no,
  receiveText: ["2021 Round 2"],
  giveText: ["Sam Darnold"],
  receiveIndex: [[1, 27]],
  giveIndex: [],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

var sfOffer = {
  team: sf,
  receiveText: ["2021 Round 2"],
  giveText: ["Sam Darnold", "2021 Round 5"],
  receiveIndex: [[1, 10]],
  giveIndex: [[4, 9]],
  receivePlayer: [],
  givePlayer: [SamDarnold]
}

darnoldTradeArr = [indOffer1, indOffer2, pitOffer1, pitOffer2, noOffer, sfOffer];

var atlOffer = {
  team: atl,
  receiveText: ["2021 Round 1 (#4)", "2021 Round 2", "2021 Round 4"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 3], [1, 2], [3, 2]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var detOffer = {
  team: det,
  receiveText: ["2021 Round 1 (#7)", "2021 Round 2", "2021 Round 3", "2021 Round 4", "2022 Round 3"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 6], [1, 8], [2, 7], [3, 6]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

var carOffer = {
  team: car,
  receiveText: ["2021 Round 1 (#8)", "2021 Round 2", "2021 Round 3", "2021 Round 4", "2022 Round 2"],
  giveText: ["2021 Round 1 (#2)"],
  receiveIndex: [[0, 6], [1, 6], [2, 8], [3, 7]],
  giveIndex: [[0, 1]],
  receivePlayer: [],
  givePlayer: []
}

twoTradeArr = [atlOffer, detOffer, carOffer]
