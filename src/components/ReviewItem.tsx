import { IReview, reviewsState } from '@src/atoms/reviews';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import Trash from '../../public/icons/trash.svg';
import { theme } from '@src/styles/theme';

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  const [reviews, setReviews] = useRecoilState<IReview[]>(reviewsState);

  const deleteReview = (id: number | undefined) => {
    const filtered = reviews.filter((review: IReview) => review.id !== id);
    setReviews(filtered);
  };

  return (
    <SItemWrapper>
      <STtitle>{review.title}</STtitle>
      <SItemBtnGroup>
        <SRatingCopy>{review.rating}</SRatingCopy>
        <button onClick={() => deleteReview(review.id)}>
          <Trash />
        </button>
      </SItemBtnGroup>
    </SItemWrapper>
  );
};

export default ReviewItem;

const SItemWrapper = styled.div`
  ${theme.flex}
  justify-content: space-between;
  padding: 10px 0;
`;

const STtitle = styled.p`
  width: 390px;
  height: 1.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.8em;
`;

const SItemBtnGroup = styled.div`
  flex-basis: 22%;
  ${theme.flex}
  justify-content: space-between;
  gap: 10px;

  button {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    color: ${theme.colors.white};
  }

  svg {
    path {
      fill: ${theme.colors.white};
    }
  }
`;

const SRatingCopy = styled.p`
  color: ${theme.colors.lightGrey};
`;
