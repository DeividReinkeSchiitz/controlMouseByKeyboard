const fs = require("fs");
const path = require("path");

(function openAnyFile() {
  const rota = path.join(
    __dirname.slice(0, __dirname.indexOf() - 6),
    "src",
    "start.bat"
  );
  var space =
    "                                                                            ";
  const textVbs =
    `Set WshShell = CreateObject("WScript.Shell")${space}\n` +
    `WshShell.Run chr(34) & "${rota}" & Chr(34), 0${space}\n` +
    `Set WshShell = Nothing ${space}\n`;

  fs.writeFileSync("finished.vbs", textVbs);
})();

require("child_process").exec("cmd /c finished.vbs", () => {});
