export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_MEMORY_VALUE = "SET_MEMORY_VALUE";
export const APPLY_MEMORY_VALUE = "APPLY_MEMORY_VALUE";
export const CLEAR_MEMORY_VALUE = "CLEAR_MEMORY_VALUE";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const setMemoryValue = () => {
  return { type: SET_MEMORY_VALUE };
};

export const applyMemoryValue = () => {
  return { type: APPLY_MEMORY_VALUE };
};

export const clearMemoryValue = () => {
  return { type: CLEAR_MEMORY_VALUE };
};
