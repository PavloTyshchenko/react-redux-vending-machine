import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { machineProceed } from '../../store/actions';

const OutputTray = (props) => {
  const {
    selected,
    sold,
    proceed
  } = props;

  return (
    <div className="output-tray p-2">
      {selected && sold && (
        <Button
          variant="light"
          onClick={proceed}
        >Take {selected.name}</Button>
      )}
      {!sold && (
        <span>TRAY - EMPTY</span>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    sold: state.sold
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    proceed: () => {
      dispatch(machineProceed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputTray);
