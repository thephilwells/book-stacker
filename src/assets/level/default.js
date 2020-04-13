import Matter from "matter-js";
import { headerHeight, wallThickness } from './constants'

import yellowSpineRest from '../book/flat/yellow-flat.png'
import redSpineRest from '../book/flat/red-flat.png'
import brownSpineRest from '../book/flat/brown-flat.png'
import blueSpineRest from '../book/flat/blue-flat.png'
import blackSpineRest from '../book/flat/black-flat.png'

const Bodies = Matter.Bodies;

const restBookXScale = 22.64
const restBookYScale = 105.66

export const level = [
  // rectangle(x, y, w, h, {opts})

  // floor
  Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - (headerHeight + wallThickness / 2),
    window.innerWidth,
    wallThickness,
    { isStatic: true, label: "wall", friction: 0.2, render: { fillStyle: "#D5D2CC" } }
  ),
  // right wall
  Bodies.rectangle(
    window.innerWidth - wallThickness / 2 - 25,
    window.innerHeight / 2 + (window.innerHeight * (1/8)),
    wallThickness,
    window.innerHeight - (window.innerHeight * (1/8)),
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  // left wall
  Bodies.rectangle(
    wallThickness / 2 + 25,
    window.innerHeight / 2 + (window.innerHeight * (1/8)),
    wallThickness,
    window.innerHeight - (window.innerHeight * (1/8)),
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),

  // shelves
  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (3/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  Bodies.rectangle(
    window.innerWidth - wallThickness / 2,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (3/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),

  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (7/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  Bodies.rectangle(
    window.innerWidth - wallThickness / 2,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (7/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),

  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (11/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),
  Bodies.rectangle(
    window.innerWidth - wallThickness / 2,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (11/16)) + (wallThickness / 2),
    50,
    wallThickness,
    { isStatic: true, label: "wall", render: { fillStyle: "#D5D2CC" } }
  ),

  // // books
  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (11/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: yellowSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (19/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: redSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
  Bodies.rectangle(
    0,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (26.5/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: brownSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
  Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (11/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: blackSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
  Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (19/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: blueSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
  Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2 - (window.innerHeight / 2) + (window.innerHeight * (26.5/32)),
    50,
    window.innerHeight * (3/16),
    { isStatic: true, label: "wall", render: {opacity: .5, sprite: {texture: redSpineRest, xScale: 50/restBookXScale, yScale: window.innerHeight * (3/16) / restBookYScale}}}
  ),
];
