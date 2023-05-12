import { atom } from 'recoil';

export const mqState = atom<number>({
  key: 'mqState',
  default: 0,
});
