let scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 카메라의 위치 설정 (x: 0, y: 0, z: 5)
camera.position.set(0, 0, 5);

import { GLTFLoader } from 'GLTFLoader';

let loader = new GLTFLoader();

loader.load('duck/scene.gltf', function (gltf) {
  scene.add(gltf.scene);
});
