const surface = document.getElementById('demo');

const data = [
  {index: 0, value: 100},
  {index: 1, value: 200},
  {index: 2, value: 15},
  {index: 3, value: 54},
];

tfvis.render.barchart(surface, data);
