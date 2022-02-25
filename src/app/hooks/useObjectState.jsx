import { useState } from "react";

const useObjectState = (initialState = null) => {
  const [state, _setState] = useState(initialState);

  const setState = (newState) => {
    _setState((currentState) => ({
      ...currentState,
      ...newState,
    }));
  };

  return [state, setState, _setState];
};

export default useObjectState;
