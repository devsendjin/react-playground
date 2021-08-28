import { SET_LIST } from "./actionTypes";

export const setListAction = (payload) => {
  return {
    type: SET_LIST,
    payload
  };
};

export const updateListItemAsyncAction = (payload, timeout) => async (
  dispatch,
  getState
) => {
  const list = getState().global.list;
  const listCopy = list.slice();

  const index = listCopy.findIndex((item) => item.value === payload.value);
  listCopy.splice(index, 1, {
    ...listCopy[index],
    isLoading: payload.isLoading
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  }).then(() => {
    dispatch(setListAction(listCopy));
  });
};
