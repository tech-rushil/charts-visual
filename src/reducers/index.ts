import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import chartsReducers from "./charts.reducers";

const persistConfig = {
    key: "charts_app_clootrack",
    storage,
    version: 4,
    blacklist: [],
};

const rootReducer = combineReducers({
    chartsData: chartsReducers,
});

const allReducers = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default allReducers;
