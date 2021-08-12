import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 이렇게 하나의 jsx로부터의 import를 두 줄에 나눠 적으면 export default된 것만 인식한다.
// import App from './app';
// import Custom from './app';
// export된 두 함수를 모두 import해서 사용하기 위해서는 아래처럼 중괄호로 묶어야 한다.
import {App, Custom} from './app';

// ReactDom에 화면을 그리자.
ReactDOM.render(
  // 그릴 내용
  <React.StrictMode>
    <App />
    <Custom/>
  </React.StrictMode>,
  // 내용이 그려질 대상 요소를 지정(이 경우, id가 root인 요소)
  document.getElementById('root')
);

// App();
// 아래처럼 어떤 조건이 충족되었을 때 함수를 호출해서 Dom을 조작할 수 있겠군.
setTimeout(Custom, 3000);
// Custom();

