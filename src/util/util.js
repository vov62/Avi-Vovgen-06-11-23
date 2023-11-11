export const CelsiusToFahrenheit = (currTemp, tempUnit) => {
  if (tempUnit === "celsius") {
    return `${Math.round(currTemp)}°C`;
  } else {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (currTemp * 9) / 5 + 32;
    return `${Math.round(fahrenheit)}°F`;
  }
};
