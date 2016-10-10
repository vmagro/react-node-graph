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

var _NodeInputList = require('./NodeInputList');

var _NodeInputList2 = _interopRequireDefault(_NodeInputList);

var _NodeOutputList = require('./NodeOutputList');

var _NodeOutputList2 = _interopRequireDefault(_NodeOutputList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Draggable = require('react-draggable');

var Node = function (_React$Component) {
  (0, _inherits3.default)(Node, _React$Component);

  function Node() {
    (0, _classCallCheck3.default)(this, Node);
    return (0, _possibleConstructorReturn3.default)(this, (Node.__proto__ || (0, _getPrototypeOf2.default)(Node)).apply(this, arguments));
  }

  (0, _createClass3.default)(Node, [{
    key: 'handleDragStart',
    value: function handleDragStart(event, ui) {
      this.props.onNodeStart(this.props.nid, ui);
    }
  }, {
    key: 'handleDragStop',
    value: function handleDragStop(event, ui) {
      this.props.onNodeStop(this.props.nid, ui.position);
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(event, ui) {
      this.props.onNodeMove(this.props.index, ui.position);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'onStartConnector',
    value: function onStartConnector(index) {
      this.props.onStartConnector(this.props.nid, index);
    }
  }, {
    key: 'onCompleteConnector',
    value: function onCompleteConnector(index) {
      this.props.onCompleteConnector(this.props.nid, index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Draggable,
        {
          start: { x: this.props.pos.x, y: this.props.pos.y },
          handle: '.' + this.props.nodeHeaderClass,
          onStart: function onStart(event, ui) {
            return _this2.handleDragStart(event, ui);
          },
          onStop: function onStop(event, ui) {
            return _this2.handleDragStop(event, ui);
          },
          onDrag: function onDrag(event, ui) {
            return _this2.handleDrag(event, ui);
          } },
        _react2.default.createElement(
          'section',
          { className: this.props.nodeClass, style: { zIndex: 10000 } },
          _react2.default.createElement(
            'header',
            { className: this.props.nodeHeaderClass, style: { backgroundColor: this.props.color } },
            _react2.default.createElement(
              'span',
              { className: this.props.nodeTitleClass },
              this.props.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.nodeContentClass },
            _react2.default.createElement(_NodeInputList2.default, {
              inputWrapperClass: this.props.nodeInputWrapperClass,
              inputListClass: this.props.nodeInputListClass,
              items: this.props.inputs,
              onCompleteConnector: function onCompleteConnector(index) {
                return _this2.onCompleteConnector(index);
              }
            }),
            _react2.default.createElement(_NodeOutputList2.default, {
              outputWrapperClass: this.props.nodeOutputWrapperClass,
              outputListClass: this.props.nodeOutputListClass,
              items: this.props.outputs,
              onStartConnector: function onStartConnector(index) {
                return _this2.onStartConnector(index);
              }
            })
          )
        )
      );
    }
  }]);
  return Node;
}(_react2.default.Component);

exports.default = Node;
module.exports = exports['default'];
}());

//# sourceMappingURL=Node.js.map
