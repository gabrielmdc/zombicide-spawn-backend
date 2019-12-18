export interface SignInResponse<T> {
  token: string;
  profile: T;
}
