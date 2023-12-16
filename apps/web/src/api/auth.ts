import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from '../types/api';

import axiosInstance from './axios';

export async function requestSignUp(user: SignUpRequest): Promise<SignUpResponse> {
  return (await axiosInstance.post<SignUpResponse>('/auth/signup', user)).data;
}

export async function requestSignIn(params: SignInRequest): Promise<SignInResponse> {
  return (await axiosInstance.post<SignInResponse>('/auth/signin', params)).data;
}
