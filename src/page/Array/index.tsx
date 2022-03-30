
import { PushArray } from './push';
import { InsertArray } from './insert';
import { InsertFirstArray } from './insertFirst';
import { InitArray } from './array';
import { UnshiftArray } from './unshift';
import { RemoveArray } from './removeArray';
import { PopArray } from './pop';
import { RemoveFirstArray } from './removeFirst';

export type ListType = {
  list?: number[] | string[]
  setList?: Function
}

const Array = () => {
  return (
    <>
      <InitArray />
      <InsertArray/>
      <PushArray />
      <InsertFirstArray />
      <UnshiftArray/>
      <RemoveArray />
      <PopArray />
      <RemoveFirstArray />
    </>

  );
};

export default Array;

