import Matter from "matter-js";
import { scaleRatio, wallThickness } from './constants'
import {level as defaults} from './default'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // dent
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight,
    wallThickness * 10,
    wallThickness * 10,
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#D5D2CC" },
      chamfer: {radius: 3 * scaleRatio},
      angle: Math.PI / 4
    }
  ),
  // dent hollow
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + wallThickness + 15,
    wallThickness * 10,
    wallThickness * 10,
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#FFE0CA" },
      chamfer: {radius: 3 * scaleRatio},
      angle: Math.PI / 4
    }
  ),
];
