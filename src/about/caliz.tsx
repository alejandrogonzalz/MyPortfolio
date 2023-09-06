// import * as THREE from "three";

// export const Space = () => {
//   let camera,
//     scene,
//     renderer,
//     material,
//     mouseX,
//     mouseY,
//     windowHalfX = window.innerWidth / 2,
//     windowHalfY = window.innerHeight / 2;
//   camera = new THREE.PerspectiveCamera(
//     50,
//     window.innerWidth / window.innerHeight,
//     5,
//     2000
//   );
//   camera.position.z = 500;

//   scene = new THREE.Scene();
//   scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

//   const geometry = new THREE.BufferGeometry();
//   const vertices = [];
//   const size = 2000;

//   for (let i = 0; i < 20000; i++) {
//     const x = (Math.random() - size + Math.random() - size) / 2 - size / 2;
//     const y = (Math.random() - size + Math.random() - size) / 2 - size / 2;
//     const z = (Math.random() - size + Math.random() - size) / 2 - size / 2;

//     vertices.push(x, y, z);
//   }

//   geometry.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3)
//   );

//   const particles = new THREE.Points(geometry, material);

//   scene.add(particles);

//   renderer = new THREE.WebGL1Renderer();

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.style.touchAction = "none";
//   document.body.appendChild(renderer.domElement);

//   document.body.addEventListener("pointermove", onPointerMove);
//   window.addEventListener("resize", onWindowSize);

//   function onWindowSize() {
//     windowHalfX = window.innerWidth / 2;
//     windowHalfY = window.innerHeight / 2;

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   }
//   const onPointerMove = (event: any) => {
//     mouseX = event.clientX - windowHalfX;
//     mouseY = event.clientY - windowHalfY;
//   };
// };
