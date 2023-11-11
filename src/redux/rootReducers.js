import { reducer as dataReducer } from "../feature/fetchDataSlice";
import { reducer as searchReducer } from "../feature/searchSlice";
import { reducer as themeReducer } from "../feature/themeSlice";

const rootReducers = {
  data: dataReducer,
  search: searchReducer,
  theme: themeReducer,
};

export default rootReducers;
