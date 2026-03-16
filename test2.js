// Q1
let path2 = () => {
  console.log("filename: ", __filename);
  console.log("dirname: ", __dirname);
};

path2();

// // Q2
let filePath = __filename;

let getFileName = (x) => {
  return x.split("\\").pop();
};

console.log(getFileName(filePath));

// Q3

let input = { dir: "/folder", name: "app", ext: ".js" };

let collect = (y) => {
  return y.dir + "/" + y.name + y.ext;
};

console.log(collect(input));

// Q4

let file = __filename;

console.log(file);

let cut = (r) => {
  return r.split(".").pop();
};

console.log(cut(file));

// Q5

let ex = __filename;

let NameEXT = (q) => {
  let file = q.split("\\").pop(); // test.js
  let name = file.split(".")[0]; // test
  let ext = file.split(".")[1]; // .js

  return { name: name, EXT: ext };
};

console.log(NameEXT(ex));

// Q6

function isAbsolutePath(path) {
  return path[0] === "/";
}

console.log(isAbsolutePath("/assignment2/test2.js"));

// Q7

function joiin(...i) {
  return i.join("/");
}

console.log(joiin("src", "components", "App.js"));

// Q8///////////////

const path = require("path");

function resolveToAbsolute(relativePath) {
  return path.resolve(relativePath);
}

console.log(resolveToAbsolute("folder/file.txt"));

// Q9

function joiin2(...t) {
  return t.join("/");
}

console.log(joiin2("/folder1", "folder2/file.txt"));

// Q10
const fs = require("fs");

let ppath = "./assignment2/test.txt";

function deletepath(path) {
  fs.unlink(path, () => {
    console.log("the file path was deleted", path.split("/").pop());
  });
}

deletepath(ppath);

// // Q11

function createFolder(n) {
  try {
    fs.mkdirSync(n);
    console.log("success");
  } catch (err) {
    console.log("the folder is exist");
  }
}

createFolder("./newFolder");

// // Q12

let { EventEmitter } = require("events");
let event = new EventEmitter();

event.on("start", () => {
  console.log("Welcome event triggered!");
});

event.emit("start");

// Q13
// const EventEmitter = require("events");
// const { unlink } = require("fs");
// const eventEmitter = new EventEmitter();

event.on("login", (username) => {
  console.log("user logged in :", username);
});

event.emit("login", "youssef");
// // Q14
let content = fs.readFileSync("./test.txt", "utf-8");

console.log(content);

// // Q15
content = "Async save";

let writeS = fs.writeFileSync("./test.txt", content, "utf-8");

console.log("The content was written successfully");

// Q16

if (fs.existsSync(__filename) && fs.statSync(__dirname).isDirectory()) {
  console.log(true);
} else {
  console.log(false);
}

// // Q17

let os = require("os");

function GetInfoOfLap() {
  console.log(os.arch(), os.platform());
}
GetInfoOfLap();
