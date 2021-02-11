import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { insertMoney } from '../../store/actions';

const ControlPanel = (props) => {
  const {
    change,
    insertMoney,
    onCount,
    sold
  } = props;

  const handleInsertMoney = (nominal) => {
    const updatedOnCount = onCount + nominal.value;
    const updatedChange = [...change];
    const idx = updatedChange.findIndex((item => item.label === nominal.label));
    updatedChange[idx].qty = updatedChange[idx].qty + 1;

    insertMoney(updatedOnCount, updatedChange);
  }

  if (onCount >= 3.0) {
    return (
      <h5>
        <Badge variant="warning">Money limit. Buy or return</Badge>
      </h5>
    )
  }

  if (sold) {
    return (
      <h5>
        <Badge variant="success">Take your goods and change.</Badge>
      </h5>
    )
  } else {
    return (
      <>
        <h5>
          <Badge variant="warning">Control Panel. Enter your money</Badge>
        </h5>
        {change && change.map((item) => {
          return (
            <Badge
              key={item.label}
              pill
              variant="success"
              className="pointer nominal hovering p-2 mr-2"
              onClick={() => handleInsertMoney(item)}
            >
              {item.label}
            </Badge>
          )
        })}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    change: state.change,
    onCount: state.onCount,
    sold: state.sold
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertMoney: (onCount, updatedChange) => {
      dispatch(insertMoney({
        change: updatedChange,
        onCount: onCount
      }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
