// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./index.scss";

// function Cercle() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".circle", {
//       width: 1000,
//       height: 1000,
//       duration : 2,
//       scrollTrigger: {
//         trigger: ".circle",
//         toggleActions: "restart reverse play reverse",
//         start: "top 40%", // Commence l'animation lorsque le cercle est à 40% du viewport
//         end: "bottom 30%", // Finit l'animation lorsque le bas du cercle est à 30% du viewport
//         markers: true, // Affiche des marqueurs pour déboguer
//         scrub : true,
//       },
//     });
//   }, []);

//   return (
//     <div className="container">
//       <div className="circle"></div>
//     </div>
//   );
// }

// export default Cercle;
