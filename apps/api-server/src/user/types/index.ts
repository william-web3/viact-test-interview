export interface JWTPayload {
  sub: number;

  username: string;
}

export interface AppRequest extends Request {
  user: JWTPayload;
}
