import styled from 'styled-components';
import { Instagram } from '../../../assets/svg';

interface TextCardProps {
  date: string;
  text: string;
}

function TextCard({ date, text }: TextCardProps) {
  return (
    <ImageCardContainer>
      <ImageCardHeader>
        <Instagram style={{ width: '2.0625rem', height: '2rem' }} />
        <Date>{date}</Date>
      </ImageCardHeader>

      <TextContainer>{text}</TextContainer>
    </ImageCardContainer>
  );
}

const ImageCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 19.6875rem;
  border-radius: 0.625rem;
  background: #fff;

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ImageCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 16.6875rem;
  margin: 1.5rem auto 0 auto;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.ex_01};
`;

const TextContainer = styled.p`
  padding: 0.8rem 1.5rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.ex_01};
`;

export default TextCard;
