import { DocumentNode, gql } from '@apollo/client';

type QueryType = {
    GET_ALL_EXPENSES: DocumentNode,
    GET_ALL_EXPENSE_CATEGORIES: DocumentNode,
}

const Queries: QueryType = {
    GET_ALL_EXPENSES: gql`
        query GetExpenses {
            expenses {
                id
                amount
                createdAt
                category {
                    name
                }
            }
        }
    `,
    GET_ALL_EXPENSE_CATEGORIES: gql`
        query GetExpenseCategories {
            expenseCategories {
                id
                name
            }
        }
    `,
};

export default Queries;
