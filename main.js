// want to show any markets that are less than 10 miles away, and return only the name of the market

// going to need a filter by market name to pull only that market names into an array and then break up the values by the spaces and compare those number values against 10, anything less will be returned eventually with a map

//PROOF position + splitting
// var distance = markets[1].marketname.split(' ');

function pullMarkets(market, i, arr) {
  var distance = market.marketname.split(' ');
  return distance[0] < 10;
}

function

// console.log(distance[0]);
console.log(markets.filter(pullMarkets));
