# SC ThreeJS Beginner

Udemy  
【Three.js入門】モダンな3Dフロントエンド技術を習得して周りのエンジニアと差をつけよう！  
https://www.udemy.com/course/threejs-beginner/  


## 環境構築

### Node.js

16.15.0 LTS  
https://nodejs.org/ja/  


### Three.js  

install ThreeJS r140  
https://threejs.org/  

```sh
yarn add three@0.140
```
import library  
```js
import * as THREE from "./node_modules/three/build/three.module.js";
```

modify OrbitControl.js
```js
import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
// } from 'three';
} from '../../../build/three.module.js';
```
import library  
```js
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
```

### lite-server  

install lite-server
```sh
yarn add lite-server
```
configure package.json (add "scripts")   
```json
  "scripts": {
    "start": "lite-server"
  },
```

### lil-gui

https://lil-gui.georgealways.com/  
install lil-gui
```sh
yarn add lil-gui
```
import library  
```js
import GUI from "./node_modules/lil-gui/dist/lil-gui.esm.js";
```

## コース内容


### Section 1: はじめに


### Section 2: Three.js開発環境構築

[Section 2](./sec02)  


### Section 3: Three.jsの基礎・原理


### Section 4: まずは簡単にThree.jsに触れてみよう

[Section 4](./sec04)  


### Section 5: ジオメトリの基礎

[Section 5](./sec05)  


### Section 6: UIデバッグの基礎

[Section 6](./sec06)  


### Section 7: マテリアルーメッシュの基礎

[Section 7](./sec07)  


### Section 8: 光源の基礎

[Section 8](./sec08)  


### Section 9: カメラの基礎

[Section 9](./sec09)  


### Section 10: カメラコントロール(制御)の基礎

[Section 10](./sec10)  


### Section 11: 【応用編】パーティクルを作ってみよう

[Section 11](./sec11)  


### Section 12: 【実践編１】3Dウェブサイトをつくってみよう１


### Section 13: 【実践編２】3Dウェブサイトをつくってみよう２


### Section 14: 【追加教材】


### Section 15: 【追加教材】


### Section 16: 【追加教材】Three.js で使う数学的知識

[Section 16](./sec16)  


