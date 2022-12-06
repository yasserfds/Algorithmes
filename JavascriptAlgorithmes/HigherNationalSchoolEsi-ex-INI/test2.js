var x = 15.20
var y = -10.80
var z = x * y
var y = z / 2
var z = x - y / x

if (z == x * y) {
  console.log(x, y, z)
} else {
  if (z == x - y / x) {
    console.log(x, y, z)
  }
}
console.log(x, y, z)
