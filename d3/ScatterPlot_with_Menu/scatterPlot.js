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

    const t = d3.transition().duration(1000);
    const positionCirlces = (circles) => {
      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    };

    selection
      .selectAll("circle")
      .data(marks)
      .join(
        (enter) =>
          enter
            .append("circle")
            .call(positionCirlces)

            .attr("r", 0)
            .call((enter) =>
              enter
                .transition(t)
                .attr("r", radius)
                .delay((d, i) => i * 5)
            ), //we are doing this because if we use . transition it wont return an Enter value, but we need an enter value so we use this
        (update) =>
          update
            .call((update) =>
              update
                .transition(t)
                .delay((d, i) => i * 5) // so thhat each point will animate indimendently
                .attr("r", radius)
                .call(positionCirlces)
            )

            .attr("r", radius),

        (exit) => exit.remove()
      );

    selection
      .selectAll("g.y-axis")
      .data([null])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate( ${margin.left} , 0)`)
      .transition(t) // this can be dont whrn we are using .join funtion
      .call(d3.axisLeft(y));

    selection
      .selectAll("g.x-axis")
      .data([null])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${innerHeight - margin.bottom} )`)
      .transition(t)
      .call(d3.axisBottom(x));
  };

  my.width = function (_) {
    return arguments.length ? ((width = _), my) : width;
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
