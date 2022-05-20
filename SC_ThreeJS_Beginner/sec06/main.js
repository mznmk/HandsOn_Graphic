import * as THREE from "./node_modules/three/build/three.module.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import GUI from "./node_modules/lil-gui/dist/lil-gui.esm.js";

/**
 * UIデバッグ
 */
const gui = new GUI();

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

//ジオメトリを作ってみよう。
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 8, 8, 8);

//マテリアル
const material = new THREE.MeshBasicMaterial({
  color: "red",
});

//メッシュ化
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

//デバッグ
const positionFolder = gui.addFolder("position");
const visibleFolder = gui.addFolder("visible");

// gui.add(box.position, "x", -3, 3, 0.01);
positionFolder.add(box.position, "x").min(-2).max(2).step(0.1).name("transform x");
positionFolder.add(box.position, "y").min(-2).max(2).step(0.1).name("transform y");
positionFolder.add(box.position, "z").min(-2).max(2).step(0.1).name("transform z");

positionFolder.add(box.rotation, "x").min(-4).max(4).step(0.1).name("rotation x");
positionFolder.add(box.rotation, "y").min(-4).max(4).step(0.1).name("rotation y");
positionFolder.add(box.rotation, "z").min(-4).max(4).step(0.1).name("rotation z");

visibleFolder.add(box, "visible");
visibleFolder.add(material, "wireframe")

gui.addColor(material, "color");

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
