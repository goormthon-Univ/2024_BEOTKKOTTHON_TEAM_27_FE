import styled from 'styled-components';
import HomeSubsection from './HomeSubsection/HomeSubsection';
import { Confetti, Confetti2 } from '../../assets/svg';

export default function Home() {
  return (
    <HomeContainer>
      <Confetti style={{ left: '10%', top: '21%', position: 'absolute', height: '6.4rem' }} />
      <Confetti2
        style={{
          right: '4%',
          top: '13%',
          position: 'absolute',
          height: '6.4rem',
        }}
      />
      <HomeTitle>
        SNS 마케팅 포스트 <br />
        지금 바로 만들어 보세요!
      </HomeTitle>
      <HomeSubsection />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 2rem;
  width: 100vw;
  /* height: 100dvh; */
`;

const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;

  text-align: center;
  ${({ theme }) => theme.fonts.Title};
`;
