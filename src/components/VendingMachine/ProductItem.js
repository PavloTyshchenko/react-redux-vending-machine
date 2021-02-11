import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap';

import noImg from '../../assets/images/no-image.png';
import { selectProduct } from '../../store/actions';

const ProductItem = ({ product, selected, sold, selectProduct }) => {
  const { name, price, image, qty } = product;
  const [isSelected, setIsSelected] = useState('');
  let isAvailable = qty > 0;

  useEffect(() => {
    if (selected) {
      setIsSelected(product.name === selected.name ? ' selected' : '');
    }
  });

  const handleSelectProduct = (product) => {
    selectProduct(product);
  }
  if (sold) {
      isAvailable = false;
  }
  if (isAvailable) {
    return (
      <Card
        className={`cardItem hovering pointer ${isSelected}`}
        onClick={() => handleSelectProduct(product)}
      >
        {image ? (
          <Card.Img variant="top" src={image} />
        ) : (
          <Card.Img variant="top" src={noImg} />
        )}
        <Card.Body>
          <Card.Title>
            {name || 'N/A'}
          </Card.Title>
          <Card.Text>
            Price: {price || 'N/A'}(£),
            <Badge variant="primary">{qty}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else {
    return (
      <Card
        className={`cardItem hovering pointer unavailable`}
      >
        {image ? (
          <Card.Img variant="top" src={image} />
        ) : (
          <Card.Img variant="top" src={noImg} />
        )}
        <Card.Body>
          <Card.Title>
            {name || 'N/A'}
          </Card.Title>
          <Card.Text>
            Price: {price || 'N/A'}(£),
            <Badge variant="danger">{qty}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    sold: state.sold,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProduct: (product) => {
      dispatch(selectProduct(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
