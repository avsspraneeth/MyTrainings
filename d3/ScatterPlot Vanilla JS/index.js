// const csv_url =
//   "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";
//or use
const csv_url = "http://192.168.1.8:8080/iris.csv";

//instead of using d3.csv we can also do below, then we can use without d3.funtion()
const { csv, select, scaleLinear } = d3;
const margin = { top: 50, right: 50, bottom: 50, left: 60 };

const parseRow = (d) => {
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  return d;
};
//csv(csv_url, parseRow).then((data) => console.log(data)); // can use this but in local server its prohibited

const xValue = (d) => d.petal_length;
const yValue = (d) => d.sepal_length;

const svg = select("body")
  .append("svg")
  .attr("height", innerHeight)
  .attr("width", innerWidth);

const main = async () => {
  const data = await csv(csv_url, parseRow);
  //const x = scaleLinear().domain([d3.min(data, xValue), d3.max(data, xValue)]);  //or use below as an alternative
  const x = scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([margin.left, innerWidth - margin.right]);

  const y = scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight - margin.bottom, margin.top]); // since D3 y axis coodinate is flipped.

  console.log([innerHeight - margin.bottom, margin.top]);
  const marks = data.map((d) => ({
    x: x(xValue(d)), // this will retuen the picel values
    y: y(yValue(d)),
  }));

  console.log(x.domain()); //if we wanna see the values of domain the  dont pass any arguments to the fuciton

  svg
    .selectAll("circle")
    .data(marks)
    .join("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 10);

  svg
    .append("g")
    .attr("transform", `translate( ${margin.left} , 0)`)
    .call(d3.axisLeft(y));
  svg
    .append("g")
    .attr("transform", `translate(0, ${innerHeight - margin.bottom} )`)
    .call(d3.axisBottom(x));
};

main();
