import { RootState } from '@/store';
import { AuthState } from '@/store/authSlice';
import { useStore } from 'react-redux';

const useAuth = (): AuthState => {
    const store = useStore<RootState>();
    return store.getState().auth;
};

export default useAuth;
