import { Outlet } from 'react-router-dom';
import { InitArray } from './initArray';
const Array = () => {
  return (
    <>
      <InitArray />
      <Outlet />
    </>

  );
};

export default Array;

