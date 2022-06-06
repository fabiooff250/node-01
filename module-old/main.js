const hello = require("./hello.js");
const hello = require("./helloForName.js");
function main() {
  console.log(hello);
  const msm = hello("Fabio");
  console.log(msm);
}
main();
