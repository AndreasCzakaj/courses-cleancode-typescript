import {Position, Vector} from "@src/examples/oop/robot/shared";

interface Automaton {
  move(v: Vector, movementListener: MovementListener): void

  startup(): void

  shutdown(): void

  //findSarahConnor()
}

class MovementListener {
  onCompleted(newPosition: Position) {}
}


class Robot implements Automaton {
  constructor(private initialPosition: Position ) {
    this.currentPosition = initialPosition
  }

  private currentPosition: Position
  private started = false
  private battery = 0

  move(v: Vector, movementListener: MovementListener): void {
    this.currentPosition.x += v.x
    this.currentPosition.y += v.y
    this.currentPosition.z += v.z

    movementListener.onCompleted(this.currentPosition)
  }

  startup(): void {
    if (this.battery > 3500) {
      this.started = true
    }
  }

  shutdown(): void {
    this.started = false
  }
}

class Drone implements Automaton {
  constructor(private initialPosition: Position ) {
  }


  move(v: Vector, movementListener: MovementListener): void {
  }

  startup(): void {
  }

  shutdown(): void {
  }
}

/*class Staubsauger implements Automaton {
  constructor(private initialPosition: Position ) {
  }


  move(v: Vector, movementListener: MovementListener): void {
  }

  startup(): void {
  }

  shutdown(): void {
  }
}*/

class Client1 {
  constructor(private automaton: Automaton) {
  }

  doStuff() {
    const automaton = this.automaton

    // This works for all implementations
    // Adding a new Automaton implementation is non-breaking (Staubsauger)
    automaton.startup()
    automaton.move(
      {x: 2, y: 7, z: 1},
      {onCompleted(newPosition: Position) {
        console.log("I liked to move it, move it")
      }}
  )
    automaton.shutdown()

    // But adding a new method to the interface
    // will break all existing impl classes (find Sarah Connor)
  }
}

