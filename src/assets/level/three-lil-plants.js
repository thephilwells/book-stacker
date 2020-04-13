import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'
import fernSprite from './img/fern.png'
import cactusSprite from './img/cactus.png'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (5/6)),
    window.innerHeight - (window.innerHeight * (2/3)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
    // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/2)),
    window.innerHeight - (window.innerHeight * (2/3)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
    // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/6)),
    window.innerHeight - (window.innerHeight * (2/3)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // fern
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (5/6)),
    window.innerHeight - (window.innerHeight * (5/6)),
    50*3,
    75*3,
    {
      label: "fern",
      density: .003,
      render: {
        fillStyle: "#D5D2CC" ,
        sprite: {
          texture: fernSprite,
          xScale: 3,
          yScale: 3,
        }
      }
    }
  ),
  // cactus
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/2)),
    window.innerHeight - (window.innerHeight * (5/6)),
    50*3,
    90*3,
    {
      label: "fern",
      density: .003,
      render: {
        fillStyle: "#D5D2CC" ,
        sprite: {
          texture: cactusSprite,
          xScale: 3,
          yScale: 3,
        }
      }
    }
  ),
  // fern
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (1/6)),
    window.innerHeight - (window.innerHeight * (5/6)),
    50*3,
    75*3,
    {
      label: "fern",
      density: .003,
      render: {
        fillStyle: "#D5D2CC" ,
        sprite: {
          texture: fernSprite,
          xScale: 3,
          yScale: 3,
        }
      }
    }
  ),
];
