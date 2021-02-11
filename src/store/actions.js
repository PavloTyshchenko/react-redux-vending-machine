import * as types from './types';

export const machineSetInitial = (data) => {
  return {
    type: types.MACHINE_SET_INITIAL,
    payload: {
      products: data.products,
      change: data.change
    }
  };
};

export const machineProceed = () => {
  return {
    type: types.MACHINE_PROCEED
  };
};

export const insertMoney = (data) => {
  return {
    type: types.INSERT_MONEY,
    payload: {
      change: data.change,
      onCount: data.onCount
    }
  };
};

export const selectProduct = (product) => {
  return {
    type: types.SELECT_PRODUCT,
    payload: {
      selected: product
    }
  };
};

export const sellProduct = (data) => {
  return {
    type: types.SELL_PRODUCT,
    payload: {
      updatedProducts: data.updatedProducts,
      updatedChange: data.updatedChange,
      outputChange: data.outputChange
    }
  };
};
