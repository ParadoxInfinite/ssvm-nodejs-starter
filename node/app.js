const { number_details } = require("../pkg/ssvm_nodejs_starter_lib.js");
const express = require("express");
const spawn = require("child_process").spawn;
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.redirect("/index.html"));

// Main execution route
app.post("/number-details", async function (req, res) {
  const number = parseFloat(req.body.number);
  const rust_result = number_details(number);
  const js_result = number_details_js(number);
  let python_result;
  const python_init = spawn("python3", [
    __dirname + "/number_details.py",
    number,
  ]);
  await python_init.stdout.on("data", function (data) {
    res.send(rust_result + js_result + data.toString());
  });
  python_init.on("close", (code) => {});
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// Helper function for JS
function find_factors(number) {
  return [...Array(number + 1).keys()].filter((i) => number % i === 0);
}

// Main Computation function
function number_details_js(number) {
  const start_time = process.hrtime();
  const square = number * number;
  const cube = square * number;
  const square_root = Math.sqrt(number);
  const cube_root = Math.cbrt(number);
  const temp_factors = find_factors(number);
  const end_time = process.hrtime(start_time);
  const time_elapsed = `${end_time[0]}s ${(end_time[1] / 1000000).toFixed(
    2
  )}ms`;
  const factors = temp_factors.join(", ");

  return `<hr/><strong>JAVASCRIPT RESULTS</strong><hr/>Square = ${square}<br/>Cube = ${cube}<br/>Square Root = ${square_root.toFixed(
    2
  )}<br/>Cube Root = ${cube_root.toFixed(
    2
  )}<br/> Factors = [${factors}]<br/><hr/>Time elapsed for the operation = ${time_elapsed}<hr/>`;
}
