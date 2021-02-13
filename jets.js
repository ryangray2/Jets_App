var activeRoster = [];
var teamFA = [];
var offeredArr = [];
var signedArr = [];
var cutArr = [];
var taken = [];
var jetsDrafted = [];
var leftOff = [0, 0];
var assetsOffered = [];
var draftOver = false;
var twoNav = 0;
var darnoldNav = 0;


var tradedFor = [];
var tradedAway = [];

var draftSummary = [];
var leftOffShow = 0;
var showAmount = 0;

function load() {
  divideRoster();
  console.log(getCapRoom());
  updateCapBar();
  console.log(broadFA.length);

  var posList = [];
  for (i = 0; i < currRosterArr.length; i++) {
    if (!posList.includes(currRosterArr[i].pos)) {
      posList.push(currRosterArr[i].pos);
    }
  }
  for (i = 0; i < broadFA.length; i++) {
    if (!posList.includes(broadFA[i].pos)) {
      posList.push(broadFA[i].pos);
    }
  }
  console.log(posList);
}

function startPressed() {
  document.getElementById("startCont").style.display = "none";
  document.getElementById("trans1").style.display = "block";
  document.getElementById("instCont").style.display = "block";
}

function instPressed() {
  document.getElementById("instCont").style.display = "none";
    document.getElementById("trans2").style.display = "block";
      document.getElementById("trans1").style.display = "none";
  document.getElementById("tradePrompt").style.display = "block";
  generateRoster();
  generateTeamFA();
}

function yesWatson() {
  document.getElementById("tradePrompt").style.display = "none";
  document.getElementById("watsonTradeAssets").style.display = "block";
  generateWatsonAssets();
}

function yesDarnold() {
  document.getElementById("tradePrompt").style.display = "none";
  document.getElementById("darnoldTradeOffers").style.display = "block";
  generateDarnoldOffers(darnoldNav);
}

function yesTwo() {
  document.getElementById("tradePrompt").style.display = "none";
  document.getElementById("twoTradeOffers").style.display = "block";
  generateTwoOffers(twoNav);
}

function noWatson() {
  document.getElementById("tradePrompt").style.display = "none";
  document.getElementById("faCont").style.display = "block";
  generateRoster();
  generateTeamFA();
}

function generateDarnoldOffers(num) {
  var root = document.getElementById("darnoldOffers");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  var buttonRow = document.createElement("div");
  buttonRow.classList.add("row", "text-center");
  var r1 = document.createElement("div");
  r1.classList.add("col-3");
  var rbutcol = document.createElement("div");
  rbutcol.classList.add("col-3");
  var lbutcol = document.createElement("div");
  lbutcol.classList.add("col-3");
  var r2 = document.createElement("div");
  r2.classList.add("col-3");

  if (num != darnoldTradeArr.length - 1) {

    var rightButton = document.createElement("button");
    rightButton.setAttribute("onclick", "darnoldRight()");
    rightButton.classList.add('bttn-slant', 'bttn-md', 'butt');
    rightButton.innerHTML = "NEXT";
    rightButton.style.paddingRight = "5px";
    rightButton.style.paddingLeft = "5px";

    rbutcol.appendChild(rightButton);

  }
  if (num != 0) {

    var leftButton = document.createElement("button");
    leftButton.setAttribute("onclick", "darnoldLeft()");
    leftButton.classList.add('bttn-slant', 'bttn-md', 'butt');
    leftButton.innerHTML = "PREVIOUS";
    leftButton.style.paddingRight = "5px";
    leftButton.style.paddingLeft = "5px";

    lbutcol.appendChild(leftButton);

  }
  buttonRow.appendChild(r1);
    buttonRow.appendChild(lbutcol);
  buttonRow.appendChild(rbutcol);
    buttonRow.appendChild(r2);

  root.appendChild(buttonRow);
  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col1 = document.createElement("div");
  col1.classList.add("col-6");

  var col2 = document.createElement("div");
  col2.classList.add("col-6");

  var img = document.createElement("img");
  img.setAttribute("src", nyj.logo);
  img.classList.add("tradeLogo");

  var img2 = document.createElement("img");
  img2.setAttribute("src", darnoldTradeArr[num].team.logo);
  console.log(darnoldTradeArr[num].team.logo)
  img2.classList.add("tradeLogo");

  col1.appendChild(img);
  col2.appendChild(img2);

  for (let k = 0; k < darnoldTradeArr[num].receiveText.length; k++) {
    var p = document.createElement("p");
    p.innerHTML = darnoldTradeArr[num].receiveText[k];
    col1.appendChild(p);
  }
  for (let j = 0; j < darnoldTradeArr[num].giveText.length; j++) {
    var p = document.createElement("p");
    p.innerHTML = darnoldTradeArr[num].giveText[j];
    col2.appendChild(p);
  }
  row.appendChild(col1);
  row.appendChild(col2);
  root.appendChild(row);


}

