export interface JWTPayload {
  id: number;

  username: string;

  iat?: number;

  exp?: number;
}

export interface AppRequest extends Request {
  user: JWTPayload;
}

export enum UserStatus {
  UNVERIFY = 'unverify',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
