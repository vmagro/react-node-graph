;(function() {
"use strict";

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _Node = require('./lib/Node');

var _Node2 = _interopRequireDefault(_Node);

var _Spline = require('./lib/Spline');

var _Spline2 = _interopRequireDefault(_Spline);

var _SVGComponent = require('./lib/SVGComponent');

var _SVGComponent2 = _interopRequireDefault(_SVGComponent);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function (_React$Component) {
  (0, _inherits3.default)(index, _React$Component);

  function index(props) {
    (0, _classCallCheck3.default)(this, index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (index.__proto__ || (0, _getPrototypeOf2.default)(index)).call(this, props));

    _this.state = {
      data: _this.props.data,
      source: [],
      dragging: false
    };

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      this.setState({ dragging: false });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      e.stopPropagation();
      e.preventDefault();

      var svg = this.refs.svgComponent.refs.svg;

      // Get svg element position to substract offset top and left

      var svgRect = svg.getBoundingClientRect();

      this.setState({
        mousePos: {
          x: e.pageX - svgRect.left,
          y: e.pageY - svgRect.top
        }
      });
    }
  }, {
    key: 'handleNodeStart',
    value: function handleNodeStart(nid) {
      this.props.onNodeStartMove(nid);
    }
  }, {
    key: 'handleNodeStop',
    value: function handleNodeStop(nid, pos) {
      this.props.onNodeMove(nid, pos);
    }
  }, {
    key: 'handleNodeMove',
    value: function handleNodeMove(index, pos) {
      var d = this.state.data;

      d.nodes[index].x = pos.left;
      d.nodes[index].y = pos.top;

      this.setState({ data: d });
    }
  }, {
    key: 'handleStartConnector',
    value: function handleStartConnector(nid, outputIndex) {
      this.setState({ dragging: true, source: [nid, outputIndex] });
    }
  }, {
    key: 'handleCompleteConnector',
    value: function handleCompleteConnector(nid, inputIndex) {
      if (this.state.dragging) {

        var nodes = this.state.data.nodes;
        var fromNode = this.getNodebyId(nodes, this.state.source[0]);
        var fromPinName = fromNode.fields.out[this.state.source[1]].name;
        var toNode = this.getNodebyId(nodes, nid);
        var toPinName = toNode.fields.in[inputIndex].name;

        this.props.onNewConnector(fromNode.nid, fromPinName, toNode.nid, toPinName);
      }
      this.setState({ dragging: false });
    }
  }, {
    key: 'computePinIndexfromLabel',
    value: function computePinIndexfromLabel(pins, pinLabel) {
      var reval = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(pins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pin = _step.value;

          if (pin.name === pinLabel) {
            return reval;
          } else {
            reval++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'getNodebyId',
    value: function getNodebyId(nodes, nid) {
      var reval = 0;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(nodes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;

          if (node.nid === nid) {
            return nodes[reval];
          } else {
            reval++;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nodes = this.state.data.nodes;
      var connectors = this.state.data.connections;

      var i = 0;
      var newConnector = null;

      if (this.state.dragging) {

        var sourceNode = this.getNodebyId(nodes, this.state.source[0]);
        var connectorStart = (0, _util.computeOutOffsetByIndex)(sourceNode.x, sourceNode.y, this.state.source[1]);
        var connectorEnd = { x: this.state.mousePos.x, y: this.state.mousePos.y };

        newConnector = _react2.default.createElement(_Spline2.default, {
          connectorClass: this.props.classNames.connector,
          start: connectorStart,
          end: connectorEnd
        });
      }

      var splineIndex = 0;

      return _react2.default.createElement(
        'div',
        null,
        nodes.map(function (node) {
          return _react2.default.createElement(_Node2.default, {
            nodeClass: _this2.props.classNames.node,
            nodeHeaderClass: _this2.props.classNames.nodeHeader,
            nodeTitleClass: _this2.props.classNames.nodeTitle,
            nodeContentClass: _this2.props.classNames.nodeContent,
            nodeInputWrapperClass: _this2.props.classNames.nodeInputWrapper,
            nodeInputListClass: _this2.props.classNames.nodeInputList,
            nodeOutputWrapperClass: _this2.props.classNames.nodeOutputWrapper,
            nodeOutputListClass: _this2.props.classNames.nodeOutputList,
            index: i++,
            nid: node.nid,
            color: '#000000',
            title: node.type,
            inputs: node.fields.in,
            outputs: node.fields.out,
            pos: { x: node.x, y: node.y },
            key: node.nid,

            onNodeStart: function onNodeStart(nid) {
              return _this2.handleNodeStart(nid);
            },
            onNodeStop: function onNodeStop(nid, pos) {
              return _this2.handleNodeStop(nid, pos);
            },
            onNodeMove: function onNodeMove(index, pos) {
              return _this2.handleNodeMove(index, pos);
            },

            onStartConnector: function onStartConnector(nid, outputIndex) {
              return _this2.handleStartConnector(nid, outputIndex);
            },
            onCompleteConnector: function onCompleteConnector(nid, inputIndex) {
              return _this2.handleCompleteConnector(nid, inputIndex);
            }
          });
        }),
        _react2.default.createElement(
          _SVGComponent2.default,
          { height: '100%', width: '100%', ref: 'svgComponent' },
          connectors.map(function (connector) {
            var fromNode = _this2.getNodebyId(nodes, connector.from_node);
            var toNode = _this2.getNodebyId(nodes, connector.to_node);

            var splinestart = (0, _util.computeOutOffsetByIndex)(fromNode.x, fromNode.y, _this2.computePinIndexfromLabel(fromNode.fields.out, connector.from));
            var splineend = (0, _util.computeInOffsetByIndex)(toNode.x, toNode.y, _this2.computePinIndexfromLabel(toNode.fields.in, connector.to));

            return _react2.default.createElement(_Spline2.default, {
              connectorClass: _this2.props.classNames.connector,
              start: splinestart,
              end: splineend,
              key: splineIndex++
            });
          }),
          newConnector
        )
      );
    }
  }]);
  return index;
}(_react2.default.Component);

index.propTypes = {
  data: _react2.default.PropTypes.object,
  onNodeStartMove: _react2.default.PropTypes.func,
  onNodeMove: _react2.default.PropTypes.func,
  onNewConnector: _react2.default.PropTypes.func,
  classNames: _react2.default.PropTypes.shape({
    node: _react2.default.PropTypes.string,
    nodeHeader: _react2.default.PropTypes.string,
    nodeTitle: _react2.default.PropTypes.string,
    nodeContent: _react2.default.PropTypes.string,
    nodeInputWrapper: _react2.default.PropTypes.string,
    nodeInputList: _react2.default.PropTypes.string,
    nodeOutputWrapper: _react2.default.PropTypes.string,
    nodeOutputList: _react2.default.PropTypes.string,
    connector: _react2.default.PropTypes.string
  }).isRequired
};
exports.default = index;
module.exports = exports['default'];
}());

//# sourceMappingURL=index.js.map
