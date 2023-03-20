import { atom } from 'recoil';
import { IUser } from '../types/users';

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    username: '',
    password: '',
  },
});

export const usersInfoSate = atom<IUser[]>({
  key: 'usersState',
  default: [],
});

export const btnState = atom({
  key: 'btnState',
  default: 'false',
});
