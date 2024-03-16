## scss 사용해보기

`npm i sass` 로 설치!

### Sass(Syntactically Awesome StyleSheets) ?

- css 전처리기이다.
- 가독성이 높고 코드 재사용에 유리하다.
- 변수, 조건문, 반복문 등 추가 기능들을 함께 사용할 수 있다.
- CSS보다 지원하는 기능도 많고, 코드도 짧고, 스타일이 중첩되는 것도 방지할 수 있다.

### 표기법

- .sass

  - `;` , `{}` 없다.
  - 탭을 사용해 스타일 정의.
  - 변수 선언 시 `$` 붙여준다.

    ```
    $font-stack: Helvetica, sans-serif
    $primary-color: #333

    body {
    font: 100% $font-stack
    color: $primary-color
    }
    ```

- .scss

  - 기존 css와 비슷한 문법을 사용한다.
  - 변수 선언 시 `$` 붙여준다.
  - 파일명 앞에 언더바를 두는 암묵적인 룰이 있다.
  - 이는 `scss`끼리 서로 구분하기 위함.

    ```
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    body {
      font: 100% $font-stack;
      color: $primary-color;
    }
    ```

## module.scss

- css 클래스가 중첩되는 걸 막을 수 있다!
- 기존 확정자 `.css` 를 `.module.css` 로 바꾸면 끝. (코드 변경 필요 없이 확장자만 바꿔주면 되는 것.)
- 이렇게 해주면 해당 컴포넌트 내부에서만 스타일을 적용해주기 때문에, 다른 곳에서 class이름이 겹치더라도 스타일이 중첩되지 않는다!
