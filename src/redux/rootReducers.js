import { reducer as dataReducer } from "../feature/fetchDataSlice";
import { reducer as searchReducer } from "../feature/searchSlice";

const rootReducers = {
  data: dataReducer,
  search: searchReducer,
};

export default rootReducers;
