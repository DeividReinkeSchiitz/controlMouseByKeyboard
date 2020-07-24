import iohook from "iohook";
import RegisterShortcutByKeyCode from "./shortcuts.js";
import keys from "./keys.js";

const {
  ControlLeft, AltLeft, NumLock1, NumLock2, NumLock3, NumLock4, NumLock5, NumLock6, NumLock7, NumLock8, NumLock9,
} = keys;

const constantKey = [ControlLeft, AltLeft];
const leftDownKeys = [...constantKey, NumLock1];
const downKeys = [...constantKey, NumLock2];
const rightDownKeys = [...constantKey, NumLock3];
const leftKeys = [...constantKey, NumLock4];
const leftMouseClick = [...constantKey, NumLock5];
const rightKeys = [...constantKey, NumLock6];
const leftUpKeys = [...constantKey, NumLock7];
const upKeys = [...constantKey, NumLock8];
const rightUpKeys = [...constantKey, NumLock9];

const numlock1 = new RegisterShortcutByKeyCode(leftDownKeys);
const numlock2 = new RegisterShortcutByKeyCode(downKeys);
const numlock3 = new RegisterShortcutByKeyCode(rightDownKeys);
const numlock4 = new RegisterShortcutByKeyCode(leftKeys);
const numlock5 = new RegisterShortcutByKeyCode(leftMouseClick);
const numlock6 = new RegisterShortcutByKeyCode(rightKeys);
const numlock7 = new RegisterShortcutByKeyCode(leftUpKeys);
const numlock8 = new RegisterShortcutByKeyCode(upKeys);
const numlock9 = new RegisterShortcutByKeyCode(rightUpKeys);

numlock1.addMoveDown();
numlock1.addMoveLeft();

numlock2.addMoveDown();

numlock3.addMoveDown();
numlock3.addMoveRight();

numlock4.addMoveLeft();

numlock5.addLeftClick();

numlock6.addMoveRight();

numlock7.addMoveUp();
numlock7.addMoveLeft();

numlock8.addMoveUp();

numlock9.addMoveUp();
numlock9.addMoveRight();

numlock1.start();
numlock2.start();
numlock3.start();
numlock4.start();
numlock5.start();
numlock6.start();
numlock7.start();
numlock8.start();
numlock9.start();

//     see another keys with thi code:        //
/* iohook.on("keydown", (event) => {
  let rawCode = event.keycode;
  let letra = String.fromCharCode(rawCode);

  console.log(letra, rawCode);
}); */

iohook.start();
