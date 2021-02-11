import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';

const MessageDisplay = (props) => {
  const {
    onCount,
    message
  } = props;
  return (
    <div>
      <h1>
        <Badge variant="secondary">{message}</Badge>
      </h1>
      <h1>
        <Badge variant="secondary">Balance: £{onCount.toFixed(2)}</Badge>
      </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    onCount: state.onCount,
    message: state.message
  };
};

export default connect(mapStateToProps, null)(MessageDisplay);
