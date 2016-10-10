import React from 'react';

import NodeInputListItem from './NodeInputListItem';

export default class NodeInputList extends React.Component {

  onMouseUp(i) {
    this.props.onCompleteConnector(i);
  }

  render() {
    let i = 0;

    return (
      <div className={this.props.inputWrapperClass}>
        <ul className={this.props.inputListClass}>
          {this.props.items.map((item) =>
            <NodeInputListItem onMouseUp={(i)=>this.onMouseUp(i)} key={i} index={i++} item={item} />
          )}
        </ul>
      </div>
    );
  }
}
