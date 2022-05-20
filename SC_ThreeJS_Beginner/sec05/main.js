import * as THREE from "./node_modules/three/build/three.module.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

//シーン
const scene = new THREE.Scene();

//カメラ
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(1, 1, 2);

//レンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

/**
 * ジオメトリを作ってみよう。
 **/

//ジオメトリー
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 8, 8, 8);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
const planeGeometry = new THREE.PlaneGeometry(5, 5, 16, 16);
const torusGeometry = new THREE.TorusGeometry(0.4, 0.2, 16, 32);

//マテリアル
const normalMaterial = new THREE.MeshNormalMaterial(
  {wireframe:true}
);

//メッシュ化
const box = new THREE.Mesh(boxGeometry, normalMaterial);
const sphere = new THREE.Mesh(sphereGeometry, normalMaterial);
const plane = new THREE.Mesh(planeGeometry, normalMaterial);
const torus = new THREE.Mesh(torusGeometry, normalMaterial);
sphere.position.x = 1.5;
plane.rotation.x = Math.PI * -0.5;
plane.position.y = -0.75;
torus.position.x = -1.5
scene.add(box, sphere, plane, torus);

//バッファジオメトリー
const bufferGeometry = new THREE.BufferGeometry();

const count = 100;
const positionArray = new Float32Array(9 * count);
for (let i = 0; i < 9 * count; i++) {
  positionArray[i] = Math.random() - 0.5;
}
const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
bufferGeometry.setAttribute("position", positionAttribute);

//マテリアル
const basicMaterial = new THREE.MeshBasicMaterial(
  {wireframe:true}
);

//メッシュ化
const buffer = new THREE.Mesh(bufferGeometry, basicMaterial);
scene.add(buffer);

//ライト
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

//マウス操作
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener("resize", onWindowResize);

const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  //オブジェクトの回転
  // sphere.rotation.x = elapsedTime;
  // plane.rotation.x = elapsedTime;
  // octahedron.rotation.x = elapsedTime;
  // torus.rotation.x = elapsedTime;

  // sphere.rotation.y = elapsedTime;
  // plane.rotation.y = elapsedTime;
  // octahedron.rotation.y = elapsedTime;

  // torus.rotation.y = elapsedTime;

  controls.update();

  //レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

//ブラウザのリサイズに対応
function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

animate();
