const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * (5/9);
  return convertedTemp ? parseFloat(convertedTemp.toFixed(1)) : convertedTemp;
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = (temp * 9/5 + 32);
  return convertedTemp ? parseFloat(convertedTemp.toFixed(1)) : convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
