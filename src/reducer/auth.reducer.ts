import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/user.type';
import { getAccessTokenFromLS, getProfileFromLS } from 'src/utils/auth';

interface Authentication {
    isAuthenticated: boolean;
    profile: User | null;
    reset?: () => void;
}

const initialState: Authentication = {
    isAuthenticated: Boolean(getAccessTokenFromLS()),
    profile: getProfileFromLS(),
    reset: () => null,
};

export const authenticationSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        handleSetIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        handleSetProfile: (state, action: PayloadAction<User>) => {
            state.profile = action.payload;
        },
        handleReSetAuth: (state) => {
            state = initialState;
        },
    },
});

export const { handleSetIsAuthenticated, handleSetProfile, handleReSetAuth } = authenticationSlice.actions;
const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
