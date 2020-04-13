import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'
import vaseSprite from './img/web.png'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // shelf
  Bodies.rectangle(
    window.innerWidth,
    window.innerHeight - (window.innerHeight * (1/2)),
    window.innerWidth * (4/7),
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // vase
  Bodies.rectangle(
    window.innerWidth - 180,
    window.innerHeight - (window.innerHeight * (1/2)) - 80,
    150,
    200,
    {
      label: "vase",
      isSticky: true,
      isAlreadyStuck: false,
      density: .003,
      render: {
        // fillStyle: "#D5D2CC" ,
        sprite: {
          texture: vaseSprite,
          xScale: 4,
          yScale: 4,
        }
      }
    }
  )
];
