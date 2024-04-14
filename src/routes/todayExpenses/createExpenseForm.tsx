import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import { CommandList } from 'cmdk';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import useAxios from '@/hooks/useAxios';
import { Queries } from '@/constants';

type Props = {
    handleCloseDialog: () => void;
};

type Category = {
    id: string;
    name: string;
    description: string;
};

const formSchema = z.object({
    amount: z.coerce.number().positive({
        message: 'Amount must be greater 0.',
    }),
    categoryId: z.coerce.string().min(1, {
        message: 'Category is required.',
    }),
});

const CreateExpenseForm = ({ handleCloseDialog }: Props) => {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const { data, loading, error } = useQuery(
        Queries.GET_ALL_EXPENSE_CATEGORIES
    );
    const axios = useAxios();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: 0,
            categoryId: '',
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            axios.post('/expenses', {
                ...values,
                monetaryUnit: 'VND',
            });
            handleCloseDialog();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input
                                    type={'number'}
                                    placeholder="0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Category</FormLabel>
                            <Popover
                                open={categoryDropdownOpen}
                                onOpenChange={setCategoryDropdownOpen}
                            >
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                'justify-between active:scale-100',
                                                !field.value &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            {field.value
                                                ? (
                                                      data.expenseCategories as Category[]
                                                  ).find(
                                                      (category) =>
                                                          category.id ===
                                                          field.value
                                                  )?.name
                                                : 'Select category'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0">
                                    <Command>
                                        <CommandInput placeholder="Search category..." />
                                        <CommandEmpty>
                                            No category found.
                                        </CommandEmpty>
                                        <CommandList>
                                            {(
                                                data.expenseCategories as Category[]
                                            ).map((category) => (
                                                <CommandItem
                                                    className="cursor-pointer"
                                                    value={category.id}
                                                    key={category.name}
                                                    onSelect={() => {
                                                        setCategoryDropdownOpen(
                                                            false
                                                        );
                                                        form.setValue(
                                                            'categoryId',
                                                            category.id
                                                        );
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            'mr-2 h-4 w-4',
                                                            category.id ===
                                                                field.value
                                                                ? 'opacity-100'
                                                                : 'opacity-0'
                                                        )}
                                                    />
                                                    {category.name}
                                                </CommandItem>
                                            ))}
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    variant={'outline'}
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    type="submit"
                >
                    Confirm
                </Button>
            </form>
        </Form>
    );
};

export default CreateExpenseForm;
