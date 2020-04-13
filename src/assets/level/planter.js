import Matter from "matter-js";
import {level as defaults} from './default'
import planterSprite from './img/planter.png'

const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var body = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight * (1/5),
  window.innerWidth * (1/5),
  window.innerHeight * (1/5),
  {
    label: 'plant',
    render: {
      sprite: {
        texture: planterSprite,
        xScale: 3,
        yScale: 3,
        yOffset: .35
      }
    }
  }
);

Body.setInertia(body, Infinity)

var constraint = Constraint.create({
    pointA: { x: window.innerWidth / 2, y: 99 },
    bodyB: body,
    pointB: { x: -10, y: -75 },
    stiffness: 0.001,
    render: {
      visible: false
    }
});

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  body,
  constraint
];
