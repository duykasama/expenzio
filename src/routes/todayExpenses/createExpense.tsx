import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import CreateExpenseForm from './createExpenseForm';
import { useState } from 'react';

type Props = {
    refetch: () => void;
};

const CreateExpense = ({ refetch }: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialogClose = () => {
        setDialogOpen(false);
        setTimeout(() => {
            refetch();
        }, 300);
    };
    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button className="w-fit border border-primary-foreground">
                    Add new expense
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new expense</DialogTitle>
                </DialogHeader>
                <CreateExpenseForm handleCloseDialog={handleDialogClose} />
            </DialogContent>
        </Dialog>
    );
};

export default CreateExpense;
