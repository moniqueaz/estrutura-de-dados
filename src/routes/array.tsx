import {
  Routes,
  Route,
} from 'react-router-dom';
import Array from 'page/Array';
import { InsertArray } from 'page/Array/insert';
import { InsertFirstArray } from 'page/Array/insertFirst';
import { UnshiftArray } from 'page/Array/unshift';
import { RemoveArray } from 'page/Array/removeArray';
import { PopArray } from 'page/Array/pop';
import { PushArray } from 'page/Array/push';
import { RemoveFirstArray } from 'page/Array/removeFirst';
import { RemoveFirstAndUndefined } from 'page/Array/removeFirstAndUndefined';
export const ArrayRoutes = () => {
  return (
    <Routes>
      <Route path="array" element={<Array />}>
        <>
          <Route path="insert" element={<InsertArray />}/>
          <Route path="push" element={<PushArray />}/>
          <Route path="insertFirst" element={<InsertFirstArray />}/>
          <Route path="unshift" element={<UnshiftArray />}/>
          <Route path="remove" element={<RemoveArray />}/>
          <Route path="pop" element={<PopArray />}/>
          <Route path="removeFirst" element={<RemoveFirstArray />}/>
          <Route path="removeFirstAndUndefined" element={<RemoveFirstAndUndefined />}/>
        </>
      </Route>
    </Routes>

  );
};

