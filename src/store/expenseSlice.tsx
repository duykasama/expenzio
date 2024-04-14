import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Expense = {
    id: string;
    amount: number;
    monetaryUnit: string;
    createdAt: string;
};

export interface ExpenseState {
    expenses: Expense[];
}

const initialState: ExpenseState = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setExpenses: (
            state: ExpenseState,
            action: PayloadAction<ExpenseState>
        ) => {
            state.expenses = action.payload.expenses;
        },
        clearExpenses: () => initialState,
    },
});

export const { setExpenses, clearExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
