import { reducer as dataReducer } from "../redux/feature/fetchDataSlice";
import { reducer as searchReducer } from "../redux/feature/searchSlice";
import { reducer as themeReducer } from "../redux/feature/themeSlice";

const rootReducers = {
  data: dataReducer,
  search: searchReducer,
  theme: themeReducer,
};

export default rootReducers;
