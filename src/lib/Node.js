import React, {PropTypes} from 'react';

var Draggable = require('react-draggable');

import NodeInputList from './NodeInputList';
import NodeOuputList from './NodeOutputList';

export default class Node extends React.Component {

  handleDragStart(event, ui) {
    this.props.onNodeStart(this.props.nid, ui);
  }

  handleDragStop(event, ui) {
    this.props.onNodeStop(this.props.nid, ui.position);
  }

  handleDrag(event, ui) {
    this.props.onNodeMove(this.props.index, ui.position);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  onStartConnector(index) {
    this.props.onStartConnector(this.props.nid, index);
  }

  onCompleteConnector(index) {
    this.props.onCompleteConnector(this.props.nid, index);
  }

  render() {
    return (
      <Draggable
        start={{x:this.props.pos.x,y:this.props.pos.y}}
        handle={'.' + this.props.nodeHeaderClass}
        onStart={(event, ui)=>this.handleDragStart(event, ui)}
        onStop={(event, ui)=>this.handleDragStop(event, ui)}
        onDrag={(event, ui)=>this.handleDrag(event, ui)}>
        <section className={this.props.nodeClass} style={{zIndex:10000}}>
          <header className={this.props.nodeHeaderClass} style={{backgroundColor:this.props.color}}>
            <span className={this.props.nodeTitleClass}>{this.props.title}</span>
          </header>
          <div className={this.props.nodeContentClass}>
            <NodeInputList
              inputWrapperClass={this.props.nodeInputWrapperClass}
              inputListClass={this.props.nodeInputListClass}
              items={this.props.inputs}
              onCompleteConnector={(index)=>this.onCompleteConnector(index)}
            />
            <NodeOuputList
              outputWrapperClass={this.props.nodeOutputWrapperClass}
              outputListClass={this.props.nodeOutputListClass}
              items={this.props.outputs}
              onStartConnector={(index)=>this.onStartConnector(index)}
            />
          </div>
        </section>
      </Draggable>
    );
  }
}

