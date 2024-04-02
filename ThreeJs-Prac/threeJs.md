## Three.js

- 웹페이지에 3D 객체를 쉽게 랜더링할 수 있도록 도와주는 Javascript 3D 라이브러리.
- `WebGL` 기술을 기반으로 랜더링과 카메라, 조명 등의 3D 프로그래밍 기술을 간단히 다룰 수 있도록 도와준다.

## WebGL

- Web Graphics Library.
- 웹 상에서 2D 및 3D 그래픽을 사용할 수 있도록 한다. HTML5의 `canvas` 요소를 사용한다.
- WebGL만을 사용하여 3D 요소를 구현하려면 복잡한데 이걸 Three.js가 도와준다!

## 설치

- `npm i three`
- 아니면 CDN import를 해준다.
  ```
      <script type="importmap">
      {
            "imports": {
            "three": "https://unpkg.com/three@0.138.3/build/three.module.js",
            "GLTFLoader":
            "https://unpkg.com/three@0.141.0/examples/jsm/loaders/GLTFLoader.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.141.0/examples/jsm/"

          }
        }
    </script>
  ```
- 그리고 가져온 라이브러리에서 기능들을 사용하기 위해 모듈로써 불러와준다. script의 type 속성에 `module` 키워드를 적용해야 브라우저가 알고 불러올 수 있다.
  ```
  <script type="module">
      import {
          GLTFLoader
      } from "GLTFLoader";
      import * as THREE from "three";
      import {
          OrbitControls
      } from 'three/addons/controls/OrbitControls.js';
  </script>
  ```

## Three.js에 필요한 3가지

카메라, 조명, 배경.
그리고 얘네들을 저장할 공간이 필요하다.

간단하게 생각해서 "장면 만들고, 이거 브라우저에 띄워줘라" 하는 흐름으로 생각하면 된다.

- 렌더링할 것들을 저장하는 공간이다. 얘가 없으면 아무것도 못보여준다.
  `let scene = new THREE.Scene();`
- 보여주는 renderer도 필요하다.

  `let renderer = new THREE.WebGLRenderer()`

- 카메라

  `let camera = new THREE.PerspectiveCamera(30, 1);`

  위치조정은 이러케 (x, y, z) `camera.position.set(0, 0, 5)`

- 조명

  `let light = new THREE.DirectionalLight(0xffff00, 10);`

  조명을 지정했으니 같이 보여주도록 명령! `scene.add(light)`

- 배경

  `scene.background = new THREE.Color("white")`

## 추가적으로

- gltf파일은 색상 인코딩 형식을 바꿔줘야 브라우저에서 원하는 색상으로 보여진다.

  `renderer.outputEncoding = THREE.sRGBEncoding;`

- 테두리가 계단처럼 깨져보인다면?
  `antialias: true`

- 3D 관련 소스는 여기서
  - https://sketchfab.com/feed
- 근데 GLTF파일은 다른 방법으로 가져와야 한다. 불러오고 이후 실행시키고 싶은 동작이 있다면 콜백함수를 넣어주면 된다.
  ```
   let loader = new GLTFLoader();
      loader.load("shiba/scene.gltf", function(gltf) {
        scene.add(gltf.scene)
        renderer.render(scene, camera)
         ...
  ```
- 지 혼자 움직이는거 말고 마우스커서를 통해 직접 움직이고 싶다면
  - OrbitControl 사용.
