
import { PushArray } from './push';
import { InsertArray } from './insert';
import { InsertFirstArray } from './insertFirst';
import { InitArray } from './array';
import { UnshiftArray } from './unshift';
import { RemoveArray } from './removeArray';
import { PopArray } from './pop';
import { RemoveFirstArray } from './removeFirst';
import { RemoveFirstAndUndefined } from './removeFirstAndUndefined';
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
      <RemoveFirstAndUndefined />
    </>

  );
};

export default Array;

