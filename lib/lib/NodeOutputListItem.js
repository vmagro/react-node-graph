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

var NodeOutputListItem = function (_React$Component) {
	(0, _inherits3.default)(NodeOutputListItem, _React$Component);

	function NodeOutputListItem() {
		(0, _classCallCheck3.default)(this, NodeOutputListItem);
		return (0, _possibleConstructorReturn3.default)(this, (NodeOutputListItem.__proto__ || (0, _getPrototypeOf2.default)(NodeOutputListItem)).apply(this, arguments));
	}

	(0, _createClass3.default)(NodeOutputListItem, [{
		key: "onMouseDown",
		value: function onMouseDown(e) {
			e.stopPropagation();
			e.preventDefault();

			this.props.onMouseDown(this.props.index);
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

			return _react2.default.createElement(
				"li",
				{ onMouseDown: function onMouseDown(e) {
						return _this2.onMouseDown(e);
					} },
				_react2.default.createElement(
					"a",
					{ href: "#", onClick: function onClick(e) {
							return _this2.noop(e);
						} },
					this.props.item.name,
					" ",
					_react2.default.createElement("i", { className: "fa fa-circle-o" })
				)
			);
		}
	}]);
	return NodeOutputListItem;
}(_react2.default.Component);

exports.default = NodeOutputListItem;
module.exports = exports["default"];
}());

//# sourceMappingURL=NodeOutputListItem.js.map
