export const addLeadingZero = (n = '') => {
  const str = `${n}`;
  switch (str.length) {
    case 0:
      return '00';
    case 1:
      return `0${n}`;
    default:
      return `${n}`;
  }
};
