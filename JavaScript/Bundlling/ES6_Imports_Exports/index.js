import { named_exp,named_exp2 } from "./named_export.js";
console.log(named_exp +" "+ named_exp2)
//we can use multiple exports in named exports ( we can explort funtoins as well with names)
//----------------------------------

//if we dont use curly braces it uses default export

import default_exp from "./default_export.js"
console.log(default_exp)

import default_exp2,{named} from "./both._export.js"

console.log(default_exp2+" " +named)