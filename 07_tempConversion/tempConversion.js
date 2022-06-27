const ftoc = function(tempF) {
  let rawNumber = (tempF - 32) * (5/9);
  return Math.round(rawNumber * 10) / 10;
};

const ctof = function(tempC) {
  let rawNumber = tempC * (9/5) + 32;
  return Math.round(rawNumber * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
