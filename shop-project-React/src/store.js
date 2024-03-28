//redux 세팅 1.
import { configureStore, createSlice } from '@reduxjs/toolkit';

//createSlice는 useState와 비슷하다고 보면 된다.
//name : state이름
//initialState : 초기 값
//이렇게 만들고 store에 등록을 해야 한다.
let user = createSlice({
  name: 'user',
  initialState: 'kim',

  //✅ redux state 변경하기 : state수정하는 함수를 만들고, 원할 때 그 함수를 실행해달라고 한다.
  //✅redux state 변경하기 1. state수정해주는 함수 만들기
  //기존 state가 필요하면 매개변수로 넣어준다.
  //그리고 작성된 함수를 사용할 때 마다 변경되게 된다.
  //이 함수는 export를 해줘야 한다. 다른데서 사용해야 하니까! 함수 빼서 내보내야 한다.
  //user.actions 이러케 한다. 변경함수가 전부 그 자리에 출력된다. 이걸 변수로 저장해 export 한다.

  reducers: {
    changeName(state) {
      return 'din' + state;
    },
  },
});

//✅ redux state 변경하기 2. 내보내기
export let { changeName } = user.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      name: 'MOLDY DYED PUFFER JACKET BLACK',
      count: 2,
    },
    {
      id: 2,
      name: 'CRESCENT MOON HOBO BAG BLACK',
      count: 1,
    },
  ],
});
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

//✅ 하지만 그렇다고 해서 Redux store에 모든 걸 넣으면 안된다.
//굳이 공유 할 필요 없이 컴포넌트 내부에서만 쓸거면 필요 없다.
