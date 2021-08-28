import {SET_LIST} from "./actionTypes";

const store = {
  list: [
    {value: 1, isLoading: false},
    {value: 2, isLoading: false},
    {value: 3, isLoading: false},
    {value: 4, isLoading: false},
    {value: 5, isLoading: false},
    {value: 6, isLoading: false},
  ],
};

export const GlobalReducer = (
  state = store,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST:
      return {...state, list: payload};
    default:
      return state;
  }
};
