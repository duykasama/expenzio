import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

import { FaEllipsisH } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import CreateExpense from './createExpense';
import { Queries } from '@/constants';
import formatDate from '@/lib/dateHelper';
import { ExpenseType } from '@/types/expense';

const TodayExpenses = () => {
    const { data, loading, error, refetch } = useQuery(
        Queries.GET_PAGINATED_EXPENSES,
        {
            variables: {
                skip: 0,
                take: 5,
            },
        }
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <section className="w-full h-full p-8 overflow-y-scroll">
                <h1 className="text-3xl">Today expenses</h1>
                <div className="flex justify-end my-4">
                    <CreateExpense refetch={refetch} />
                </div>
                <div className="flex flex-col justify-between">
                    <Table className="border">
                        <TableCaption>
                            A list of your recent expenses.
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="text-lg hover:bg-transparent">
                                <TableHead className="w-[100px]">No.</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.expenses.items &&
                                data.expenses.items.map(
                                    (expense: ExpenseType, idx: number) => (
                                        <TableRow key={idx}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>
                                                {expense.category.name}
                                            </TableCell>
                                            <TableCell>
                                                {expense.amount} VND
                                            </TableCell>
                                            <TableCell>
                                                {formatDate(expense.createdAt)}
                                            </TableCell>
                                            <TableCell className="flex justify-end">
                                                <FaEllipsisH />
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                        </TableBody>
                    </Table>
                    <Pagination className="justify-end">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </section>
        </>
    );
};

export default TodayExpenses;
