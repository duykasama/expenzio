export type Expense = {
    category: string;
    price: number;
    createdAt: string;
}

const expenses: Expense[] = [
    {
        category: 'Food',
        price: 100000,
        createdAt: '20-04-2024'
    },
    {
        category: 'Grocery',
        price: 100000,
        createdAt: '20-04-2024'
    },
    {
        category: 'Gas',
        price: 100000,
        createdAt: '20-04-2024'
    },
    {
        category: 'Medicine',
        price: 100000,
        createdAt: '20-04-2024'
    },
    {
        category: 'Entertainment',
        price: 100000,
        createdAt: '20-04-2024'
    }
];

export default expenses;