function darnoldRight() {
  darnoldNav++;
  console.log(darnoldNav);
  generateDarnoldOffers(darnoldNav);
}

function darnoldLeft() {
  darnoldNav--;
  generateDarnoldOffers(darnoldNav);
}

function generateTwoOffers(num) {
  var root = document.getElementById("twoOffers");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  var buttonRow = document.createElement("div");
  buttonRow.classList.add("row", "text-center");
  var r1 = document.createElement("div");
  r1.classList.add("col-3");
  var rbutcol = document.createElement("div");
  rbutcol.classList.add("col-3");
  var lbutcol = document.createElement("div");
  lbutcol.classList.add("col-3");
  var r2 = document.createElement("div");
  r2.classList.add("col-3");

  if (num != twoTradeArr.length - 1) {

    var rightButton = document.createElement("button");
    rightButton.setAttribute("onclick", "twoRight()");
    rightButton.classList.add('bttn-slant', 'bttn-md', 'butt');
    rightButton.innerHTML = "NEXT";

    rbutcol.appendChild(rightButton);

  }
  if (num != 0) {

    var leftButton = document.createElement("button");
    leftButton.setAttribute("onclick", "twoLeft()");
    leftButton.innerHTML = "PREVIOUS";
    leftButton.classList.add('bttn-slant', 'bttn-md', 'butt');

    lbutcol.appendChild(leftButton);

  }
    buttonRow.appendChild(r1);
    buttonRow.appendChild(lbutcol);
  buttonRow.appendChild(rbutcol);
    buttonRow.appendChild(r2);

      root.appendChild(buttonRow);

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col1 = document.createElement("div");
  col1.classList.add("col-6");

  var col2 = document.createElement("div");
  col2.classList.add("col-6");

  var img = document.createElement("img");
  img.setAttribute("src", nyj.logo);
  img.classList.add("tradeLogo");

  var img2 = document.createElement("img");
  img2.setAttribute("src", twoTradeArr[num].team.logo);
  console.log(twoTradeArr[num].team.logo)
  img2.classList.add("tradeLogo");

  col1.appendChild(img);
  col2.appendChild(img2);

  for (let k = 0; k < twoTradeArr[num].receiveText.length; k++) {
    var p = document.createElement("p");
    p.innerHTML = twoTradeArr[num].receiveText[k];
    col1.appendChild(p);
  }
  for (let j = 0; j < twoTradeArr[num].giveText.length; j++) {
    var p = document.createElement("p");
    p.innerHTML = twoTradeArr[num].giveText[j];
    col2.appendChild(p);
  }
  row.appendChild(col1);
  row.appendChild(col2);
  root.appendChild(row);



}

function twoRight() {
  twoNav++;
  generateTwoOffers(twoNav);
}

function twoLeft() {
  twoNav--;
  generateTwoOffers(twoNav);
}

function skipTrade() {
  document.getElementById("watsonResult").style.display = "none";
    document.getElementById("trans3").style.display = "block";
  document.getElementById("faCont").style.display = "block";
  // document.getElementById("tradePrompt").style.display = "none";
      document.getElementById("watsonTrade").style.display = "none";
            document.getElementById("twoTrade").style.display = "none";
                  document.getElementById("darnoldTrade").style.display = "none";

  generateRoster();
  generateTeamFA();
  updateCapBar() // fix
  generateRoster();
}

