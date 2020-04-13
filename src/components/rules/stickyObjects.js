export const stickyObjects = (pair, World, Constraint, engine) => {
          if ((pair.bodyA.label === 'book' && pair.bodyB.isSticky) || (pair.bodyB.label === 'book' && pair.bodyA.isSticky)) {
          if (pair.bodyA.isSticky && !pair.bodyA.isAlreadyStuck) {
            pair.bodyA.isAlreadyStuck = true
            World.add(engine.world, Constraint.create({
              bodyA: pair.bodyA,
              bodyB: pair.bodyB,
              damping: .9,
              stiffness: .1,
              render: { visible: true }
            }))
          }
          if (pair.bodyB.isSticky && !pair.bodyB.isAlreadyStuck) {
            pair.bodyB.isAlreadyStuck = true
            World.add(engine.world, Constraint.create({
              bodyA: pair.bodyA,
              bodyB: pair.bodyB,
              damping: .9,
              stiffness: .1,
              render: { visible: true }
            }))
          }
        }
}
