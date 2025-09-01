import {Position} from "@src/examples/oop/robot/shared";
import {au} from "vitest/dist/chunks/reporters.nr4dxCkA";


interface AutomatonDto {
  started: boolean
  currentPosition?: Position
  battery: number
}

abstract class AutomatonDtoBase implements AutomatonDto{
  started = false
  currentPosition?: Position = undefined
  battery: number = 0
}

class RobotDto extends AutomatonDtoBase {

}
class DroneDto extends AutomatonDtoBase {
  cameraStream: any = undefined
}

/*class StaubsaugerDto extends AutomatonDtoBase {

}*/

class Controller {
  constructor(private automaton: AutomatonDto) {}

  start() {
    const automaton = this.automaton
    if (!automaton.started) {
      if (automaton instanceof DroneDto) {
        if (automaton.battery  > 4500) {
          automaton.cameraStream = []
          automaton.started = true
        }
      }

      if (automaton instanceof RobotDto) {
        if (automaton.battery  > 3500) {
          automaton.started = true
        }
      }

      // Adding a new Dto class will require to add another case
      // to do_it_procedurally and all the other functions (Stabsauger)
      // => just like the car type disaster
    }
  }

  move() {
    const automaton = this.automaton
    if (!automaton.started) {
      if (automaton instanceof DroneDto) {

      }

      if (automaton instanceof RobotDto) {

      }
    }
  }

  // It's easy to add this new function... or find Sarah Connor
  findSarahConnor() {
    const automaton = this.automaton
    if (automaton instanceof RobotDto) {

    }

  }
}
