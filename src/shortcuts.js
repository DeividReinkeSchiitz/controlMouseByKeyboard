import iohook from "iohook";
import robot from "robotjs";

class RegisterShortcutByKeyCode {
  constructor(keyCode) {
    this.keyCode = keyCode;
    this.registerfunctions = {};
  }

  addMoveUp = () => this.registerfunctions.addMoveup = () => {
    const pos = robot.getMousePos();
    robot.moveMouseSmooth(pos.x, pos.y - 25, 0);
  };

  addMoveDown = () => this.registerfunctions.addMoveDown = () => {
    const pos = robot.getMousePos();
    return robot.moveMouseSmooth(pos.x, pos.y + 25, 0);
  };

  addMoveLeft = () => this.registerfunctions.addMoveLeft = () => {
    const pos = robot.getMousePos();
    return robot.moveMouseSmooth(pos.x - 25, pos.y, 0);
  };

  addMoveRight = () => this.registerfunctions.addMoveRight = () => {
    const pos = robot.getMousePos();
    return robot.moveMouseSmooth(pos.x + 25, pos.y, 0);
  };

  addLeftClick = () => this.registerfunctions.addMoveDown = () => {
    robot.mouseClick();
  };

  start = () => iohook.registerShortcut(this.keyCode, () => {
    const { registerfunctions } = this;

    Object.keys(registerfunctions).map((key) => registerfunctions[key]());
  });
}

export default RegisterShortcutByKeyCode;
