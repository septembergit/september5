'use strict';

function doubleToRemove (collection) {  // 去重

  var oneDimenFun = require("./double_dimensional_array_to_one_1.js"),   // 调用模块一
      oneDimensional = oneDimenFun(collection),
      rest = [],
      json = {};
  for (var i in oneDimensional) {
  	if (!json[oneDimensional[i]]) {
  		rest.push(oneDimensional[i]);
		json[oneDimensional[i]] = 1;
	}
  }
  return rest;
}

module.exports = doubleToRemove;
