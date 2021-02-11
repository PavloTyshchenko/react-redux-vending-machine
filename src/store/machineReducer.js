import * as types from './types';

const initialState = {
  isInitiated: false,
  selected: null,
  onCount: 0.0,
  products: [],
  change: [],
  outputChange: [],
  sold: false,
  message: 'Greetings! Choose your position',
  onService: false,
  error: null
};

export default function machineReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.MACHINE_SET_INITIAL:
      return {
        ...initialState,
        isInitiated: true,
        products: action.payload.products,
        change: action.payload.change
      };
    case types.MACHINE_SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case types.MACHINE_PROCEED:
      return {
        ...state,
        selected: null,
        onCount: 0.0,
        outputChange: [],
        sold: false,
        message: 'Greetings! Choose your position',
      };
    case types.SELL_PRODUCT:
      return {
        ...state,
        onCount: 0.0,
        products: action.payload.updatedProducts,
        change: action.payload.updatedChange,
        sold: true,
        message: 'SOLD',
        outputChange: action.payload.outputChange
      };
    case types.SELECT_PRODUCT:
      return {
        ...state,
        selected: action.payload.selected,
        message: `${action.payload.selected.name} - £${action.payload.selected.price}`,
      };
    case types.INSERT_MONEY:
      return {
        ...state,
        change: action.payload.change,
        onCount: action.payload.onCount
      };

    default:
      return state;
  }
};