function finishTrade(type) {
  if (type === "watson") {
    //// Trade rejected
    if (!checkTradeValue()) {
      document.getElementById("tradePrompt").style.display = "block";
      document.getElementById("watsonResult").style.display = "none";
    }
    //// traded 2 and Darnold successfully for Watson
    else if (assetsOffered.includes(SamDarnold)) {
      skipTrade();
    }
    //// Trade 2 successfully for Watson
    else {
      document.getElementById("tradePrompt").style.display = "block";
      document.getElementById("watsonTrade").style.display = "none";
      document.getElementById("twoTrade").style.display = "none";
      document.getElementById("watsonResult").style.display = "none";
    }
    generateRoster();
    generateTeamFA();
    updateCapBar() // fix
    generateRoster();
  }
  else if (type === "darnold") {
    for (var i = 0; i < darnoldTradeArr[darnoldNav].giveIndex.length; i++) {
      draftOrder[darnoldTradeArr[darnoldNav].giveIndex[i][0]][darnoldTradeArr[darnoldNav].giveIndex[i][1]] = darnoldTradeArr[darnoldNav].team;
    }
    for (var i = 0; i < darnoldTradeArr[darnoldNav].receiveIndex.length; i++) {
      draftOrder[darnoldTradeArr[darnoldNav].receiveIndex[i][0]][darnoldTradeArr[darnoldNav].receiveIndex[i][1]] = nyj;

    }
    for (var i = 0; i < darnoldTradeArr[darnoldNav].receiveText.length; i++) {
      tradedFor.push(darnoldTradeArr[darnoldNav].receiveText[i]);
    }
    for (var i = 0; i < darnoldTradeArr[darnoldNav].giveText.length; i++) {
      tradedAway.push(darnoldTradeArr[darnoldNav].giveText[i]);
    }
    const index =  watsonTradeAssets.indexOf(SamDarnold);
    watsonTradeAssets.splice(index, 1);

    const index2 =  activeRoster.indexOf(SamDarnold);
    activeRoster.splice(index2, 1);
    document.getElementById("tradePrompt").style.display = "block";
    document.getElementById("darnoldTrade").style.display = "none";
    document.getElementById("darnoldTradeOffers").style.display = "none";
  }
  else if (type === "two") {
    for (var i = 0; i < twoTradeArr[twoNav].giveIndex.length; i++) {
      draftOrder[twoTradeArr[twoNav].giveIndex[i][0]][twoTradeArr[twoNav].giveIndex[i][1]] = twoTradeArr[twoNav].team;

    }
    for (var i = 0; i < twoTradeArr[twoNav].receiveIndex.length; i++) {
      draftOrder[twoTradeArr[twoNav].receiveIndex[i][0]][twoTradeArr[twoNav].receiveIndex[i][1]] = nyj;

    }
    for (var i = 0; i < twoTradeArr[twoNav].receiveText.length; i++) {
      tradedFor.push(twoTradeArr[twoNav].receiveText[i]);
    }
    for (var i = 0; i < twoTradeArr[twoNav].giveText.length; i++) {
      tradedAway.push(twoTradeArr[twoNav].giveText[i]);
    }
    document.getElementById("tradePrompt").style.display = "block";
    document.getElementById("twoTrade").style.display = "none";
    document.getElementById("watsonTrade").style.display = "none";
    document.getElementById("twoTradeOffers").style.display = "none";
  }
}

function acceptTwoOffer() {
  finishTrade("two");
}

function acceptDarnoldOffer() {
  finishTrade("darnold");
}


function watsonContinue() {
  finishTrade("watson");
}

function generateWatsonAssets() {
  var root = document.getElementById("assets");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  for (let i = 0; i < watsonTradeAssets.length; i++) {
    var row = document.createElement("div");
    row.classList.add("row", "watsonAssetRow");


    var nameCol = document.createElement("div");
    nameCol.classList.add("col-12", "col-md-8", "assetCol");
    nameCol.setAttribute("id", watsonTradeAssets[i].name.replace(/\s+/g, ''));
    nameCol.addEventListener('click', function() {
      addAsset(watsonTradeAssets[i]);
    });

    var nameP = document.createElement("p");
    nameP.innerHTML = watsonTradeAssets[i].name;

    nameCol.appendChild(nameP);
    row.appendChild(nameCol);
    root.appendChild(row);
  }
}

function addAsset(thing) {
  if (thing.included === false) {
    assetsOffered.push(thing);
    document.getElementById(thing.name.replace(/\s+/g, '')).style.backgroundColor = "gray";
    thing.included = true;
  } else {
    const index = assetsOffered.indexOf(thing);
    assetsOffered.splice(index, 1);
    document.getElementById(thing.name.replace(/\s+/g, '')).style.backgroundColor = "transparent";
    thing.included = false;
  }
}

function makeOffer() {
  var accepted = checkTradeValue();
  document.getElementById("watsonTradeAssets").style.display = "none";
  document.getElementById("watsonResult").style.display = "block";
  if (accepted) {
    document.getElementById("resultText").innerHTML = "Accepted";
    activeRoster.push(DeshaunWatson);
    tradedFor.push(DeshaunWatson.name);
    for (var i = 0; i < assetsOffered.length; i++) {
      tradedAway.push(assetsOffered[i].name);
      if (assetsOffered[i].thisYear === true) {
        draftOrder[assetsOffered[i].index[0]][assetsOffered[i].index[1]] = hou;
      }
      if (assetsOffered[i] === SamDarnold) {
        const index = activeRoster.indexOf(SamDarnold);
        activeRoster.splice(index, 1);
      }
      if (assetsOffered[i] === QuinnenWilliams) {
        const index = activeRoster.indexOf(QuinnenWilliams);
        activeRoster.splice(index, 1);
      }
      if (assetsOffered[i] === MekhiBecton) {
        const index = activeRoster.indexOf(MekhiBecton);
        activeRoster.splice(index, 1);
      }
    }
    console.log(draftOrder);
  } else {
    document.getElementById("resultText").innerHTML = "Rejected";
  }
}


// function checkTradeValue() {
//   // var value = 0;
//   // for (let i = 0; i < assetsOffered.length; i++) {
//   //   value += assetsOffered[i].tradeValue;
//   // }
//   // return value >= 150 ? true : false;
//
//   var two = [];
//   for (let j = 0; j < assetsOffered.length; j++) {
//     two.push(assetsOffered[j].order);
//   }
//
//   for (let i = 0; i < acceptableOffers.length; i++) {
//     var one = [];
//
//     for (let k = 0; k < acceptableOffers[i].length; k++) {
//       one.push(acceptableOffers[i][k].order);
//     }
//     one.sort(function(a, b){return a-b});
//     two.sort(function(a, b){return a-b});
//     console.log(one);
//     console.log(two);
//     if (one.toString() === two.toString()) {
//       return true;
//     }
//   }
//   return false;
// }

