const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return arr.reduce(function (max, item) {
        const curDepth = this.calculateDepth(item);
        return Math.max(max, curDepth);
      }.bind(this), 0) + 1;
    } else {
      return 0;
    }
  }
};