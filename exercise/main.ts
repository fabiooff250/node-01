import createClub from "./create";
import {findAll} from "./search";

const main = (): any => {
const msm = createClub(3, 'boca jrs')
createClub(4, 'independiente')
console.log(msm);
const res = findAll();
console.log(res)
}
main();