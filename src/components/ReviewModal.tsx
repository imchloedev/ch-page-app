import React from 'react';
import {
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';
import styled from '@emotion/styled';
import Ratings from '@src/components/Ratings';
import Modal from '@src/components/common/Modal';
import ReviewItem from '@src/components/ReviewItem';
import Close from '../../public/icons/close.svg';
import {
  reviewModalState,
  reviewsState,
  reviewInputState,
  reviewRatingState,
  IReview,
} from '@src/atoms/reviews';
import { theme } from '@src/styles/theme';
import { SGuidance } from '@pages/index';

const ReviewModal = () => {
  const setReviewModal = useSetRecoilState<boolean>(reviewModalState);
  const [reviewInput, setReviewInput] =
    useRecoilState<string>(reviewInputState);
  const [reviews, setReviews] = useRecoilState<IReview[]>(reviewsState);
  const reviewRating = useRecoilValue(reviewRatingState);
  const resetReviewInput = useResetRecoilState(reviewInputState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewInput(e.target.value);
  };

  const closeModal = () => {
    setReviewModal(false);
  };

  const newReview: IReview = {
    id: Math.floor(Math.random() * 1000),
    title: reviewInput,
    rating: Number(reviewRating).toFixed(1),
  };

  const addNewReview = () => {
    if (reviewInput) {
      setReviews([newReview, ...reviews]);
      resetReviewInput();
    } else {
      return alert('Title required.');
    }
  };

  return (
    <Modal setModal={closeModal} style={modalStyle}>
      <SReviewWrapper>
        <SReviewHeader>
          <h4>Reviews</h4>
          <button onClick={closeModal}>
            <Close />
          </button>
        </SReviewHeader>
        <SInsertWrapper>
          <SInputBox>
            <input
              type="text"
              value={reviewInput}
              onChange={onChange}
              placeholder="Insert here"
              required
            />
          </SInputBox>
          <SBtnBox>
            <Ratings />
            <button onClick={addNewReview}>Add</button>
          </SBtnBox>
        </SInsertWrapper>
        <NavBox>
          <div>Title</div>
          <div>Rating</div>
        </NavBox>
        <SReviewList>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <SItemContainer key={review.id}>
                <ReviewItem review={review} />
              </SItemContainer>
            ))
          ) : (
            <SGuidanceCopy>No results yet.</SGuidanceCopy>
          )}
        </SReviewList>
      </SReviewWrapper>
    </Modal>
  );
};

export default ReviewModal;

const modalStyle = {
  width: '600px',
  height: '500px',
  backgroundColor: `${theme.colors.deepGrey}`,
  borderRadius: '20px',
  color: `${theme.colors.white}`,
};

const SReviewWrapper = styled.div`
  padding: 0 2vw;
`;

const SReviewHeader = styled.div`
  ${theme.flex}
  justify-content: space-between;
  height: 80px;
  margin-bottom: 20px;

  button {
    background-color: transparent;

    path {
      fill: ${theme.colors.white};
    }
  }
`;

const SInsertWrapper = styled.div`
  ${theme.flex}
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 0 18px;
`;

const SInputBox = styled.div`
  flex-basis: 78%;

  input {
    background-color: transparent;
    border: none;
    color: ${theme.colors.white};
    width: 100%;
    height: 40px;
  }
`;

const SBtnBox = styled.div`
  flex-basis: 22%;
  ${theme.flex}
  justify-content: space-between;
  gap: 10px;

  select {
    width: 60px;
    background-color: transparent;
    border: none;
    padding: 0 8px;
    color: white;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${theme.colors.white};
  }
`;

const NavBox = styled.div`
  ${theme.flex}
  margin: 20px 0 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.middleGrey};
  font-size: 12px;
  text-align: center;
  color: ${theme.colors.middleGrey};

  & div:nth-of-type(1) {
    flex-basis: 60%;
  }

  & div:nth-of-type(2) {
    flex-basis: 40%;
  }
`;

const SReviewList = styled.div`
  height: 280px;
  overflow-y: scroll;
`;

const SItemContainer = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.middleGrey};
  }
`;

const SGuidanceCopy = styled(SGuidance)`
  color: ${theme.colors.middleGrey};
`;
