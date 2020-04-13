import Matter from "matter-js";

import yellowSpineRest from '../assets/book/rest/yellow-rest.png'
import redSpineRest from '../assets/book/rest/red-rest.png'
import brownSpineRest from '../assets/book/rest/brown-rest.png'
import blueSpineRest from '../assets/book/rest/blue-rest.png'
import blackSpineRest from '../assets/book/rest/black-rest.png'

import yellowSpineDrag from '../assets/book/drag/yellow-drag.png'
import redSpineDrag from '../assets/book/drag/red-drag.png'
import brownSpineDrag from '../assets/book/drag/brown-drag.png'
import blueSpineDrag from '../assets/book/drag/blue-drag.png'
import blackSpineDrag from '../assets/book/drag/black-drag.png'

import yellowSpineTouch from '../assets/book/touch/yellow-touch.png'
import redSpineTouch from '../assets/book/touch/red-touch.png'
import brownSpineTouch from '../assets/book/touch/brown-touch.png'
import blueSpineTouch from '../assets/book/touch/blue-touch.png'
import blackSpineTouch from '../assets/book/touch/black-touch.png'

const bookImages = {
  yellow: { rest: yellowSpineRest, drag: yellowSpineDrag, touch: yellowSpineTouch },
  red: { rest: redSpineRest, drag: redSpineDrag, touch: redSpineTouch },
  brown: { rest: brownSpineRest, drag: brownSpineDrag, touch: brownSpineTouch },
  blue: { rest: blueSpineRest, drag: blueSpineDrag, touch: blueSpineTouch },
  black: { rest: blackSpineRest, drag: blackSpineDrag, touch: blackSpineTouch }
}

const Bodies = Matter.Bodies
const Body = Matter.Body

let startingBookWidth
let bookHeightMultiplier
let startingBookHeight
let bookWidthMultiplier
const dropX = window.innerWidth / 2;
const dropY = window.innerHeight * (2/3);

const restBookXScale = 29
const restBookYScale = 105.66

const palette = ['#F5CC3D', '#D1AA6E', '#FD7442', '#85B4FA', '#232831']

export const getSizeBook = (size) => {
  let h, w
  const devicePixelRatio = window.devicePixelRatio
  const scaleRatio = devicePixelRatio / 4
  switch (size) {
    case 'small':
      startingBookWidth = 60;
      bookHeightMultiplier = 70;
      startingBookHeight = 150;
      bookWidthMultiplier = 40;
      break
    case 'large':
      startingBookWidth = 80;
      bookHeightMultiplier = 70;
      startingBookHeight = 240;
      bookWidthMultiplier = 60;
      break
    case 'medium':
    default:
      startingBookWidth = 60;
      bookHeightMultiplier = 70;
      startingBookHeight = 240;
      bookWidthMultiplier = 20;
      break
    }
  h = (startingBookHeight + (Math.floor((0.5 + Math.random() * bookHeightMultiplier))) * scaleRatio)
  w = (startingBookWidth + (Math.floor((0.5 + Math.random()* bookWidthMultiplier))) * scaleRatio)
  const book = Bodies.rectangle(dropX, dropY, w, h, {
    label: 'book',
    chamfer: {radius: 3 * scaleRatio},
    render: {
      w,
      h,
      strokeStyle: 'black',
      sprite: {
        xScale: w/restBookXScale,
        yScale: h/restBookYScale,
      }
    }
  })
  const styledBook = styleBook(book)
  if (Math.floor(Math.random() * 2)) {
    Body.setAngle(styledBook, 90 * Math.PI / 180)
  }
  styledBook.previousInertia = styledBook.inertia
  Body.setInertia(styledBook, Infinity)
  return styledBook
}

const styleBook = (book, state = 'rest') => {
  book.render.fillStyle = palette.shift()
  palette.push(book.render.fillStyle)
  const colorName = getColorName(book.render.fillStyle)
  book.render.color = getColorName(book.render.fillStyle)
  book.render.sprite.texture = bookImages[colorName][state]
  return book
}

export const restBookSprite = (book) => {
  const colorName = getColorName(book.render.fillStyle)
  return {
    texture:bookImages[colorName]['rest'],
    xScale: book.render.w/restBookXScale,
    yScale: book.render.h/restBookYScale,
  }
}

export const dragBookSprite = (book) => {
  const colorName = getColorName(book.render.fillStyle)
  return {
    texture:bookImages[colorName]['drag'],
    xScale: book.render.w/restBookXScale,
    yScale: book.render.h/restBookYScale,
  }
}

export const affinityBookSprite = (book) => {
    const colorName = getColorName(book.render.fillStyle)
  return {
    texture:bookImages[colorName]['touch'],
    xScale: book.render.w/restBookXScale,
    yScale: book.render.h/restBookYScale,
  }
}

const getColorName = (fillStyle) => {
  switch (fillStyle) {
    case '#F5CC3D':
      return 'yellow'
    case '#D1AA6E':
      return 'brown'
    case '#FD7442':
      return 'red'
    case '#232831':
      return 'black'
    case '#85B4FA':
    default:
      return 'blue'
  }
}
