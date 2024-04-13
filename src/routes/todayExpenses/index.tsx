import { Button } from '@/components/ui/button';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// import expenses from '@/data/expenses';
import { FaEllipsisH } from 'react-icons/fa';
import { gql, useQuery } from '@apollo/client';

const TodayExpenses = () => {
    const GET_EXPENSES = gql`
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
    `;
    const { data, loading, error } = useQuery(GET_EXPENSES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <section className="w-full h-full p-8 overflow-y-scroll">
                <h1 className="text-3xl">Today expenses</h1>
                <div className="flex justify-end my-4">
                    <Dialog>
                        <DialogTrigger>
                            <Button className="w-fit border border-primary-foreground">Add new expense</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="flex flex-col justify-between">
                    <Table className="border">
                        <TableCaption>A list of your recent expenses.</TableCaption>
                        <TableHeader>
                            <TableRow className="text-lg hover:bg-transparent">
                                <TableHead className="w-[100px]">No.</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data.expenses.map((expense: any, idx: number) => ( // eslint-disable-line
                                    <TableRow key={idx}>
                                        <TableCell>{idx+1}</TableCell>
                                        <TableCell>{expense.category.name}</TableCell>
                                        <TableCell>{expense.amount} VND</TableCell>
                                        <TableCell>{expense.createdAt}</TableCell>
                                        <TableCell className="flex justify-end">
                                            <FaEllipsisH />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
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
