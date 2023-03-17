import { atom } from 'recoil';
import { IContent } from '../types/content';

export const viewedListState = atom<IContent[]>({
  key: 'viewListState',
  default: [],
});
