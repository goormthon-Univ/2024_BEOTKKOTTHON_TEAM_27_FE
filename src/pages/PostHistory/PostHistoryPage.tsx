import styled from 'styled-components';
import TextCardWithImage from '../../components/PostHistory/TextCardWithImage';
import { useOutletContext } from 'react-router-dom';
import { HeaderLayoutContext } from '../../layouts/HeaderLayout';
import { useEffect } from 'react';
import { useGetHistory } from '../../hooks/queries/post/useGetHistory';

export default function PostHistoryPage() {
  const { setTitle } = useOutletContext<HeaderLayoutContext>();
  useEffect(() => {
    setTitle('내가 만든 포스팅');
  }, [setTitle]);

  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetHistory({
    userId: userId,
    storeId: storeId,
  });

  const posting = data?.data.postingList.reverse();

  return (
    <HistoryPageContainer>
      {posting?.map((data, index) => {
        if (data.postingImage) {
          return (
            <TextCardWithImage
              key={index}
              postingId={data.postingId}
              channel={data.postingChannel}
              date={data.postingImage_createdDate}
              text={data.postingText}
              imageUrl={data.postingImage}
              imageAlt={data.postingChannel}
            />
          );
        } else {
          return (
            <TextCardWithImage
              key={index}
              postingId={data.postingId}
              channel={data.postingChannel}
              date={data.postingText_createdDate}
              text={data.postingText}
            />
          );
        }
      })}
    </HistoryPageContainer>
  );
}

const HistoryPageContainer = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 5rem 0 2rem;
  background: #f3f4f6;
`;
