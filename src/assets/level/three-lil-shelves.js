import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (2/3)),
    window.innerHeight - (window.innerHeight * (2/3)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
    // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/2)),
    window.innerHeight - (window.innerHeight * (1/3)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
    // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/3)),
    window.innerHeight - (window.innerHeight * (1/2)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
];
