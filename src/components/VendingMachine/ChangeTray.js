import React from 'react';
import { connect } from 'react-redux';

const ChangeTray = (props) => {
  const { outputChange } = props;

  return (
    <div className="mt-5 text-right">
      <label>Change Tray</label>
      <div className="output-tray change p-3">
        {outputChange.length > 0 && (
          <button>take</button>
        )}
        {outputChange.length === 0 && (
          <span>EMPTY</span>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    outputChange: state.outputChange,
  };
};

export default connect(mapStateToProps, null)(ChangeTray);
