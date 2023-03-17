import { viewedListState } from '@src/atoms/recent';
import { selector } from 'recoil';

export const filteredViewedListState = selector({
  key: 'filteredViewedListState',
  get: ({ get }) => {
    const list = get(viewedListState);
    const filtered = list.filter(
      (item, idx) =>
        list.findIndex((item2, idx2) => item.id === item2.id) === idx
    );
    return filtered;
  },
});
