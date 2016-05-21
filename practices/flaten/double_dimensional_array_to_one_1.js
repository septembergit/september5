'use strict';

function doubleToOne (collection) {  // 二维数组转化为一维数组
  var result = [];
  collection.map(function (item) {
     if (Array.isArray(item)) {   // 判断成员是否为数组
     	for (var i in item) {
     		result.push(item[i]);
     	}
     }
     else {
        result.push(item);
     }
  });
  return result;
}

module.exports = doubleToOne;
