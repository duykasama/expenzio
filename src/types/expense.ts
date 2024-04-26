export type ExpenseType = {
    id: string;
    amount: number;
    monetaryUnit: string;
    createdAt: string;
    category: {
        name: string;
    };
};

export type ExpenseCategoryType = {
    id: string;
    name: string;
    description: string;
};
