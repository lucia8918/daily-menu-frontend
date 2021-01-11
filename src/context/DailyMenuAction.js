export const ACTION_TYPES = {
  INIT_DAILY_MENU_LIST: "INIT_DAILY_MENU_LIST",
  CHANGE_DAILY_MENU_LIST: "CHANGE_DAILY_MENU_LIST",
};

export const initDailyMenuList = (payload) => {
  return {
    type: ACTION_TYPES.INIT_DAILY_MENU_LIST,
    payload,
  };
};

export const changeDailyMenuList = (payload) => {
  return {
    type: ACTION_TYPES.CHANGE_DAILY_MENU_LIST,
    payload,
  };
};
