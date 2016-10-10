;(function() {
"use strict";

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.computeInOffsetByIndex = computeInOffsetByIndex;
exports.computeOutOffsetByIndex = computeOutOffsetByIndex;
/* not bound to style, should be computed */

function computeInOffsetByIndex(x, y, index) {
	var outx = x + 15;
	var outy = y + 47 + index * 20;

	return { x: outx, y: outy };
}

function computeOutOffsetByIndex(x, y, index) {

	var outx = x + 166;
	var outy = y + 49 + index * 22;

	return { x: outx, y: outy };
}
}());

//# sourceMappingURL=util.js.map
