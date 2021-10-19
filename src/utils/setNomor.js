export const setNumber = num => {
  if (num > 10000) {
    return false;
  } else if (num < 10000 && num > 999) {
    return num.toString();
  } else if (num < 1000 && num > 99) {
    return '0' + num;
  } else if (num < 100 && num > 9) {
    return '00' + num;
  } else {
    return '000' + num;
  }
};
