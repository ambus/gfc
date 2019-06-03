import { src, series, dest } from "gulp";
import { execFile } from "child_process";
var del = require("del");
const chmod = require("gulp-chmod");
var replace = require("gulp-replace");
var header = require("gulp-header");

function release() {
  return execFile("./node_modules/.bin/standard-version");
}
function cleanDistDirectory() {
  return del("./dist/**/*");
}

function build() {
  return execFile("./node_modules/.bin/webpack");
}

function copyPackageFileToDistPath() {
  return src("./package.json").pipe(dest("./dist"));
}

function copyReadmeFileToDistPath() {
  return src("./README.md").pipe(dest("./dist"));
}

function updatePackageFile() {
  return src("./dist/package.json")
    .pipe(replace(`"main": "index.js",`, `"main": "main.bundle.js",`))
    .pipe(dest("./dist/"));
}

function makeFileExecutable() {
  return src("./dist/main.bundle.js")
    .pipe(chmod(0o755))
    .pipe(dest("./dist/"));
}

function addRunCommandInBuildFile() {
  return src("./dist/main.bundle.js")
    .pipe(header("#!/usr/bin/env node\n"))
    .pipe(dest("./dist/"));
}

function buildNpmPackage() {
  return new Promise((resolve, reject) => {
    execFile("npm", ["pack"], { cwd: "./dist" }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      console.log(stdout);
      resolve(true);
    });
  });
}

exports.buildNpmPackage = series(
  release,
  cleanDistDirectory,
  build,
  addRunCommandInBuildFile,
  copyPackageFileToDistPath,
  copyReadmeFileToDistPath,
  updatePackageFile,
  makeFileExecutable,
  buildNpmPackage
);
exports.buildNpmPackageWithoutRelease = series(
  cleanDistDirectory,
  build,
  addRunCommandInBuildFile,
  copyPackageFileToDistPath,
  copyReadmeFileToDistPath,
  updatePackageFile,
  makeFileExecutable,
  buildNpmPackage
);
exports.release = series(release);
