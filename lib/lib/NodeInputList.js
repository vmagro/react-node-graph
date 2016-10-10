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

var _NodeInputListItem = require('./NodeInputListItem');

var _NodeInputListItem2 = _interopRequireDefault(_NodeInputListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeInputList = function (_React$Component) {
  (0, _inherits3.default)(NodeInputList, _React$Component);

  function NodeInputList() {
    (0, _classCallCheck3.default)(this, NodeInputList);
    return (0, _possibleConstructorReturn3.default)(this, (NodeInputList.__proto__ || (0, _getPrototypeOf2.default)(NodeInputList)).apply(this, arguments));
  }

  (0, _createClass3.default)(NodeInputList, [{
    key: 'onMouseUp',
    value: function onMouseUp(i) {
      this.props.onCompleteConnector(i);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var i = 0;

      return _react2.default.createElement(
        'div',
        { className: this.props.inputWrapperClass },
        _react2.default.createElement(
          'ul',
          { className: this.props.inputListClass },
          this.props.items.map(function (item) {
            return _react2.default.createElement(_NodeInputListItem2.default, { onMouseUp: function onMouseUp(i) {
                return _this2.onMouseUp(i);
              }, key: i, index: i++, item: item });
          })
        )
      );
    }
  }]);
  return NodeInputList;
}(_react2.default.Component);

exports.default = NodeInputList;
module.exports = exports['default'];
}());

//# sourceMappingURL=NodeInputList.js.map
