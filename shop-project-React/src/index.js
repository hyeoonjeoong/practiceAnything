import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
// import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from 'react-query';

//✅ react-query 세팅
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {/* redux 세팅 2. Provider, store 작성. */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//✅ react-query
//ajax 요청하다보면 이런 기능들이 가끔 필요해진다.
//- 몇초마다 자동으로 데이터 다시 가져오게 하려면?
//- 요청실패시 몇초 간격으로 재시도?
//- 다음 페이지 미리가져오기?
//- ajax 성공/실패시 각각 다른 html을 보여주려면?
//직접 개발해도 되겠지만 귀찮으면 react-query 라는 라이브러리 설치해서 쓰면 된다.
//보통 sns나 코인거래소처럼 실시간 데이터를 보여줘야 하는 사이트에서 사용하면 좋다.

//const queryClient = new QueryClient()
//그리고 QueryClientProvider로 App을 감싸준다.
