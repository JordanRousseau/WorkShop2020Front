import { ActionType } from "../../utils/types";

export const setDarkMode = (darkMode: boolean) => ({
    type: 'set-darkmode',
    darkMode
} as const);

//---------------------------------------

export type UserActions =  ActionType<typeof setDarkMode>
