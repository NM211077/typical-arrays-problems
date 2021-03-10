exports.min = function min (array) {
    return  (!array || array.length == 0) ? 0 : array.reduce((min, cur) => min <= cur ? min : cur);
}

exports.max = function max (array) {
    return  (!array || array.length == 0) ? 0 : array.reduce((max, cur) => max >= cur ? max : cur);
}

exports.avg = function avg (array) {
    return (!array || array.length == 0) ? 0 : array.reduce((prev, cur) => prev + cur) / array.length;
}