function checkTradeValue() {
  for (let i = 0; i < acceptableOffers.length; i++) {
    var target = 0;
    for (let j = 0; j < assetsOffered.length; j++) {
      if (acceptableOffers[i].includes(assetsOffered[j])) {
        target++
        if (target === acceptableOffers[i].length) {
          return true;
        }
      }
    }
  }
  return false;
}



function generateTeamFA() {

  var root = document.getElementById("faNavCont");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  for (let i = 0; i < teamFA.length; i++) {

//// PICTURE
    var imgrow = document.createElement("div");
    imgrow.classList.add("row", "text-center");

    var imgcol = document.createElement("div");
    imgcol.classList.add("col-12");

    var img = document.createElement("img");
    img.setAttribute("src", teamFA[i].img);
    img.classList.add("faImg");

    imgcol.appendChild(img);
    imgrow.appendChild(imgcol);
    root.appendChild(imgrow);
////
    var row = document.createElement("div");
    row.classList.add("row", "text-center");

    var nameCol = document.createElement("div");
    nameCol.classList.add("col-12");

    var nameP = document.createElement("p");
    nameP.classList.add("faName");
    nameP.innerHTML = teamFA[i].name.toUpperCase();
    nameCol.appendChild(nameP);
    row.appendChild(nameCol);


        // var dumCol = document.createElement("div");
        // dumCol.classList.add("col-3");
        //     row.appendChild(dumCol);

    var posCol = document.createElement("div");
    posCol.classList.add("col-12");

    var posP = document.createElement("p");
    posP.classList.add("faPos");
    posP.innerHTML = teamFA[i].pos + "  /  Age: " + teamFA[i].age;
    posCol.appendChild(posP);
    row.appendChild(posCol);

    // var ageCol = document.createElement("div");
    // ageCol.classList.add("col-3");
    //
    // var ageP = document.createElement("p");
    // ageP.classList.add("faAge");
    // ageP.innerHTML = teamFA[i].age;
    // ageCol.appendChild(ageP);
    // row.appendChild(ageCol);


    var priceCol = document.createElement("div");
    priceCol.classList.add("col-12");

    var priceP = document.createElement("p");
    priceP.classList.add("faPrice");
    priceP.innerHTML = teamFA[i].cYears + " yr./$" + teamFA[i].cTotal + "M";
    priceCol.appendChild(priceP);
    row.appendChild(priceCol);


    if (!offeredArr.includes(teamFA[i])) {
      var signCol = document.createElement("div");
      signCol.classList.add("col-12");

      var signButton = document.createElement("button");
      signButton.classList.add("signButton", "bttn-slant", "bttn-md", "bttn-success", "butt");
      signButton.innerHTML = "SIGN";
      signButton.addEventListener('click', function() {
        signTeamFA(teamFA[i]);
      });
      signCol.appendChild(signButton);
      row.appendChild(signCol);
    }

    if (offeredArr.includes(teamFA[i])) {
      row.style.opacity = ".5";
    }
    var hr = document.createElement("hr");
    root.appendChild(row);
    root.appendChild(hr);
  }
}

function signTeamFA(guy) {
  // alert(guy.name);
  guy.salary = (guy.cTotal * 1000000) / guy.cYears;
  if (guy.salary <= getCapRoom()){
    console.log(guy.salary);
    activeRoster.push(guy);
    signedArr.push(guy);
    offeredArr.push(guy);
    /// if you want to remove from list entirely
    // const index = teamFA.indexOf(5);
    // teamFA.splice(index, 1);
    updateCapBar() // fix
    generateTeamFA();
    generateRoster();
    console.log(activeRoster);
  }
}

function popUp(guy, yes) {
  // var target = document.getElementById(guy.name.replace(/\s+/g, ''));
    // position: element(#Target);\

  var pop = document.getElementById("signPop");
  // pop.style.position = "element(#" + guy.name.replace(/\s+/g, '') + ")";
  pop.style.display = "block";
  if (yes) {
    pop.innerHTML = guy.name + " Accepts!";
  }
  else {
    pop.innerHTML = guy.name + " has decided to sign elsewhere";
  }
  setTimeout(function(){   pop.style.display = "none"; }, 1500);
}

function signBroadFA(guy) {
  // alert(guy.name);
  guy.salary = (guy.cTotal * 1000000) / guy.cYears;
  var sal = guy.salary;
  var cap =  getCapRoom();
  if (sal < cap) {
    console.log('test');
    var num = (Math.floor(Math.random() * 100));
    if (guy.interest >= num) {
      popUp(guy, true);
      console.log(guy.salary);
      activeRoster.push(guy);
      signedArr.push(guy);
      offeredArr.push(guy);
      /// if you want to remove from list entirely
      // const index = teamFA.indexOf(5);
      // teamFA.splice(index, 1);
      updateCapBar() // fix
      generateBroadFA();
      generateRoster();
      console.log(activeRoster);
    } else {
      popUp(guy, false);
      console.log("Rejected");
      offeredArr.push(guy);
      generateBroadFA();
    }

  }
}

