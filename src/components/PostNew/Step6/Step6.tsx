import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../common/Title/Title';
import food1 from '../../../assets/Image/food1.jpg';
import food2 from '../../../assets/Image/food2.jpg';
import food3 from '../../../assets/Image/food3.jpg';
import { IcEmptyThumbnailFinal, TipBtn } from '../../../assets/svg';
import { useOnboardingContext } from '../../../context/PostNew/PostNewContext';
import usePostOnboardingInfo from '../../../queries/PostNew/usePostInfo';
import { put } from '../../../apis/fastClient';

interface ServerResponse {
  file_name: string;
}

export default function Step6() {
  // const userId = localStorage.getItem('userId');
  // const storeId = localStorage.getItem('storId');
  // const parsedUserId = userId ? parseInt(userId, 10) : undefined;
  // const parsedStoreId = storeId ? parseInt(storeId, 10) : undefined;

  const { updatePostInfo } = useOnboardingContext();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    const fileExtension = `.${file.name.split('.').pop()}`;
    formData.append('file_content', file);

    try {
      const queryParams = new URLSearchParams();
      queryParams.append('file_extension', fileExtension);

      const response = await put<ServerResponse>(
        `/api/ibm/object?${queryParams.toString()}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const fileNameString = response.data.file_name;
      console.log('image response: ' + fileNameString);

      if (response.status === 200) {
        setSelectedFile(fileNameString);
        console.log('파일 업로드 성공' + selectedFile);
        updatePostInfo({ fileName: fileNameString, postingType: 'Both', userId: 1, storeId: 1 });
      } else {
        console.error('파일 업로드 실패');
      }
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      const file = selectedFiles[0];

      uploadFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const { mutation } = usePostOnboardingInfo();
  const { onboardingInfo } = useOnboardingContext();

  const postOnboarding = async () => {
    try {
      const response = mutation.mutate(onboardingInfo, {
        onSuccess: (data) => {
          console.log('step06 postOnboarding response', response);
          const userId = data.userId;

          return userId;
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>메뉴 사진</Highlight>을 올려주세요 &#40;선택 &#41;
        </Title>
        <SubTitle>
          홍보 타겟에 맞춰 <br /> 키워드를 삽입해 편집해 드릴게요!
        </SubTitle>
      </PostTitleContainer>

      <IcEmptyThumbnailWrapper>
        <input
          type='file'
          accept='image/jpeg, image/png, image/gif, image/heic'
          style={{ display: 'none' }}
          id='imgInput'
          onChange={handleImageUpload}
        />
        <label htmlFor='imgInput'>
          <ThumbnailWrapper>
            <IcEmptyThumbnailFinal
              style={{ width: '15rem', height: '15rem', position: 'absolute' }}
            />

            {previewImage && <PreviewImg src={previewImage} alt='preview' />}
          </ThumbnailWrapper>
        </label>
      </IcEmptyThumbnailWrapper>

      <TipContainer>
        <TipBtn style={{ width: '2rem', margin: '0 0.5rem' }} />
        <TipMenu>메뉴의 특징을 강조해 보세요.</TipMenu>
      </TipContainer>
      <TipImageContainer>
        <ImgWrapper>
          <img src={food1} alt='첫번째-팁-음식' />
        </ImgWrapper>
        <ImgWrapper>
          <img src={food2} alt='첫번째-팁-음식' />
        </ImgWrapper>
        <ImgWrapper>
          <img src={food3} alt='첫번째-팁-음식' />
        </ImgWrapper>
      </TipImageContainer>

      <UploadButton onClick={postOnboarding}>업로드</UploadButton>
    </>
  );
}

const ImgWrapper = styled.div`
  img {
    border-radius: 10px;
    width: 6rem;
    height: 6rem;
  }
`;

const TipImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

const TipContainer = styled.div`
  position: relative;
  margin-top: 18%;
  display: flex;
`;

const TipMenu = styled.div`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.footer_01};
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 24rem;
  height: 15rem;

  margin: 0 auto;
  cursor: pointer;

  border-radius: 1.2rem;
`;

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
  width: 100vw;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;

const IcEmptyThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 2.9rem;
  cursor: pointer;
`;

const PreviewImg = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 10px;
  object-fit: contain;
  z-index: 9;
`;

const UploadButton = styled.button`
  margin-top: 1rem;
  position: absolute;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
