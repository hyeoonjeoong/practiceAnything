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
export default configureStore({
  reducer: {
    // 작명 : user.reducer
    user: user.reducer,
  },
});