function generateRoster() {
  var root = document.getElementById("rosterNavCont");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  activeRoster.sort(function(a,b) {
    var aNum;
    switch(a.pos) {
      case "QB":
        aNum = 10;
        break;
      case "RB":
        aNum = 9;
        break;
      case "WR":
        aNum = 8;
        break;
      case "TE":
        aNum = 7;
        break;
      case "OL":
        aNum = 6;
        break;
      case "T":
        aNum = 6;
        break;
      case "OG":
        aNum = 6;
        break;
      case "OT":
        aNum = 6;
        break;
      case "G":
        aNum = 6;
        break;
      case "C":
        aNum = 6;
        break;
      case "LT":
        aNum = 6;
        break;
      case "DE":
        aNum = 5;
        break;
      case "DL":
        aNum = 5;
        break;
      case "DT":
        aNum = 5;
        break;
      case "ILB":
        aNum = 4;
        break;
      case "LB":
        aNum = 4;
        break;
      case "ROLB":
        aNum = 4;
        break;
      case "MLB":
        aNum = 4;
        break;
      case "CB":
        aNum = 3;
        break;
      case "DB":
        aNum = 3;
        break;
      case "FS":
        aNum = 2;
        break;
      case "S":
        aNum = 3;
        break;
      default:
        aNum = 2;
    }
    var bNum;
    switch(b.pos) {
      case "QB":
        bNum = 10;
        break;
      case "RB":
        bNum = 9;
        break;
      case "WR":
        bNum = 8;
        break;
      case "TE":
        bNum = 7;
        break;
      case "OL":
        bNum = 6;
        break;
      case "T":
        bNum = 6;
        break;
      case "OG":
        bNum = 6;
        break;
      case "OT":
        bNum = 6;
        break;
      case "C":
        bNum = 6;
        break;
      case "G":
        bNum = 6;
        break;
      case "LT":
        bNum = 6;
        break;
      case "DE":
        bNum = 5;
        break;
      case "DL":
        bNum = 5;
        break;
      case "DT":
        bNum = 5;
        break;
      case "ILB":
        bNum = 4;
        break;
      case "LB":
        bNum = 4;
        break;
      case "ROLB":
        bNum = 4;
        break;
      case "MLB":
        bNum = 4;
        break;
      case "CB":
        bNum = 3;
        break;
      case "DB":
        bNum = 3;
        break;
      case "FS":
        bNum = 2;
        break;
      case "S":
        bNum = 3;
        break;
      default:
        bNum = 2;
    }
    return bNum - aNum;
  });

  for (let i = 0; i < activeRoster.length; i++) {
    var row = document.createElement("div");
    row.classList.add("row");

    var posCol = document.createElement("div");
    posCol.classList.add("col-2");

    var posP = document.createElement("p");
    posP.classList.add("rosterPos");
    posP.innerHTML = activeRoster[i].pos;
    posCol.appendChild(posP);
    row.appendChild(posCol);

    var nameCol = document.createElement("div");
    nameCol.classList.add("col-7");

    var nameP = document.createElement("p");
    nameP.classList.add("rosterName");
    nameP.innerHTML = activeRoster[i].name;
    nameCol.appendChild(nameP);
    row.appendChild(nameCol);
    if (!signedArr.includes(activeRoster[i])) {
      var cutCol = document.createElement("div");
      cutCol.classList.add("col-3");
 ///<i class="fa fa-minus-circle" aria-hidden="true"></i>
      var cutButton = document.createElement("button");
      cutButton.classList.add("rosterCut", "btn");

      cutButton.addEventListener('click', function() {
        cutPlayer(activeRoster[i]);
      });

      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-minus-circle", "fa-lg");
      icon.setAttribute("aria-hidden", "true");

      cutButton.appendChild(icon);
      cutCol.appendChild(cutButton);
      row.appendChild(cutCol);
    }
    root.appendChild(row);
  }
}

function cutPlayer(guy) {
  cutArr.push(guy);
  const index = activeRoster.indexOf(guy);
  activeRoster.splice(index, 1);
  updateCapBar(); // fix
  generateRoster();
}

