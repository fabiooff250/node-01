//import * as hola from "./hello.js";
import hello from "./hello.js";
//import  { helloForName as holaNombre } from "./helloForName.js";
import { helloForName } from "./helloForName.js";

function main() {
  console.log(hello);
  const msm = holaNombre("Fabio");
  console.log(msm);
}
main();
