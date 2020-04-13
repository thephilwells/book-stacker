import Matter from "matter-js";
import { scaleRatio, wallThickness } from './constants'
import {level as defaults} from './default'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // dent left
  Bodies.rectangle(
    -60,
    window.innerHeight - (window.innerHeight * (2/3)),
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
  // dent hollow left
  Bodies.rectangle(
    -115,
    window.innerHeight - (window.innerHeight * (2/3)),
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
    // dent right
  Bodies.rectangle(
    window.innerWidth + 60,
    window.innerHeight - (window.innerHeight / 6),
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
  // dent hollow right
  Bodies.rectangle(
    window.innerWidth + 115,
    window.innerHeight - (window.innerHeight / 6),
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
