export const scatterplot = () => {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let symbolvalue;
  let margin;
  let radius;
  const { csv, select, scaleLinear, symbols, symbol, scaleOrdinal } = d3;
  const my = (selection) => {
    const x = scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([margin.left, innerWidth - margin.right]);

    const y = scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([innerHeight - margin.bottom, margin.top]); // since D3 y axis coodinate is flipped.

    const symbolScale = scaleOrdinal()
      .domain(data.map(symbolvalue))
      .range(symbols);

    const symbolgenerator = symbol();
    console.log([innerHeight - margin.bottom, margin.top]);
    const marks = data.map((d) => ({
      x: x(xValue(d)), // this will retuen the picel values
      y: y(yValue(d)),
      pathD: symbolgenerator.type(symbolScale(symbolvalue(d)))(),
    }));

    console.log(symbolScale.domain());
    console.log(symbolScale.range());

    selection
      .selectAll("path")
      .data(marks)
      .join("path")
      .attr("d", (d) => d.pathD)
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    // selection
    //   .append("g")
    //   .attr("transform", `translate( ${margin.left} , 0)`)
    //   .call(d3.axisLeft(y));
    // selection
    //   .append("g")
    //   .attr("transform", `translate(0, ${innerHeight - margin.bottom} )`)
    //   .call(d3.axisBottom(x));
    //to get the idempodent and axis to not overlap use below
    selection
      .selectAll("g.y-axis")
      .data([null])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate( ${margin.left} , 0)`)
      .call(d3.axisLeft(y));

    selection
      .selectAll("g.x-axis")
      .data([null])
      .join("g")
      .attr("class", "x-axis")
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

  my.symbolvalue = function (_) {
    return arguments.length ? ((symbolvalue = _), my) : symbolvalue;
  };
  return my;
};
