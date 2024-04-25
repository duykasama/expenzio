import { DocumentNode, gql } from '@apollo/client';

type QueryType = {
    GET_EXPENSES: DocumentNode;
    GET_PAGINATED_EXPENSES: DocumentNode;
    GET_ALL_EXPENSE_CATEGORIES: DocumentNode;
};

const Queries: QueryType = {
    GET_EXPENSES: gql`
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
    GET_PAGINATED_EXPENSES: gql`
        query GetExpenses($skip: Int, $take: Int) {
            expenses(skip: $skip, take: $take) {
                items {
                    id
                    amount
                    createdAt
                    category {
                        name
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
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
