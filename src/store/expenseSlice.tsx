import { ExpenseType } from '@/types/expense';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const ExpenseActions = {
    SET_EXPENSES: 'setExpenses',
    CLEAR_EXPENSES: 'clearExpenses',
    GO_TO_NEXT_PAGE: 'goNext',
    GO_TO_PREV_PAGE: 'goPrevious',
};

interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
    pageIndex: number;
}

export interface ExpenseState {
    expenses: ExpenseType[];
    pageInfo: PageInfo;
}

const initialState: ExpenseState = {
    expenses: [],
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        pageSize: 5,
        pageIndex: 1,
    },
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setExpenses: (
            state: ExpenseState,
            action: PayloadAction<ExpenseType[]>
        ) => {
            state.expenses = action.payload;
        },
        clearExpenses: () => initialState,
        goNext: (
            state: ExpenseState,
            action: PayloadAction<{
                hasNextPage: boolean;
                hasPreviousPage: boolean;
            }>
        ) => {
            state.pageInfo.hasNextPage = action.payload.hasNextPage;
            state.pageInfo.hasPreviousPage = action.payload.hasPreviousPage;
            state.pageInfo.pageIndex += 1;
        },
    },
});

export const { setExpenses, clearExpenses, goNext } = expenseSlice.actions;
export default expenseSlice.reducer;
