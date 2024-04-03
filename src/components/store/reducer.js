import { SET_DATA_SIZE, SET_CATEGORY_TYPE, SET_SEARCHED_WORD } from "./actions";

const initialState = {
  dataSize: 0, // Default data size
  selectedCategory: null, //Default Category value
  searchedWord: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SIZE:
      return {
        ...state,
        dataSize: action.payload,
      };
    case SET_CATEGORY_TYPE:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SET_SEARCHED_WORD:
      return {
        ...state,
        searchedWord: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
