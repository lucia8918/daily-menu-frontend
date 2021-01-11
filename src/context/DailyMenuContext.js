import * as React from "react";
import { createContext, useContext, useReducer } from "react";
import { ACTION_TYPES } from "./DailyMenuAction";

const initDailyMenuList = [];

const dailyMenuListReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT_DAILY_MENU_LIST:
      return {
        ...state,
        ...initDailyMenuList,
      };
    case ACTION_TYPES.CHANGE_DAILY_MENU_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

const DailyMenuListStateContext = createContext(null);
const DailyMenuListDispatchContext = createContext(null);

export const DailyMenuListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dailyMenuListReducer, initDailyMenuList);
  return (
    <DailyMenuListStateContext.Provider value={state}>
      <DailyMenuListDispatchContext.Provider value={dispatch}>
        {children}
      </DailyMenuListDispatchContext.Provider>
    </DailyMenuListStateContext.Provider>
  );
};

export const useDailyMenuListState = () => {
  const state = useContext(DailyMenuListStateContext);
  if (!state) {
    throw new Error("Cannot find useDailyMenuListState");
  }
  return state;
};

export const useDailyMenuListDispatch = () => {
  const dispatch = useContext(DailyMenuListDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find useDailyMenuListDispatch");
  }
  return dispatch;
};
