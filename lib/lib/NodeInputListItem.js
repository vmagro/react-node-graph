;(function() {
"use strict";

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeInputListItem = function (_React$Component) {
	(0, _inherits3.default)(NodeInputListItem, _React$Component);

	function NodeInputListItem() {
		(0, _classCallCheck3.default)(this, NodeInputListItem);
		return (0, _possibleConstructorReturn3.default)(this, (NodeInputListItem.__proto__ || (0, _getPrototypeOf2.default)(NodeInputListItem)).apply(this, arguments));
	}

	(0, _createClass3.default)(NodeInputListItem, [{
		key: "onMouseUp",
		value: function onMouseUp(e) {
			e.stopPropagation();
			e.preventDefault();

			this.props.onMouseUp(this.props.index);
		}
	}, {
		key: "noop",
		value: function noop(e) {
			e.stopPropagation();
			e.preventDefault();
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var name = this.props.item.name;


			return _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"a",
					{ onClick: function onClick(e) {
							return _this2.noop(e);
						}, onMouseUp: function onMouseUp(e) {
							return _this2.onMouseUp(e);
						}, href: "#" },
					_react2.default.createElement("i", { className: "fa fa-circle-o" }),
					name
				)
			);
		}
	}]);
	return NodeInputListItem;
}(_react2.default.Component);

exports.default = NodeInputListItem;
module.exports = exports["default"];
}());

//# sourceMappingURL=NodeInputListItem.js.map
