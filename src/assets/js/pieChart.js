var options = {
  chart: {
    width: 380,
    type: "donut"
  },
  dataLabels: {
    enabled: false
  },
  series: [44, 55, 13, 33]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

function random() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function appendData() {
  var arr = chart.w.globals.series.map(() => {
    return random();
  });
  arr.push(random());
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.map(() => {
    return random()
  });
  arr.pop();
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(() => {
    return random();
  });
}

function reset() {
  return options.series;
}

document.querySelector("#randomize").addEventListener("click", function() {
  chart.updateSeries(randomize());
});

document.querySelector("#add").addEventListener("click", function() {
  console.log(appendData());
  chart.updateSeries(appendData());
});

document.querySelector("#remove").addEventListener("click", function() {
  chart.updateSeries(removeData());
});

document.querySelector("#reset").addEventListener("click", function() {
  chart.updateSeries(reset());
});
