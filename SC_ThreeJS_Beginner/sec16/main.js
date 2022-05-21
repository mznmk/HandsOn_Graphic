// [ import library ]
import * as THREE from "./node_modules/three/build/three.module.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

// [ declere variables ]
let scene, camera, renderer, ballMesh, pointLight, controls;

function init() {
  // [ create scene ]
  scene = new THREE.Scene();
  
  // [ create camera ]
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
    // width: 800,
    // height: 600
  }
  camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,   // アスペクト比
    0.1,
    1000
  );
  camera.position.set(0, 0, +500);
  
  // [ create renderer ]
  renderer = new THREE.WebGLRenderer({alpha:true});
  renderer.setSize(window.innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);
  
  // [ create texture ]
  let textures = new THREE.TextureLoader().load("./textures/earth.jpg");
  
  // [ create geometry ]
  let ballGeometry = new THREE.SphereGeometry(75, 64, 32);
  let ballMaterial = new THREE.MeshPhysicalMaterial({map: textures});
  ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
  scene.add(ballMesh);
  
  // [ add directional light ]
  // light
  let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  // // helper
  // let directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
  // scene.add(directionalLightHelper);
  
  // [ add point light ]
  // point light
  pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(-200, -200, -200);
  scene.add(pointLight);
  // point light helper
  let pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
  scene.add(pointLightHelper);
  
  // [ can move geometory with mouse ]
  controls = new OrbitControls(camera, renderer.domElement);

  // [ adjust size when window resize ]
  window.addEventListener("resize", onWindowsResize);

  // [ move point light around the ball automatically ]
  animate();
  
  // // [ rendering ]
  // renderer.render(scene, camera);
}

let rot = 0;

function animate() {
  // move point light around the ball
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.cos(Date.now() / 500)
  );
  
  // rotate camera
  rot += 1;
  let radian = rot * (Math.PI / 180);
  camera.position.x = Math.sin(radian) * 500;
  camera.position.z = Math.cos(radian) * 500;
  camera.lookAt(ballMesh.position);

  // rendering
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onWindowsResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// [ render when page loaded ]
window.addEventListener("load", init);
