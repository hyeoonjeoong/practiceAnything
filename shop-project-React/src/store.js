//redux 세팅 1.
import { configureStore, createSlice } from '@reduxjs/toolkit';

//createSlice는 useState와 비슷하다고 보면 된다.
//name : state이름
//initialState : 초기 값
//이렇게 만들고 store에 등록을 해야 한다.
let user = createSlice({
  name: 'user',
  initialState: 'kim',
});

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});

//✅ 하지만 그렇다고 해서 Redux store에 모든 걸 넣으면 안된다.
//굳이 공유 할 필요 없이 컴포넌트 내부에서만 쓸거면 필요 없다.
