import React, { useEffect, useReducer } from 'react';
import { appReducers, AppState, initialState, persistedState } from './state';

export interface AppContextState {
    state: AppState,
    dispatch: React.Dispatch<any>;
}

export const AppContext = React.createContext<AppContextState>({
    state: initialState,
    dispatch: () => undefined,
});

export const AppContextProvider: React.FC = (props: any) => {
    const fullInitialState = {
        ...initialState,
        ...persistedState,
    }
    const [state, dispatch] = useReducer(appReducers, fullInitialState);

    useEffect(() => {
        // Persist any state we want to into localstorage
        localStorage['persistedState'] = JSON.stringify({

        });
    }, []);

    const value = { state, dispatch };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
