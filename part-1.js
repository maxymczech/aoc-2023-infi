const fs = require('fs');
const inputRaw = fs.readFileSync('input.txt').toString();
const lines = inputRaw.replace(/\r/g, '').trim().split('\n');
const lineCoords = lines.map(line => {
  const m = line.matchAll(/\((-?\d+),\s?(-?\d+)\)/g);
  const coords = [...m].map(item => [Number(item[1]), Number(item[2])]);
  return coords;
});
const radii = lineCoords.map(coords => Math.max(...coords.map(c => Math.hypot(...c))));
const result = Math.floor(radii.reduce((a,b) => a+b, 0));
console.log(result); //2729
