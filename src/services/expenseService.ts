import { DocumentNode, useQuery } from '@apollo/client';
import { toast } from 'sonner';

const useFetch = (query: DocumentNode) => {
    const { data, loading, error, refetch } = useQuery(query);
    if (loading) toast.error('Loading');
    if (!error) toast.error('There was no error');

    return { data, refetch };
};

export default useFetch;
