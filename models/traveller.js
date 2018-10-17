const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
 return this.journeys.filter(journey => (journey.transport === transport))
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => (journey.distance > minDistance))
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const add = (accumulator, journey) => accumulator + journey.distance;
  return this.journeys.reduce(add, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  map1 = this.journeys.map(journey => journey.transport);
  return map1.filter((j, index) =>map1.indexOf(j)=== index);

// list all the transports
//train, train, car, boat,
//only include one of each

// make an array of all the this.journey.transport
//loop through the array returning each transport, if it is
};


module.exports = Traveller;
