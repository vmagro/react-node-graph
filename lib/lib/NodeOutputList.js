;(function() {
"use strict";

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NodeOutputListItem = require('./NodeOutputListItem');

var _NodeOutputListItem2 = _interopRequireDefault(_NodeOutputListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeOutputList = function (_React$Component) {
	(0, _inherits3.default)(NodeOutputList, _React$Component);

	function NodeOutputList() {
		(0, _classCallCheck3.default)(this, NodeOutputList);
		return (0, _possibleConstructorReturn3.default)(this, (NodeOutputList.__proto__ || (0, _getPrototypeOf2.default)(NodeOutputList)).apply(this, arguments));
	}

	(0, _createClass3.default)(NodeOutputList, [{
		key: 'onMouseDown',
		value: function onMouseDown(i) {
			this.props.onStartConnector(i);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var i = 0;

			return _react2.default.createElement(
				'div',
				{ className: this.props.outputWrapperClass },
				_react2.default.createElement(
					'ul',
					{ className: this.props.outputListClass },
					this.props.items.map(function (item) {
						return _react2.default.createElement(_NodeOutputListItem2.default, { onMouseDown: function onMouseDown(i) {
								return _this2.onMouseDown(i);
							}, key: i, index: i++, item: item });
					})
				)
			);
		}
	}]);
	return NodeOutputList;
}(_react2.default.Component);

exports.default = NodeOutputList;
module.exports = exports['default'];
}());

//# sourceMappingURL=NodeOutputList.js.map
