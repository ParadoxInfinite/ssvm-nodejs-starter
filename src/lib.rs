use wasm_bindgen::prelude::*;
use std::time::Instant;

#[wasm_bindgen]
// Main computation function
pub fn number_details(number: i32) -> String {
  println!("The Rust function numberDetails received {}", number);
  let start = Instant::now();
  let float_number: f64 = number as f64;
  let mut result: (f64, f64, f64, f64, Vec<i32>) = (0., 0., 0., 0., [].to_vec());
  result.0 = float_number * float_number;
  result.1 = result.0 * float_number;
  result.2 = float_number.sqrt();
  result.3 = float_number.cbrt();
  result.4 = get_factors_functional(number);
  let end = Instant::now();
  return format!("<hr/><strong>RUST RESULTS</strong><hr/>Square = {}<br/>Cube = {}<br/>Square Root = {:.2}<br/>Cube Root = {:.2}<br/> Factors = {:?}<br/><hr/>Time elapsed for the operation = {:.2?}<hr/>", result.0, result.1,result.2, result.3, result.4, end.duration_since(start))
}

// Helper function to get factors.
fn get_factors_functional(n: i32) -> Vec<i32> {
    (1..n + 1).into_iter().filter(|&x| n % x == 0).collect::<Vec<i32>>()
}