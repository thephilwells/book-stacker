import Matter from "matter-js";
import { headerHeight, wallThickness } from './constants'

const Bodies = Matter.Bodies;
const Body = Matter.Body;

const v1 = Body.create({
    parts: [
      Bodies.rectangle(0, 0, wallThickness * 5, wallThickness, { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }),
      Bodies.rectangle(0, 0, wallThickness, wallThickness * 5, { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }),
    ]
  })

const v2 = Body.create({
    parts: [
      Bodies.rectangle(0, 0, wallThickness * 5, wallThickness, { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }),
      Bodies.rectangle(0, 0, wallThickness, wallThickness * 5, { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }),
    ]
  })

Body.setStatic(v1, true)
v2.position.x = window.innerWidth - (window.innerWidth * (1/3))
v1.position.y = window.innerHeight - (window.innerHeight * (2/3))

Body.setStatic(v2, true)
v2.position.x = window.innerWidth - (window.innerWidth * (1))
v2.position.y = window.innerHeight - (window.innerHeight * (1))

export const level = [
  // rectangle(x, y, w, h, {opts})
  // lid
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 10000,
    window.innerWidth,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // floor
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - (headerHeight + wallThickness / 2),
    window.innerWidth,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // right wall
  Bodies.rectangle(
    window.innerWidth - wallThickness / 2,
    window.innerHeight / 2,
    wallThickness,
    window.innerHeight + 5000,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // left wall
  Bodies.rectangle(
    wallThickness / 2,
    window.innerHeight / 2,
    wallThickness,
    window.innerHeight + 5000,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (3/4) + wallThickness * .5),
    window.innerHeight - (window.innerHeight * (1/2) - wallThickness * 2.5),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" }, angle: Math.PI / 4}
  ),
    Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (3/4) - wallThickness),
    window.innerHeight - (window.innerHeight * (1/2)  - wallThickness * 2.5),
    wallThickness,
    wallThickness * 3,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" }, angle: Math.PI / 4 }
  ),
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/4) + wallThickness * .5),
    window.innerHeight - (window.innerHeight * (3/4) - wallThickness * 2.5),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" }, angle: Math.PI / 4}
  ),
    Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/4) - wallThickness),
    window.innerHeight - (window.innerHeight * (3/4)  - wallThickness * 2.5),
    wallThickness,
    wallThickness * 3,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" }, angle: Math.PI / 4 }
  ),
];
