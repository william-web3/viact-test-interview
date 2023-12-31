import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { SignInRequest } from '../types/api';
import { AuthAPIs } from '../api';
import { ACCESS_TOKEN } from '../utils/constants';

export const useSignInHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = useCallback(async (params: SignInRequest, onSuccess: () => void) => {
    setLoading(true);
    try {
      const res = await AuthAPIs.requestSignIn(params);
      if (res.access_token) {
        toast.success('Login successfully');
        setError('');
        localStorage.setItem(ACCESS_TOKEN, `Bearer ${res.access_token}`);
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { signIn, loading, error };
};
