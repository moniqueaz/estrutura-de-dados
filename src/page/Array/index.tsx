import { PushArray } from './push';
import { InsertArray } from './insert';
import { InsertFirstArray } from './insertFirst';
import { InitArray } from './array';
import { UnshiftArray } from './unshift';
import { RemoveArray } from './removeArray';
import { PopArray } from './pop';

const Array = () =>
  <>
    <InitArray />
    <InsertArray />
    <PushArray />
    <InsertFirstArray />
    <UnshiftArray/>
    <RemoveArray />
    <PopArray />
  </>;

export default Array;

