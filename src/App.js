import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MPLUS,
  MEMORYR,
  MEMORYC,
} from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //function handleAddOne() {
  //  dispatch({ type: ADD_ONE });
  //}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: MPLUS })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: MEMORYR })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: MEMORYC })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 1 })}
              />
              <CalcButton
                value={2}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 2 })}
              />
              <CalcButton
                value={3}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 3 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 4 })}
              />
              <CalcButton
                value={5}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 5 })}
              />
              <CalcButton
                value={6}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 6 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 7 })}
              />
              <CalcButton
                value={8}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 8 })}
              />
              <CalcButton
                value={9}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 9 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "+" })
                }
              />
              <CalcButton
                value={"*"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "*" })
                }
              />
              <CalcButton
                value={"-"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "-" })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: CLEAR_DISPLAY })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
