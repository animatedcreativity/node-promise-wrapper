exports = module.exports = function(value, p) {
  if (typeof value === "object") {
    p = value;
    value = "data";
  }
  return new Promise(function(resolve, reject) {
    p.then(function(d) {
      var data = {error: undefined};
      data[value] = d;
      resolve(data);
    }).catch(function(e) {
      var data = {error: e};
      data[value] = undefined;
      resolve(data);
    });
  });
};