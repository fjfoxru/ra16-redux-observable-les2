import {
    SERVICES_REQUEST,
    SERVICES_FAILURE,
    SERVICES_SUCCESS,
    SERVICE_ITEM_REQUEST,
    SERVICE_ITEM_FAILURE,
    SERVICE_ITEM_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: null,
    items: [],
    loading: false,
    error: null,
    errorItem: null,
  };
  
  export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
      case SERVICES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SERVICES_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case SERVICES_SUCCESS:
        const {items} = action.payload;
        return {
          ...state,
          items,
          loading: false,
          error: null,
        };
        case SERVICE_ITEM_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case SERVICE_ITEM_FAILURE:
          const {errorItem} = action.payload;
          return {
            ...state,
            loading: false,
            errorItem,
          };
        case SERVICE_ITEM_SUCCESS:
          const {item} = action.payload;
          return {
            ...state,
            item: item,
            loading: false,
            errorItem: null,
          };  
      default:
        return state;
    }
  }
  