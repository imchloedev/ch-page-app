export interface IUser {
  id: number;
  email: string;
  name: string;
  nickname: string;
}

export interface IUsers<T> {
  users: T[];
}
