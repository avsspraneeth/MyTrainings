export const menu = () => {
  let id;
  let labeltext;
  let options;
  const my = (selection) => {
    selection
      .selectAll("label")
      .data([null])
      .join("label")
      .attr("for", id)
      .text(labeltext)
      .selectAll("select")
      .data([null])
      .join("select")
      .attr("name", id)
      .attr("for", id)
      .selectAll("option")
      .data(options)
      .join("option")
      .attr("value", (d) => d.value)
      .text((d) => d.text);
  };

  my.id = function (_) {
    return arguments.length ? ((id = _), my) : id;
  };

  my.labeltext = function (_) {
    return arguments.length ? ((labeltext = _), my) : labeltext;
  };

  my.options = function (_) {
    return arguments.length ? ((options = _), my) : options;
  };

  return my;
};
{
  /* <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */
}
