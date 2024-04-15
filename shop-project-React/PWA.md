### PWA ?

- Progressive Web App

### 프로젝트 만들기

- 처음 프로젝트 생성 시 이렇게 생성.
  ` npx create-react-app 프로젝트명 --template cra-template-pwa`

- 필요한 파일은 2개다. (위 처럼 생성해주면 알아서 생긴다.)
  `manifest.json`, `service-worker.js `

- 그리고 index.js 하단에 가서 `serviceWorkerRegistration.unregister();` 이 부분을 `serviceWorkerRegistration.register();` 이러케 바꿔주자.
  - 그럼 파일이 생긴다! 이미 생성된 파일은?? 설정해주는 파일이라고 생각하면 된다. 실제 파일은 빌드하면서 생성되기 때문에 저렇게 해주면 된다.
  - 빌드? 터미널 열고 `npm run build` > `build`폴더가 생기고, 내부에 설정할 수 있는 파일들이 있따.

### 그래서 얘네가 먼데

- `service-worker.js `
  - 오프라인에서도 사이트를 열 수 있게 도와준다. 모바일 앱들은 오프라인에서도 동작 가능하다. 왜냐면 앱 설치 할 때 앱 실행에 필요한 것들이 하드에 저장되기 때문. 근데 웹 사이트는 그렇지 않다. 접속 하면 서버에서 파일들을 가져온다! 그래서 인터넷이 끊기면 사용 못한다. 이걸 오프라인에서도 사이트를 열 수 있게 해주는 것이다! `html`, `css`, `js`파일을 미리 하드에 저장하겠다고 해주는 코드! (캐싱할 파일 목록이 보여진다. 미리 하드에 저장해 놓는 행위를 캐싱이라 한다. )

### 잘 됐나?

- `build` 된 폴더를 `vsCode`로 오픈해서 `index.html` 미리보기를 하자. 그럼 상단에 설치버튼이 생길거다. 그럼 잘 된거!
- 개발자도구 열어서 애플리케이션 들어가보면 `Manifest`, `service workers` 잘 돌아가나 확인도 할 수 있다. `cache storage`도 확인 할 수 있다.
