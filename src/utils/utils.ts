/**
 * Android App 확인 함수 (sodong-aos)
 */
export function isAndroid() {
  if (window) {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /sodong_aos/i.test(userAgent);
  }
}

/**
 * 텍스트 복사 함수
 */
export function copyText(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator?.clipboard?.writeText)
        throw new Error('복사 기능이 제공되지 않는 브라우저입니다.');

      window.navigator.clipboard.writeText(text).then(() => {
        resolve();
      });
    } catch (e) {
      reject();
    }
  });
}

/**
 * 파일 다운로드 함수
 */
export function downloadImage(url: string): Promise<string> {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'GET',
    })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);

        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.download = 'sodong_image.png';
        aTag.click();

        resolve('');
      });
  });
}

/**
 * 패키지 이름 가져오는 함수
 */
export function getPackageName(sns: string): string {
  if (sns == 'dangeun') return 'com.towneers.www';
  else if (sns == 'kakaochannel') return 'com.kakao.yellowid';
  else if (sns == 'kakaotalk') return 'com.kakao.talk';
  else return '';
}

/**
 * 이미지 Full Url 가져오는 함수
 * @param filename - 파일명
 */
export function getImageFullUrl(filename: string): string {
  const BASE_URL = import.meta.env.VITE_APP_FAST_URL;
  if (!filename) return '';
  return `${BASE_URL}/api/ibm/object/${filename.replace('.', '/.')}`;
}
