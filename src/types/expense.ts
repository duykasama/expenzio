export type ExpenseType = {
    id: number;
    amount: number;
    monetaryUnit: string;
    createdAt: string;
    category: ExpenseCategoryType;
};

export type ExpenseCategoryType = {
    id: number;
    name: string;
    description: string;
};
