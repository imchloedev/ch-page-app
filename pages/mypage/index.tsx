import React from 'react';

import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import ReviewModal from '@src/components/ReviewModal';
import Media from '@src/components/Media';
import ArrowRight from '../../public/icons/arrow-right.svg';
import { SSubmitBtn } from '@pages/login';
import { LocalStorage } from '@src/utils';
import { filteredViewedListState } from '@src/selectors/recentSelector';
import { SContentsTitle, SGuidance } from '@pages/index';
import { reviewModalState } from '@src/atoms/reviews';
import { theme } from '@src/styles/theme';

const MyPage = () => {
  const router = useRouter();
  const filteredViewedList = useRecoilValue(filteredViewedListState);
  const [reviewModal, setReviewModal] = useRecoilState(reviewModalState);

  const onLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    LocalStorage.removeItem('token');
    router.push('/');
  };

  const handleReviewModal = () => {
    setReviewModal(true);
  };

  return (
    <MyPageLayout>
      <PageTitle>My Page</PageTitle>
      <div>
        <SReviewTitle onClick={handleReviewModal}>
          Go to Reviews
          <ArrowRight />
        </SReviewTitle>
        {reviewModal && <ReviewModal />}
      </div>
      <ViewedWrapper>
        <SContentsTitle>Recently viewed</SContentsTitle>
        {filteredViewedList.length > 0 ? (
          <Media content={filteredViewedList} />
        ) : (
          <SGuidance>You have not viewed any content yet.</SGuidance>
        )}
      </ViewedWrapper>
      <LogoutBtnWrapper>
        <SSubmitBtn onClick={onLogout}>Log Out</SSubmitBtn>
      </LogoutBtnWrapper>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  margin-top: 180px;
  padding: 0 2vw;

  ${theme.mq[3]} {
    width: 1200px;
    margin: 100px auto 0 auto;
  }
`;

const PageTitle = styled.div`
  margin-bottom: 60px;
`;

const SReviewTitle = styled(SContentsTitle)`
  ${theme.flex}
  gap: 5px;

  svg {
    path {
      stroke: ${theme.colors.white};
    }
  }
`;

const ViewedWrapper = styled.div`
  margin-top: 40px;
`;

const LogoutBtnWrapper = styled.div`
  margin-top: 100px;

  button {
    background-color: transparent;
    color: ${theme.colors.lightGrey};
  }
`;
