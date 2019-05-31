import { createStore } from "redux";

const initialState = {
  hey2: ""
};

export const UPDATE_HEY2 = "UPDATE_HEY2";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_HEY2:
      return { ...state, hey2: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
