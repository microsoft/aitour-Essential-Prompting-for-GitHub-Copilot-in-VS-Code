String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

String.prototype.isPalindrome = function () {
  const reversed = this.reverse();
  return this.toLowerCase() === reversed.toLowerCase();
};

String.prototype.sluggify = function () {
  return this.toLowerCase().replace(/\s+/g, "-");
};

String.prototype.properCase = function () {
  return this.toLowerCase().replace(/(^|\s)\S/g, function (match) {
    return match.toUpperCase();
  });
};
