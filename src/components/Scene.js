import React from "react";
import Matter from "matter-js";
import { Graph } from './Graph'
import { CongratsModal } from './CongratsModal'
import { Button } from './Button'

// levels
import { level as defaultLevel } from '../assets/level/default'
import { level as shelfVase } from '../assets/level/shelf-vase'
import { level as dent } from '../assets/level/dent-floor'
import { level as twindents } from '../assets/level/twin-dents'
import { level as goblet } from '../assets/level/goblet'
import { level as threeLilShelves } from '../assets/level/three-lil-shelves'
import { level as veeShelves } from '../assets/level/v-shelves'
import { level as fishbowl } from '../assets/level/fish-bowl'
import { level as globe } from '../assets/level/globe'
import { level as planter } from '../assets/level/planter'
import { level as web } from '../assets/level/web'
import { level as twinndentsJagged } from '../assets/level/twin-dents-jagged'
import { level as windowLevel } from '../assets/level/window'
import { level as threePlants } from '../assets/level/three-lil-plants'

// rules
import { stickyObjects } from './rules/stickyObjects'

import { getSizeBook, restBookSprite, dragBookSprite, affinityBookSprite } from './Book'

const levels = [
  defaultLevel, // 0
  shelfVase, // 1
  dent, // 2
  twindents, // 3
  goblet, // 4
  threeLilShelves, // 5
  veeShelves, // 6
  fishbowl, // 7
  globe, // 8
  planter, // 9
  web, // 10
  twinndentsJagged, // 11
  windowLevel, // 12
  threePlants, // 13
]

let dragging = {}
let level = 0
let firstTouch = true
let victoryTriggered = false

const gameStatus = {}
const recordTimeKey = 'book-stacker-record-time'
const recordTapsKey = 'book-stacker-record-taps'
const levelKey = 'book-stacker-level'

const beginAffinity = (bookA, bookB) => {
  const affinityStateA = dragging === bookA ? dragBookSprite(bookA) : affinityBookSprite(bookA)
  bookA.render.sprite.texture = affinityStateA.texture
  bookA.render.sprite.xScale = affinityStateA.xScale
  bookA.render.sprite.yScale = affinityStateA.yScale

  const affinityStateB = dragging === bookB ? dragBookSprite(bookB) : affinityBookSprite(bookB)
  bookB.render.sprite.texture = affinityStateB.texture
  bookB.render.sprite.xScale = affinityStateB.xScale
  bookB.render.sprite.yScale = affinityStateB.yScale

  gameStatus[bookA.render.color].pairs.add(`${bookA.id}-${bookB.id}`)
  gameStatus[bookA.render.color].booksInAffinity.add(bookA.id)
  gameStatus[bookB.render.color].booksInAffinity.add(bookB.id)
}

const endAffinity = (bookA, bookB) => {
  const affinityStateA = dragging === bookA ? dragBookSprite(bookA) : restBookSprite(bookA)
  bookA.render.sprite.texture = affinityStateA.texture
  bookA.render.sprite.xScale = affinityStateA.xScale
  bookA.render.sprite.yScale = affinityStateA.yScale

  const affinityStateB = dragging === bookB ? dragBookSprite(bookB) : restBookSprite(bookB)
  bookB.render.sprite.texture = affinityStateB.texture
  bookB.render.sprite.xScale = affinityStateB.xScale
  bookB.render.sprite.yScale = affinityStateB.yScale

  gameStatus[bookA.render.color].pairs.delete(`${bookA.id}-${bookB.id}`)
  gameStatus[bookA.render.color].booksInAffinity.delete(bookA.id)
  gameStatus[bookB.render.color].booksInAffinity.delete(bookB.id)
}

const affinityCondition = (bookA, bookB) => {
  if (bookA.label === 'book' && bookB.label === 'book') {
    return bookA.render.fillStyle === bookB.render.fillStyle
  }
}

