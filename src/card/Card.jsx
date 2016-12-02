import React, { PropTypes } from 'react';
import { Component } from '../../libs';

export default class Card extends Component {
  render() {
    const { header, bodyStyle, children } = this.props;
    return (
      <div className="el-card">
        { header && <div className="el-card__header">{ header }</div> }
        <div className="el-card__body" style={ bodyStyle }>
          { children }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  header: PropTypes.node,
  bodyStyle: PropTypes.object
};

Card.defaultProps = {
  bodyStyle: {
    padding: '20px'
  }
};
