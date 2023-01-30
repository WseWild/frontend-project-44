export const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

export const getRandomInt = (minInt = 1, maxInt = 99) => {
  const result = Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  return result;
};

export const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  } return 'no';
};

export const isPrime = (int) => {
  for (let i = 2; i < int; i += 1) {
    if (int % i === 0 && i !== int) {
      return 'no';
    }
  }
  return 'yes';
};
