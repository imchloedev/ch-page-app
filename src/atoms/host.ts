import { atom } from 'recoil';

export const hostState = atom<string>({
  key: 'hostState',
  default: '',
});
