import { useState } from 'react';
import styled from 'styled-components';
import PostFooter from '../PostFooter/PostFooter';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';

interface NameInputProps {
  onNext: VoidFunction;
}

export default function Step4(props: NameInputProps) {
  const { onNext } = props;
  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState('');

  const handleMenuClear = () => {
    setMenu('');
  };

  const handlePriceClear = () => {
    setPrice('');
  };

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>홍보 할 메뉴</Highlight>를 <br />
          소개해 주세요
        </Title>
      </PostTitleContainer>

      <MenuInputContainer>
        <InputFieldContainer>
          <InputField
            type='text'
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
            placeholder='메뉴를 입력해주세요'
          />
          {menu && (
            <Xmark
              onClick={handleMenuClear}
              style={{ width: '1rem', position: 'absolute', right: '5%' }}
            />
          )}
        </InputFieldContainer>
        <Example>ex&#41; 소동 떡볶이 &#40;매운맛&#41;</Example>
      </MenuInputContainer>

      <PriceInputContainer>
        <InputFieldContainer>
          <InputField
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='가격을 입력해주세요'
          />
          {price && (
            <Xmark
              onClick={handlePriceClear}
              style={{ width: '1rem', position: 'absolute', right: '5%' }}
            />
          )}
        </InputFieldContainer>
        <Example>4500원</Example>
      </PriceInputContainer>

      <PostFooter onNext={onNext} />
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
  width: 100vw;
`;

const MenuInputContainer = styled.div`
  margin-top: 2rem;
  position: relative;
`;

const PriceInputContainer = styled.div`
  margin-top: 1rem;
  position: relative;
`;

export const Example = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.G_06};
  ${({ theme }) => theme.fonts.ex_01};
`;

const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  width: 100vw;
  height: 2.7rem;
  padding: 0.5rem;

  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  background: #f9f9f9;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
