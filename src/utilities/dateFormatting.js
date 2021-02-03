export const mapDay = (value, timezone) => {
  const date = new Date(value * 1000 + timezone * 1000);
  const day =
    date.getUTCDate() > 9 ? date.getUTCDate() : "0" + date.getUTCDate();
  return `${day}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`;
};

export const mapHours = (value, timezone) => {
  const date = new Date(value * 1000 + timezone * 1000);
  return `${date.getUTCHours()}:${date.getUTCMinutes()}0`;
};


export const mapSunTime = (value,timezone) => {
  const date = new Date(value * 1000 + timezone * 1000);
  return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
};
