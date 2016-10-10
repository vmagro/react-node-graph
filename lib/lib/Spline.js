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

var _SVGComponent = require('./SVGComponent');

var _SVGComponent2 = _interopRequireDefault(_SVGComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spline = function (_React$Component) {
    (0, _inherits3.default)(Spline, _React$Component);

    function Spline() {
        (0, _classCallCheck3.default)(this, Spline);
        return (0, _possibleConstructorReturn3.default)(this, (Spline.__proto__ || (0, _getPrototypeOf2.default)(Spline)).apply(this, arguments));
    }

    (0, _createClass3.default)(Spline, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var start = _props.start;
            var end = _props.end;


            var dist = this.distance([start.x, start.y], [end.x, end.y]);

            var pathString = this.bezierCurve(start.x, // start x
            start.y, // start y
            start.x + dist * 0.25, // cp1 x
            start.y, // cp1 y
            end.x - dist * 0.75, // cp2 x
            end.y, // cp2 y
            end.x, // end x
            end.y); // end y

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('circle', { cx: start.x, cy: start.y, r: '3', fill: '#337ab7' }),
                _react2.default.createElement('circle', { cx: end.x, cy: end.y, r: '3', fill: '#9191A8' }),
                _react2.default.createElement('path', { className: this.props.connectorClass, d: pathString })
            );
        }
    }, {
        key: 'bezierCurve',
        value: function bezierCurve(a, b, cp1x, cp1y, cp2x, cp2y, x, y) {
            return 'M' + a + ',' + b + ' C' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + '  ' + x + ',' + y;
        }
    }, {
        key: 'distance',
        value: function distance(a, b) {
            return Math.sqrt((b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1]));
        }
    }]);
    return Spline;
}(_react2.default.Component);

exports.default = Spline;
module.exports = exports['default'];
}());

//# sourceMappingURL=Spline.js.map
