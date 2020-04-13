import Matter from "matter-js";
import { wallThickness } from './constants'
import {level as defaults} from './default'
import globeStandSprite from './img/globe-stand.png'
import globePlanetSprite from './img/globe-planet.png'

const Bodies = Matter.Bodies;

const globeStand = Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (2/3)),
    window.innerHeight - (window.innerHeight * (1/2)) - 55,
    wallThickness * 3,
    wallThickness * (3/2),
    {
      isStatic: true,
      label: "vase",
      density: .303,
      render: { fillStyle: "#D5D2CC" ,
      sprite: {
        texture: globeStandSprite,
        xScale: 3,
        yScale: 3,
        yOffset: .35,
        xOffset: .05
      }}
    }
  )

  const globePlanet = Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (2/3)),
    window.innerHeight - (window.innerHeight * (1/2)) - 125,
    180,
    180,
    {
      label: "vase",
      density: .003,
      render: { fillStyle: "#D5D2CC" ,
      sprite: {
        texture: globePlanetSprite,
        xScale: 3,
        yScale: 3,
      }}
    }
  )

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // shelf
  Bodies.rectangle(
    window.innerWidth - (window.innerWidth * (2/3)),
    window.innerHeight - (window.innerHeight * (1/2)),
    wallThickness * 3,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  globeStand,
  globePlanet
];
