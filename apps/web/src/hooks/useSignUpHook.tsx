import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { SignUpRequest } from '../types/api';
import { AuthAPIs } from '../api';

export const useSignUpHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signUp = useCallback(async (params: SignUpRequest, onSuccess: () => void) => {
    setLoading(true);
    try {
      const res = await AuthAPIs.requestSignUp(params);
      if (res.id) {
        toast.success('Sign up successfully');
        setError('');
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { signUp, loading, error };
};