function generateDraftPool(kind) {
  var amount = 50;
  var tempArray = [];
  if (draftPlayers.length < 50) {
    amount = draftPlayers.length;
  }
  if (kind === "QB") {
    var count = 0;
    while (tempArray.length < amount && draftPlayers[count + 1] != null) {
      if (draftPlayers[count].pos === "QB") {
        tempArray.push(draftPlayers[count]);
      }
      count++;
    }
    amount = tempArray.length;
  } else if (kind === "RB") {
      var count = 0;
      while (tempArray.length < amount && draftPlayers[count + 1] != null) {
        if (draftPlayers[count].pos === "RB") {
          tempArray.push(draftPlayers[count]);
        }
        count++;
      }
      amount = tempArray.length;
    }
    else if (kind === "WR") {
       var count = 0;
       while (tempArray.length < amount && draftPlayers[count + 1] != null) {
         if (draftPlayers[count].pos === "WR") {
           tempArray.push(draftPlayers[count]);
         }
         count++;
       }
       amount = tempArray.length;
     }
     else if (kind === "TE") {
        var count = 0;
        while (tempArray.length < amount && draftPlayers[count + 1] != null) {
          if (draftPlayers[count].pos === "TE") {
            tempArray.push(draftPlayers[count]);
          }
          count++;
        }
        amount = tempArray.length;
      }
      else if (kind === "OL") {
         var count = 0;
         while (tempArray.length < amount && draftPlayers[count + 1] != null) {
           if (draftPlayers[count].pos === "IOL" || draftPlayers[count].pos === "OT") {
             tempArray.push(draftPlayers[count]);
           }
           count++;
         }
         amount = tempArray.length;
       }
       else if (kind === "DL") {
          var count = 0;
          while (tempArray.length < amount && draftPlayers[count + 1] != null) {
            if (draftPlayers[count].pos === "EDGE" || draftPlayers[count].pos === "IDL") {
              tempArray.push(draftPlayers[count]);
            }
            count++;
          }
          amount = tempArray.length;
        }
        else if (kind === "LB") {
           var count = 0;
           while (tempArray.length < amount && draftPlayers[count + 1] != null) {
             if (draftPlayers[count].pos === "LB") {
               tempArray.push(draftPlayers[count]);
             }
             count++;
           }
           amount = tempArray.length;
         }
         else if (kind === "CB") {
            var count = 0;
            while (tempArray.length < amount && draftPlayers[count + 1] != null) {
              if (draftPlayers[count].pos === "CB") {
                tempArray.push(draftPlayers[count]);
              }
              count++;
            }
            amount = tempArray.length;
          }
          else if (kind === "S") {
             var count = 0;
             while (tempArray.length < amount && draftPlayers[count + 1] != null) {
               if (draftPlayers[count].pos === "S") {
                 tempArray.push(draftPlayers[count]);
               }
               count++;
             }
             amount = tempArray.length;
           }else {
    tempArray = draftPlayers;
  }
  console.log(tempArray);
  var root = document.getElementById("draftPoolCont");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  for (let i = 0; i < amount; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.style.borderBottom = "1px solid #282520";

    var rankCol = document.createElement("div");
    rankCol.classList.add("col-md-1", "col-2");

    var rankP = document.createElement("p");
    rankP.classList.add("draftPos");
    rankP.innerHTML = tempArray[i].rank;
    rankCol.appendChild(rankP);
    row.appendChild(rankCol);


    var posCol = document.createElement("div");
    posCol.classList.add("col-md-1", "col-2");

    var posP = document.createElement("p");
    posP.classList.add("draftPos");
    posP.innerHTML = tempArray[i].pos;
    posCol.appendChild(posP);
    row.appendChild(posCol);

    var nameCol = document.createElement("div");
    nameCol.classList.add("col-md-4", "col-6");

    var nameP = document.createElement("p");
    nameP.classList.add("draftName", "myauto");
    nameP.innerHTML = tempArray[i].name;
    nameCol.appendChild(nameP);
    row.appendChild(nameCol);

    var schoolCol = document.createElement("div");
    schoolCol.classList.add("col-md-4", "col-0", "d-none", "d-md-block");

    var schoolP = document.createElement("p");
    schoolP.classList.add("draftSchool");
    schoolP.innerHTML = tempArray[i].school;
    schoolCol.appendChild(schoolP);
    row.appendChild(schoolCol);
    // if (!signedArr.includes(draftPlayers[i])) {
      var cutCol = document.createElement("div");
      cutCol.classList.add("col-2", "col-md-2");

      var cutButton = document.createElement("button");
      cutButton.classList.add("draftPlayerButton", "btn");
      // cutButton.innerHTML = "Draft";
      cutButton.addEventListener('click', function() {
        draftPlayer(tempArray[i]);
      });

      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-plus-circle", "fa-lg");
      icon.setAttribute("aria-hidden", "true");
      icon.style.color = "green";

      cutButton.appendChild(icon);
      cutCol.appendChild(cutButton);
      row.appendChild(cutCol);
    // }
    root.appendChild(row);
  }
}

function advanceFA() {
  generateBroadFA();
  document.getElementById("advanceButton").setAttribute("onclick", "doneFA()");
  document.getElementById("advanceButton").innerHTML = "GO TO DRAFT";
  document.getElementById("faHead").innerHTML = "FREE AGENCY";
}

