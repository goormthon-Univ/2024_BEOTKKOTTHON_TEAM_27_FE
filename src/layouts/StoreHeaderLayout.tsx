import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

export default function StoreHeaderLayout() {
  return (
    <>
      <Header title={'내 가게 등록하기'} />
      <Outlet />
    </>
  );
}
