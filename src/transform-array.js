const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(error);
  }

  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    if (i === 0 && (newArr[i] === '--discard-prev' || newArr[i] === '--double-prev')) {
      newArr.splice(i, 1);
      i = i - 1;
    }

    if (i === newArr.length - 1 && (newArr[i] === '--discard-next' || newArr[i] === '--double-next')) {
      newArr.splice(i, 1);
      return newArr;
    }

    if (newArr[i] === '--discard-next' && (newArr[i + 2] === '--discard-prev' || newArr[i + 2] === '--double-prev')) {
      newArr.splice(i, 3);
      i = i - 2;
    }

    if (newArr[i] === '--discard-next') {
      newArr.splice(i - 1, 2);
      i = i - 2;
    } else if (newArr[i] === '--discard-prev') {
      newArr.splice(i - 1, 2);
      i = i - 2;
    } else if (newArr[i] === '--double-next') {
      newArr[i] = newArr[i + 1];
    } else if (newArr[i] === '--double-prev') {
      newArr[i] = newArr[i - 1];
    }
  }
  return newArr;
};
