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
import expenses from '@/data/expenses';
import { FaEllipsisH } from 'react-icons/fa';
  

const TodayExpenses = () => {
    return (
        <section className="w-full h-full p-8 overflow-y-scroll">
            <h1 className="text-3xl">Today expenses</h1>
            <div className="flex justify-end my-4">
                <Button className="w-fit bg-blue-500">Add new expense</Button>
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
                            expenses.map((expense, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{idx+1}</TableCell>
                                    <TableCell>{expense.category}</TableCell>
                                    <TableCell>{expense.price} VND</TableCell>
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
    );
};

export default TodayExpenses;