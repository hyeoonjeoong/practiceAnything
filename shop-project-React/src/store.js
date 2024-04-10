//redux 세팅 1.
import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

//createSlice는 useState와 비슷하다고 보면 된다.
//name : state이름
//initialState : 초기 값
//이렇게 만들고 store에 등록을 해야 한다.
//-------------⬇️store > userSlice로 파일 분리
// let user = createSlice({
//   name: 'user',
//   //initialState: 'kim',
//   initialState: { name: 'kim', age: 20 },

//   //✅ redux state 변경하기 : state수정하는 함수를 만들고, 원할 때 그 함수를 실행해달라고 한다.
//   //✅redux state 변경하기 1. state수정해주는 함수 만들기
//   //기존 state가 필요하면 매개변수로 넣어준다.
//   //그리고 작성된 함수를 사용할 때 마다 변경되게 된다.

//   //---state가 object, array이라면 바로 바꿔주면 된다. (return없이)
//   //initialState:{name:"kim", age:20}
//   //reducers --> changeName(state){state.name = "park"}

//   reducers: {
//     //어떻게 바꿀건지 바로 작성해주면 된다.
//     changeName(state) {
//       //return 'din' + state;
//       state.name = 'din';
//     },
//     increase(state, action) {
//       //state변경 함수를 action으로 작명한다.
//       state.age += action.payload; //화물 보낸거 출력 문법.
//     },
//   },
// });
//🐥 state 변경함수에 파라미터 넣기
//같은 함수인데 다른 기능 수행하도록 해주는 것.
//기본적으로 숫자 더하는 함수인데 1씩 더하거나, 10씩 더하거나 해야 할 경우.
//함수 사용 할 때 increase(10)이르케 파라미터를 넣어서 사용하면 된다.
//파라미터를 payload로 뚫어놓으면 사용할 때 편안!!!
//--> reducers 함수에서 payload(:화물, 소포, 택배)를 써야 파라미터에 쓴 게 들어온다.
//---이렇게 말고
// increase(state, a) {
//   state.age += a;
// },
//---이렇게!!
// increase(state, a) {
//   state.age += a.payload;
// },

//✅ redux state 변경하기 2. 내보내기
//이 함수는 export를 해줘야 한다. 다른데서 사용해야 하니까! 함수 빼서 내보내야 한다.
//user.actions 이러케 한다. 변경함수가 전부 그 자리에 출력된다. (객체로 내보내진다.) 이걸 변수로 저장해 export 한다.
//export let { changeName, increase } = user.actions;
//-------------⬆️store > userSlice로 파일 분리

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
  reducers: {
    addCount(state, action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[cartId].count++;
    },
    minusCount(state, action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[cartId].count--;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      const deletedItemId = action.payload;
      console.log(state);
      console.log(deletedItemId);
      return state.filter((item) => item.id !== deletedItemId);
      // let cartId = state.findIndex((a) => {
      //   return a.id === action.payload;
      // });
      // if (cartId) {
      //   return state.filter((item) => item.id !== action.payload);
      // }
    },
  },
});

export let { addCount, minusCount, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

//✅ 하지만 그렇다고 해서 Redux store에 모든 걸 넣으면 안된다.
//굳이 공유 할 필요 없이 컴포넌트 내부에서만 쓸거면 필요 없다.
