//LIST items
var marketList = document.querySelector('.marketList');
var catList = document.querySelector('.catList');


//FOR FARMERS MARKETS
// want to show any markets that are less than 10 miles away, and return only the name of the market
// going to need a filter by market name to pull only that market names into an array and then break up the values by the spaces and compare those number values against 10, anything less will be returned eventually with a map

//PROOF position + splitting
// var distance = markets[1].marketname.split(' ');

function getDistance(market) {
  return market.marketname.split(' ');
}

function pullMarkets(market, i, arr) {
  var distance = getDistance(market);
  return distance[0] < 10;
}
//console.log(markets.filter(pullMarkets));

function createSentence() {
  // return arguments.length
}

function nameMarkets(market, i, arr) {
  var partOfName = getDistance(market);
  var createName = partOfName.slice(1).join(' ');
  return createName;
}

function addToList(market, i, arr) {
  console.log('hi');
  var $addLi = $('<li>' + market + '</li>');
  $(marketList).append($addLi);
}

var marketsNearYou = markets.filter(pullMarkets).map(nameMarkets).forEach(addToList);

//FOR CAT GIFS
catCache = catGifs.data;

//PROOF to get image link
// console.log(catCache[2].images.original.url);

function getLink(cat, i, arr) {
  return catCache[i].images.original.url;
}

// function addPictureToList(link, i, arr) {
//
// }

console.log(catCache.map(getLink));
