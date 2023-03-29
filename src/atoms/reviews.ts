import { atom } from 'recoil';

export interface IReview {
  id?: number;
  title?: string;
  rating?: string | number;
}

export const reviewInputState = atom<string>({
  key: 'reviewInputState',
  default: '',
});

export const reviewsState = atom<IReview[]>({
  key: 'reviewsState',
  default: [],
});

export const reviewModalState = atom<boolean>({
  key: 'reviewModalState',
  default: false,
});

export const reviewRatingState = atom<string>({
  key: 'reviewRatingState',
  default: '1',
});
