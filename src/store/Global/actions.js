import {SET_LIST} from "./actionTypes";

export const setListAction = (payload) => {
  return {
    type: SET_LIST,
    payload,
  }
}

export const updateListItemAsyncAction = (payload, timeout) => async (dispatch, getState) => {

  const getUpdatedList = (list, _payload, isLoading) => {
    return list.map(item => item.value === _payload.value ? {
      ...item,
      isLoading
    } : item)
  }

  dispatch(setListAction(getUpdatedList(getState().global.list, payload, true)));

  await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    }
  )

  dispatch(setListAction(getUpdatedList(getState().global.list, payload, false)));
}
