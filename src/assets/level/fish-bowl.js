import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'
import fishSprite from './img/fish.png'

const Bodies = Matter.Bodies;
const Body = Matter.Body;

const fish = Bodies.rectangle(
    window.innerWidth - 180,
    window.innerHeight - (window.innerHeight * (1/2)) - 80,
    220,
    200,
    {
      label: "vase",
      density: .303,
      render: { fillStyle: "#D5D2CC" ,
      sprite: {
        texture: fishSprite,
        xScale: 3,
        yScale: 3,
      }}
    }
  )

Body.setInertia(fish, Infinity)

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // shelf
  Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (22/32)),
    window.innerWidth * (4/7),
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  fish
];
