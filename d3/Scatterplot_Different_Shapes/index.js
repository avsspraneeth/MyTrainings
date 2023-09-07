// const csv_url =
//   "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";
//or use
const csv_url = "http://192.168.1.2:8080/iris.csv";
import { scatterplot } from "./scatterPlot.js";
//instead of using d3.csv we can also do below, then we can use without d3.funtion()
const { csv, select, scaleLinear } = d3;

const parseRow = (d) => {
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  return d;
};
//csv(csv_url, parseRow).then((data) => console.log(data)); // can use this but in local server its prohibited

const svg = select("body")
  .append("svg")
  .attr("height", innerHeight)
  .attr("width", innerWidth);

const main = async () => {
  const data_send = await csv(csv_url, parseRow);
  //const x = scaleLinear().domain([d3.min(data, xValue), d3.max(data, xValue)]);  //or use below as an alternative

  svg.call(
    scatterplot()
      .width(innerWidth)
      .height(innerHeight)
      .margin({ top: 50, right: 50, bottom: 50, left: 60 })
      .data(data_send)
      .symbolvalue((d) => d.species)
      .xValue((d) => d.petal_length)
      .yValue((d) => d.sepal_length)
      .radius(5)
  );
};

main();
