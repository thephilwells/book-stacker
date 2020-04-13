import Matter from "matter-js";
import {level as defaults} from './default'

const Bodies = Matter.Bodies;

export const level = [...defaults, 
  // rectangle(x, y, w, h, {opts})
  // top left
  Bodies.rectangle(
    window.innerWidth  - (window.innerWidth / 2) - (window.innerWidth / 6),
    window.innerHeight  - window.innerHeight / 2 - (window.innerHeight * (9/19)),
    window.innerWidth * (1/3) - (window.innerWidth * (1/18)),
    window.innerHeight * (1/3) - (window.innerHeight * (1/18)),
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#F8FBFF" },
      isSensor: true,
    }
  ),
  // bottom left
  Bodies.rectangle(
    window.innerWidth  - (window.innerWidth / 2) - (window.innerWidth / 6),
    window.innerHeight  - window.innerHeight / 2 - (window.innerHeight / 6),
    window.innerWidth * (1/3) -(window.innerWidth * (1/18)),
    window.innerHeight * (1/3) -(window.innerHeight * (1/18)),
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#F8FBFF" },
      isSensor: true,
    }
  ),
    // top right
  Bodies.rectangle(
    window.innerWidth  - (window.innerWidth / 2) + (window.innerWidth / 6),
    window.innerHeight  - window.innerHeight / 2 - (window.innerHeight * (9/19)),
    window.innerWidth * (1/3) -(window.innerWidth * (1/18)),
    window.innerHeight * (1/3) -(window.innerHeight * (1/18)),
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#F8FBFF" },
      isSensor: true,
    }
  ),
  // bottom right
  Bodies.rectangle(
    window.innerWidth  - (window.innerWidth / 2) + (window.innerWidth / 6),
    window.innerHeight  - window.innerHeight / 2 - (window.innerHeight / 6),
    window.innerWidth * (1/3) -(window.innerWidth * (1/18)),
    window.innerHeight * (1/3) -(window.innerHeight * (1/18)),
    {
      isStatic: true,
      label: 'wall',
      render: { fillStyle: "#F8FBFF" },
      isSensor: true,
    }
  ),
];
