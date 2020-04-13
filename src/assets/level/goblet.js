import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'

const Bodies = Matter.Bodies;
const Vertices = Matter.Vertices;

const cup = Vertices.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7')
const cupBody = Bodies.fromVertices(
    window.innerWidth / 2,
    window.innerHeight - (window.innerHeight / 6),
    cup,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" }}
  )
Matter.Body.scale(cupBody, 4, 5)
Matter.Body.rotate(cupBody, 270 * Math.PI / 180)

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // stem
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight,
    wallThickness * 2,
    window.innerHeight / 4,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // cup
  cupBody,
];
