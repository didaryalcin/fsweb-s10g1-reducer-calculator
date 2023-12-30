export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MPLUS = "MPLUS";
export const MEMORYR = "MEMORYR";
export const MEMORYC = "MEMORYC";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const mPlus = () => {
  return { type: MPLUS };
};

export const memoryR = () => {
  return { type: MEMORYR };
};

export const memoryC = () => {
  return { type: MEMORYC };
};
