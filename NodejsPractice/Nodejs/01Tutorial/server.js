// How NodeJS differs from VanillaJS
// 1) Node runs on a server - not in browser (Backend not frontend)
// 2) The console is the terminal window
console.log("Hello world");
// 3) global object instead of window object

//console.log(global);

// 4) has common core modules that we will explore
// 5) CommonJs modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add } = require("./math");

console.log(add(5, 9));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
