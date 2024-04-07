import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'din';
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});
export let { changeName, increase } = user.actions;

export default user;

//Redux 애플리케이션에서는 단일 스토어를 사용하는 것이 좋다. 한 곳에서 관리할 수 있도록!
//따라서 Redux의 configureStore 함수를 최상위 파일에서 한 번만 사용하는 것이 일반적으로 더 좋다.
//전역 상태가 단일 스토어에서 관리되고, 여러 컴포넌트 간에 일관된 데이터 흐름을 유지해야 하기 떄문!