const victoryCondition = () => {
  const sets = []
  let result

  // First, how many books of all colors are in affinity
  for (const color in gameStatus) {
    if (gameStatus[color]) {
      sets.push(gameStatus[color].amountOfBooksInColor === gameStatus[color].booksInAffinity.size)
    }
  }

  // for each color...
  for (const color in gameStatus) {
    // if all books of this color are in affinity...
    if (gameStatus[color].booksInAffinity.values().next().value && sets.every(s => s === true)) {
      // ...let's build a graph of all books of this color, with each book as a node
      const colorGraph = new Graph(gameStatus[color].booksInAffinity.size)
      // for each book in this graph...
      gameStatus[color].booksInAffinity.forEach(book => {
        colorGraph.addVertex(book)
      })
      // ...find and map every book in affinity with this book
      gameStatus[color].pairs.forEach(pair => {
        const [bookA, bookB] = pair.split('-')
        colorGraph.addEdge(bookA, bookB)
      })
      // does the number of books touching the first book of this color equal the total number of books of this color?
      // if yes, then there is only one cluster of books of this color!
      result = colorGraph.dfs(gameStatus[color].booksInAffinity.values().next().value).size === gameStatus[color].booksInAffinity.size
      if (result === false) return result
    }
  }
  return result || window.cheat
}

