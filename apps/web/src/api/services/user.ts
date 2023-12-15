
import { User } from '../../types/api';
import axiosInstance from '../axios';

export async function requestProfile(): Promise<User> {
  return (await axiosInstance.get('/users/profile')).data;
}
