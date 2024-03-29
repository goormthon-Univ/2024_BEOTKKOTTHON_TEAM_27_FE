import styled from 'styled-components';
import SelectType from './SelectType/SelectType';
import Title from '../../common/Title/Title';
import { NameInputProps } from '../Step1/Step1';

export default function Step3(props: NameInputProps) {
  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>홍보 목적</Highlight>을 <br />
          선택해 주세요
        </Title>
        <SubTitle>
          각 홍보에 목적에 따라 <br /> 다른 형식의 포스팅이 작성됩니다!
        </SubTitle>
      </PostTitleContainer>
      <SelectType {...props} />
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 6.5rem;
  width: 100vw;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;
