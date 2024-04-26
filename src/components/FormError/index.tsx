import { cn } from '@/lib/utils';

type Props = {
    message: string;
    className?: string;
};

const FormError = ({ message, className }: Props) => {
    return <small className={cn('text-red-600', className)}>{message}</small>;
};

export default FormError;
