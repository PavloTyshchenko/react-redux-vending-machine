import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataUpload from './DataUpload';
import ProductList from './ProductList';
import OutputTray from './OutputTray';
import ChangeTray from './ChangeTray';
import MessageDisplay from './MessageDisplay';
import ControlPanel from './ControlPanel';
import { sellProduct } from '../../store/actions';

import './VendingMachineContainer.scss';

const VendingMachineContainer = (props) => {
  const {
    isInitiated,
    products,
    change,
    onService,
    selected,
    onCount,
    makeSell
  } = props;

  useEffect(() => {
    if (selected) {
      if (onCount >= selected.price) {
        const updatedProducts = [...products];
        const idx = updatedProducts.findIndex((item => selected.id === item.id));
        updatedProducts[idx].qty = updatedProducts[idx].qty - 1;

        const updatedChange = [...change];
        const outputChange = [];

        makeSell(
          updatedProducts,
          updatedChange,
          outputChange
        );
      }

    }
  }, [selected, onCount]);


  return (
    <Container className="vending-machine-container p-2">
      <Row className="header m-1 p-2">
        <Col>
          <h1 className="d-flex justify-content-center p-1 mb-2">Drinks & Snacks!</h1>
        </Col>
      </Row>
      <Row className="working-area m-1 p-2">
        {isInitiated && !onService && (
          <>
          <Col>
            <ProductList />
            <OutputTray />
          </Col>
          <Col>
            <Container>
              <MessageDisplay />
              <ControlPanel />
              <ChangeTray />
            </Container>
          </Col>
          </>
        )}
        {!isInitiated && (
          <Col>
            <p>Hello, initiate machine with provided JSON, or modified:</p>
            <DataUpload />
          </Col>
        )}
      </Row>
      <Row className="footer">
        <Col>
          <div className="d-flex justify-content-around p-1">
            <a href="/">Terms of Use</a>
            <a href="/">Contact Operator</a>
            <span>© 1996-2021 E-Vending Tech, Bila Tserkva</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    isInitiated: state.isInitiated,
    products: state.products,
    change: state.change,
    onService: state.onService,
    selected: state.selected,
    onCount: state.onCount
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeSell: (updatedProducts, updatedChange, outputChange) => {
      dispatch(sellProduct({
        updatedProducts, updatedChange, outputChange
      }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendingMachineContainer);
