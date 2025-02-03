// import { Canvas, useFrame } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import './cube.scss'

// // Composant du cube avec rotation
// function BlackCube({ position, id, onClick }) {
//   const cubeRef = useRef();

//   // Animation : faire tourner le cube
//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.y += 0.01;
//       cubeRef.current.rotation.x += 0.01;
//     }
//   });

//   return (
//     <mesh ref={cubeRef} position={position} onClick={onClick}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="black" />
//     </mesh>
//   );
// }

// export default function CubeScene() {
//   const navigate = useNavigate(); // Hook pour la navigation

//   // Fonction de redirection
//   const handleClick = (id) => {
//     navigate(`/projet/${id}`); // Redirige vers /projet/{id}
//   };

//   return (
//     <div className="canvas-cube" id="canvas-cube">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />

//         {/* Ajouter plusieurs cubes avec rotation */}
//         <BlackCube position={[-2, 0, 0]} id={1} onClick={() => handleClick(1)} />
//         <BlackCube position={[0, 2, 0]} id={2} onClick={() => handleClick(2)} />
//         <BlackCube position={[2, 0, 0]} id={3} onClick={() => handleClick(3)} />
//         <BlackCube position={[0, -2, 0]} id={4} onClick={() => handleClick(4)} />

//         {/* <OrbitControls /> */}
//       </Canvas>
//     </div>

//   );
// }
