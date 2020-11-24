import { combineReducers } from "./combineReducers";
import { userReducer } from "./user/user.reducer";


export const initialState: AppState = {
    user: {
        darkMode: false
    },
};

export const persistedState = typeof localStorage['persistedState'] !== 'undefined' ? JSON.parse(localStorage['persistedState']) : {};

const logger = (reducer: any) => {
    const reducerWithLogger = (state: any, action: any) => {
        console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
        console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
        console.log("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state, action));
        return reducer(state, action);
    };
    return reducerWithLogger;
}

export const appReducers = combineReducers({
    user: logger(userReducer),
});

export type AppState = ReturnType<typeof appReducers>;
