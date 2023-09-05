export const scatterplot = () => {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let margin;
  let radius;
  const { csv, select, scaleLinear } = d3;
  const my = (selection) => {
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

    selection
      .selectAll("circle")
      .data(marks)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", radius);

    selection
      .append("g")
      .attr("transform", `translate( ${margin.left} , 0)`)
      .call(d3.axisLeft(y));
    selection
      .append("g")
      .attr("transform", `translate(0, ${innerHeight - margin.bottom} )`)
      .call(d3.axisBottom(x));
  };

  // when we use (x=5,100) then its executes first one but returns last entry in the list.
  //we cant use arrow funtion as it wont have arguments keyword!!

  my.width = function (_) {
    return arguments.length ? ((width = _), my) : width; //in this case, (width = _)) and returns my. Otherwise, it returns the current value of width.
  };

  my.height = function (_) {
    return arguments.length ? ((height = _), my) : height;
  };
  my.data = function (_) {
    return arguments.length ? ((data = _), my) : data;
  };
  my.xValue = function (_) {
    return arguments.length ? ((xValue = _), my) : xValue;
  };
  my.yValue = function (_) {
    return arguments.length ? ((yValue = _), my) : yValue;
  };
  my.margin = function (_) {
    return arguments.length ? ((margin = _), my) : margin;
  };

  my.radius = function (_) {
    return arguments.length ? ((radius = _), my) : radius;
  };
  return my;
};