function doneFA() {
  document.getElementById("faCont").style.display = "none";
  document.getElementById("green").style.display = "block";
      document.getElementById("trans2").style.display = "none";
    document.getElementById("tradePrompt").style.display = "none";
    document.getElementById("trans3").style.display = "none";
  document.getElementById("trans4").style.display = "block";
    document.getElementById("draftStartScreen").style.display = "block";
    document.body.style.backgroundColor = "#27251f";
}

function draftPressed() {

  document.getElementById("draftStartScreen").style.display = "none";
  startDraft(leftOff); ///// move to button
  document.getElementById("draftCont").style.display = "block";

}

// function continueDraft() {
//   startDraft(leftOff);
// }

function draftsOver() {
  document.body.setAttribute("style", "background-color: #046a38");
  document.getElementById("draftCont").style.display = "none";
  document.getElementById("summary").style.display = "block";
  generateSummary();
  console.log("\nSIGNED\n")
  for (var i = 0; i < signedArr.length; i++) {
    console.log(signedArr[i].name);
  }
  console.log("\nDRAFTED\n")
  for (var i = 0; i < jetsDrafted.length; i++) {
    console.log(jetsDrafted[i].name);
  }
}

function generateSummary() {
  var root = document.getElementById("tradedFor");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  if (tradedFor.length != 0) {
    for (var i = 0; i < tradedFor.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      var col = document.createElement("div");
      col.classList.add("col-12");
      var p = document.createElement("div");
      p.innerHTML = tradedFor[i];

      col.appendChild(p);
      row.appendChild(col);
      root.appendChild(row);
    }
  }
  var root2 = document.getElementById("tradedAway");
  while (root2.firstChild) {
    root2.removeChild(root2.firstChild);
  }
  if (tradedAway.length != 0) {
    for (var i = 0; i < tradedAway.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      var col = document.createElement("div");
      col.classList.add("col-12");
      var p = document.createElement("div");
      p.innerHTML = tradedAway[i];

      col.appendChild(p);
      row.appendChild(col);
      root2.appendChild(row);
    }
  }
  var root3 = document.getElementById("signed");
  while (root3.firstChild) {
    root3.removeChild(root3.firstChild);
  }
  if (signedArr.length != 0) {
    for (var i = 0; i < signedArr.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      var col = document.createElement("div");
      col.classList.add("col-12");
      var p = document.createElement("div");
      p.innerHTML = signedArr[i].name;

      col.appendChild(p);
      row.appendChild(col);
      root3.appendChild(row);
    }
  }
  var root4 = document.getElementById("drafted");
  while (root4.firstChild) {
    root4.removeChild(root4.firstChild);
  }
  if (jetsDrafted.length != 0) {
    for (var i = 0; i < jetsDrafted.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      var col = document.createElement("div");
      col.classList.add("col-12");
      var p = document.createElement("div");
      p.innerHTML = jetsDrafted[i].name;

      col.appendChild(p);
      row.appendChild(col);
      root4.appendChild(row);
    }
  }
}

