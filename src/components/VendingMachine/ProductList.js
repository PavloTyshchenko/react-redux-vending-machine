import React from 'react';
import { connect } from 'react-redux';
import { CardColumns } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { products } = props;

  return (
    <CardColumns className="product-list mb-3">
      {
        products && products.map((product) => {
          return <ProductItem
            key={product.id}
            product={product}
          />
        })
      }
    </CardColumns>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, null)(ProductList);