const checkGameDate = () => {
  const oldLevel = parseInt(window.localStorage.getItem(levelKey)) || 0
  const today = new Date().toDateString()
  const storedDate = window.localStorage.getItem('booksDate')
  if (storedDate === null) {
    window.localStorage.setItem('booksDate', today)
    window.localStorage.removeItem(recordTimeKey)
    window.localStorage.removeItem(recordTapsKey)
    level = 0
    return true
  }
  if (storedDate !== today) {
    window.localStorage.setItem('booksDate', today)
    window.localStorage.removeItem(recordTimeKey)
    window.localStorage.removeItem(recordTapsKey)
    if (oldLevel !== null && parseInt(oldLevel) < levels.length - 1) {
      level = parseInt(oldLevel) + 1
    } else {
      level = 0
    }
  } else {
    level = parseInt(oldLevel)
  }
  window.localStorage.setItem(levelKey, level)
  return false
}

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taps: 0,
      startTime: new Date(),
      endTime: 99999999,
      victory: false,
      tapsRecord: 0,
      timeRecord: 0,
      newDay: false
    }
  }

  componentDidMount() {
  var concierge = document.querySelector('#concierge');

  var takeOverScroll = function() {
    if (window.scrollY > 15) {
      setTimeout(function () {
        concierge.style.display = 'none';
        window.HAS_EVER_STARTED = true;
      }, 100)
    }
  };
  concierge.addEventListener('touchend', takeOverScroll);
    this.setState({tapsRecord: window.localStorage.getItem(recordTapsKey)})
    this.setState({timeRecord: window.localStorage.getItem(recordTimeKey)})
    this.setState({newDay: checkGameDate()})

    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Events = Matter.Events,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint;

    const headerHeight = 99

    var engine = Engine.create({
      // options
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight - headerHeight,
        wireframes: false,
        background: "#FFE0CA"
      }
    });

    const numberOfAverageBooks = 15;
    const numberOfBigBooks = 5;
    const numberOfSmallBooks = 5;
    const sumOfAllBooks = numberOfAverageBooks
     + numberOfBigBooks + numberOfSmallBooks
    const books = [];

    // add cursor spotlight to world
    const spotlight = Bodies.circle(0, 0, window.innerWidth / 6, {
      isStatic: true,
      collisionFilter: 0,
      render: { fillStyle: '"#FFE0CA"'}
    })

    World.add(engine.world, spotlight)

    // Add walls to world
    // World.add(engine.world, levels[level])
    World.add(engine.world, levels[10])

    /*
const levels = [
  defaultLevel, // 0
  shelfVase, // 1
  dent, // 2
  twindents, // 3
  goblet, // 4
  threeLilShelves, // 5
  veeShelves, // 6
  fishbowl, // 7
  globe, // 8
  planter, // 9
  web, // 10
  twinndentsJagged, // 11
  windowLevel, // 12
  threePlants, // 13
]
    */

    // pool of average sized books
    for (let i = 0; i < numberOfAverageBooks; i++) {
      books.push(getSizeBook('medium'));
    }

    // pool of big books
    for (let i = 0; i < numberOfBigBooks; i++) {
      books.push(getSizeBook('large'))
    }

    // pool of small books
    for (let i = 0; i < numberOfSmallBooks; i++) {
      books.push(getSizeBook('small'))
    }

    books.forEach(book => {
      if (gameStatus[book.render.color] === undefined) {
        gameStatus[book.render.color] = {
          amountOfBooksInColor: 1,
          booksInAffinity: new Set(),
          pairs: new Set(),
        }

      } else {
          gameStatus[book.render.color].amountOfBooksInColor += 1
        }
    })
    const shuffledBooks = books.sort(() => Math.random() - 0.5)

    // Add books to world
    for (let i = 0; i < sumOfAllBooks; i++) {
      setTimeout(function() {
        World.add(engine.world, shuffledBooks[i]);
      }, i * 45);
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Events.on(engine, 'collisionActive', (event) => {
      const pairs = event.pairs
      for (let i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (affinityCondition(pair.bodyA, pair.bodyB)) {
          beginAffinity(pair.bodyA, pair.bodyB)
        }

        // sticky objects
        stickyObjects(pair, World, Constraint, engine)
      }
      if(this.state.victory === true && victoryTriggered === false) {
        victoryTriggered = true
        this.setState({victory: true, endTime: new Date()})
      }
    })

    Events.on(engine, 'collisionEnd', (event) => {
      const pairs = event.pairs
      for (let i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (affinityCondition(pair.bodyA, pair.bodyB)) {
          endAffinity(pair.bodyA, pair.bodyB)
        }
      }
    })

    Events.on(mouseConstraint, 'mousedown', () => {
      spotlight.render.fillStyle = '#ffffff'
    })

    Events.on(mouseConstraint, 'mousemove', () => {
      spotlight.position.x = mouse.position.x
      spotlight.position.y = mouse.position.y
    })

    Events.on(mouseConstraint, 'mouseup', () => {
      spotlight.render.fillStyle = '##FFE0CA'
    })

    Events.on(mouseConstraint, "startdrag", (event) => {
      // collapse the stack
      if (firstTouch) {
        engine.world.bodies.forEach(body => {
          if (body.label === 'book' && firstTouch === true) {
            Body.setInertia(body, body.previousInertia)
          }
        })
      }
      firstTouch = false

      // dragging book state
      dragging = event.body // copy to global for affinity states
      if (event.body.label === 'book') {
        let texture, xScale, yScale
        ({texture,xScale,yScale} = dragBookSprite(event.body))
        event.body.render.sprite.texture = texture
        event.body.render.sprite.xScale = xScale
        event.body.render.sprite.yScale = yScale
      }
    })

    Events.on(mouseConstraint, "enddrag", (event) => {
      // remove dragging sprite/state
      dragging = {}
      this.setState(prevState => ({taps: prevState.taps + 1}))
      event.body.collisionFilter.category = 1
      if (event.body.label === 'book') {
        let texture, xScale, yScale
        ({texture,xScale,yScale} = restBookSprite(event.body))
        event.body.render.sprite.texture = texture
        event.body.render.sprite.xScale = xScale
        event.body.render.sprite.yScale = yScale
      }
    })

    World.add(engine.world, mouseConstraint);
    Engine.run(engine);
    Render.run(render);
    Runner.create()

    setInterval(function(self) {
      Engine.update(engine, 1000 / 60);
      // victory sequence
      if(victoryCondition() && victoryTriggered === false) {
        self.setState({victory: true})
        document.querySelector('#concierge').style.display = 'none'
        const modal = document.getElementById('congrats-modal')
        modal.style.display = 'flex'
        document.querySelector('main').classList.toggle('obscured')
      }
      // respawn glitched books
      engine.world.bodies.forEach(body => {
        if (body.label !== 'wall') {
          const y = body.position.y
          if (y > window.innerHeight + 500 || y < -10000) {
            Matter.Body.translate(body, { x: (window.innerWidth / 2) - body.position.x, y: -500 - body.position.y})
          }
        }
      })
    }, 1000 / 60, this);
  }

  render() {
    return (
      <div>
        <header>
        <h1>Books</h1>
        <div className='buttons'>
          <Button text='?' action='help' />
          <Button text='&#9851;' action='reset' />
        </div>
      </header>
        <div id="scene-area" ref="scene">
          <CongratsModal
            taps={this.state.taps}
            time={this.state.endTime - this.state.startTime}
            victory={this.state.victory}
            tapsRecord={this.state.tapsRecord}
            timeRecord={this.state.timeRecord}
            newDay={this.state.newDay}
          />
        </div>
      </div>
    )
  }

}
export default Scene;