function generateTradeOptions() {
  var root = document.getElementById("faNavCont");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

function showDraft() {
  console.log(draftSummary);
  console.log(leftOffShow);
  console.log(showAmount);
  document.getElementById("showDraft").style.display = "block";
  var i = leftOffShow;
  var j = 0;
  while (i < showAmount) {
   (function (i, j) {
     setTimeout(function() {
       if (i == showAmount - 1) {
          document.getElementById("showDraft").style.display = "none";
       } else {
         document.getElementById("showLogo").setAttribute("src", draftSummary[i][0].logo);
         document.getElementById("showPick").innerHTML = draftSummary[i][1].pos + " - " + draftSummary[i][1].name;
       }
     }, 250 * j)
   }) (i++, j++)
  }
  leftOffShow = showAmount - 1;
}

function startDraft(n) {
  var stop = false;
  generateDraftPool("fifty");
  for (var i = n[0]; i < draftOrder.length; i++) {
    if (stop === true) {
      showDraft();
      break;
    }
    var round  = i + 1;

    for (var k = n[1]; k < draftOrder[i].length; k++) {
      showAmount++;
      document.getElementById("roundpicktext").innerHTML = "Round " + (i + 1) + " Pick " + (k + 1);
      if (i === 6 && k === draftOrder[i].length - 1) {
        draftOver = true;
      }
      if (k === 0) {
        console.log("Round " + round);
      }
      if (draftOrder[i][k] != nyj) {
        var teamPicking = draftOrder[i][k];
        var playerTaken = draftPlayers[0]; /// edit to make more random
        draftSummary.push([teamPicking, playerTaken]);
        taken.push(playerTaken);
        const index = draftPlayers.indexOf(playerTaken);
        if (index > -1) {
          draftPlayers.splice(index, 1);
        }
        console.log((k + 1) + " " + teamPicking.name + ": " + playerTaken.name)
      } else {
        generateDraftPool("fifty");
        ///////////////// change
        // var teamPicking = draftOrder[i][k];
        // var playerTaken = draftPlayers[0]; /// edit to make more random
        // taken.push(playerTaken);
        // const index = draftPlayers.indexOf(playerTaken);
        // if (index > -1) {
        //   draftPlayers.splice(index, 1);
        // }
        // console.log((k + 1) + " " + teamPicking.name + ": " + playerTaken.name)
        /////////////////
        leftOff = [i, k + 1];

        stop = true;
        break;
      }
    }
    if (draftOver === true) {
      draftsOver();
      break;
    }
    if (stop == false) {
          leftOff[1] = 0;
    }
  }
}




function draftPlayer(guy) {
  // var teamPicking = draftOrder[i][k];
  // var playerTaken = draftPlayers[0]; /// edit to make more random
  taken.push(guy);
  const index = draftPlayers.indexOf(guy);
  if (index > -1) {
    draftPlayers.splice(index, 1);
  }
  console.log(" Jets: " + guy.name);
  activeRoster.push(guy);
  jetsDrafted.push(guy);
  draftSummary.push([nyj, guy]);
  startDraft(leftOff);
}

function generateBroadFA() {
  var root = document.getElementById("faNavCont");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  for (let i = 0; i < broadFA.length; i++) {
    var row = document.createElement("div");
    row.classList.add("row");

    var nameCol = document.createElement("div");
    nameCol.classList.add("col-12");
    nameCol.setAttribute("id", broadFA[i].name.replace(/\s+/g, ''));

    var nameP = document.createElement("p");
    nameP.classList.add("faName");
    nameP.innerHTML = broadFA[i].name;
    nameCol.appendChild(nameP);
    row.appendChild(nameCol);



    var posCol = document.createElement("div");
    posCol.classList.add("col-6", "col-md-5");

    var posP = document.createElement("p");
    posP.classList.add("faPos");
    posP.innerHTML = broadFA[i].pos + "  /  Age: " + broadFA[i].age;
    posCol.appendChild(posP);
    row.appendChild(posCol);

    // var ageCol = document.createElement("div");
    // ageCol.classList.add("col-3");
    //
    // var ageP = document.createElement("p");
    // ageP.classList.add("faAge");
    // ageP.innerHTML = broadFA[i].age;
    // ageCol.appendChild(ageP);
    // row.appendChild(ageCol);

    var priceCol = document.createElement("div");
    priceCol.classList.add("col-6", "col-md-3");

    var priceP = document.createElement("p");
    priceP.classList.add("faPrice");
    priceP.innerHTML = broadFA[i].cYears + " yr./$" + broadFA[i].cTotal + "M";
    priceCol.appendChild(priceP);
    row.appendChild(priceCol);

    // var dumCol = document.createElement("div");
    // dumCol.classList.add("col-3");
    // row.appendChild(dumCol);
    if (!offeredArr.includes(broadFA[i])) {
      var signCol = document.createElement("div");
      signCol.classList.add("col-12", "col-md-4");

      var signButton = document.createElement("button");
      signButton.classList.add("signButton", "bttn-slant", "bttn-md", "bttn-success", "butt");
      signButton.innerHTML = "SIGN";
      signButton.addEventListener('click', function() {
        signBroadFA(broadFA[i]);
      });
      signCol.appendChild(signButton);
      row.appendChild(signCol);
    }

    if (offeredArr.includes(broadFA[i])) {
      row.style.opacity = ".5";
    }
    root.appendChild(row);
    var hr = document.createElement("hr");
    root.appendChild(row);
    root.appendChild(hr);
  }
}

function divideRoster() {
  for (let i = 0; i < currRosterArr.length; i++) {
    if (currRosterArr[i].salary === 0) {
      teamFA.push(currRosterArr[i]);
    } else {
      activeRoster.push(currRosterArr[i]);
    }
  }
}

function getSalaryHit() {
  var totalSalary = 0;
  for (let i = 0; i < activeRoster.length; i++) {
    totalSalary += activeRoster[i].salary;
  }
  return totalSalary;
}

function getCapRoom() {
  var salaryNum = getSalaryHit();
  var cutPenalties = 0;
  for (let i = 0; i < cutArr.length; i++) {
    cutPenalties += cutArr[i].capPenalty;
  }
  var capRoom = salaryCap - (salaryNum + deadCap + cutPenalties);
  return capRoom;
}

function updateCapBar() {
  document.getElementById("capSpaceText").innerHTML = "Cap Space: $" + getCapRoom();
}


function countPlayers() {
  currRosterArr.sort(function(a, b){return b.salary-a.salary});
  var count = 0;
  for (let i = 0; i < currRosterArr.length; i++) {
    if (currRosterArr[i].salary != 0) {
      console.log(currRosterArr[i].name + ": " + currRosterArr[i].salary);
      count++;
    }
  }
  return count;
}

function faNav() {
  document.getElementById("faNavCont").style.display = "block";
  document.getElementById("rosterNavCont").style.display = "none";
}

function rosterNav() {
  document.getElementById("faNavCont").style.display = "none";
  document.getElementById("rosterNavCont").style.display = "block";
}
