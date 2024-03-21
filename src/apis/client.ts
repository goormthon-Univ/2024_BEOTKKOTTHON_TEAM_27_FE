import axios from 'axios';

export const getAccessTokenLocalStorage = () => {
  const accessTokens = localStorage.getItem('accessToken');
  return accessTokens ? `Bearer ${accessTokens}` : '';
};

export const cleanHeaderInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {},
});

// [이미지 업로드]
// 8002 포트번호 다른 이유로 인스턴스 생성
export const imageinstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {},
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {},
});

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return imageinstance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}

// export function put<T>(...args: Parameters<typeof instance.put>) {
//   return instance.put<T>(...args);
// }
