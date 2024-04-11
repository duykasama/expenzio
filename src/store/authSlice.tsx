import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    userId: string | undefined;
    username: string | undefined;
    token: string | undefined;
    userRoles: string[] | undefined;
}

const initialState: AuthState = {
    userId: undefined,
    username: undefined,
    token: undefined,
    userRoles: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state: AuthState, action: PayloadAction<AuthState>) {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.userRoles = action.payload.userRoles;
        },
        clearAuth: (state: AuthState) => {
            state.userId = undefined;
            state.username = undefined;
            state.token = undefined;
            state.userRoles = undefined;
        },
    },
});

export const {
    setAuth,
    clearAuth,
} = authSlice.actions;
export default authSlice.reducer;
