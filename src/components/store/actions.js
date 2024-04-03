export const SET_DATA_SIZE = "SET_DATA_SIZE";
export const SET_CATEGORY_TYPE = "SET_CATEGORY_TYPE";
export const SET_SEARCHED_WORD = "SET_SEARCHED_WORD";

export const setDataSize = (size) => ({
  type: SET_DATA_SIZE,
  payload: size,
});

export const setCategoryType = (category) => ({
  type: SET_CATEGORY_TYPE,
  payload: category,
});

export const setSearchedWord = (searchInput) => ({
  type: SET_SEARCHED_WORD,
  payload: searchInput,
});
