export interface User {
  id: string;

  username: string;

  password: string;

  email: string;

  firstName: string;

  lastName: string;

  yearOfBirth: string;
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}

export interface SignUpRequest {
  username: string;

  password: string;

  email: string;

  firstName: string;

  lastName: string;

  yearOfBirth: string;
}

export interface SignUpResponse extends User {}

export interface APIError {
  statusCode: number;
  status: string;
  error: string;
  message: string[];
  timestamp: string;
  path: string;
}
