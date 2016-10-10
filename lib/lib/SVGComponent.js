;(function() {
"use strict";

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SVGComponent = function (_Component) {
  (0, _inherits3.default)(SVGComponent, _Component);

  function SVGComponent() {
    (0, _classCallCheck3.default)(this, SVGComponent);
    return (0, _possibleConstructorReturn3.default)(this, (SVGComponent.__proto__ || (0, _getPrototypeOf2.default)(SVGComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(SVGComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({ style: { position: 'absolute', zIndex: 9000 } }, this.props, { ref: 'svg' }),
        this.props.children
      );
    }
  }]);
  return SVGComponent;
}(_react.Component);

exports.default = SVGComponent;
module.exports = exports['default'];
}());

//# sourceMappingURL=SVGComponent.js.map
