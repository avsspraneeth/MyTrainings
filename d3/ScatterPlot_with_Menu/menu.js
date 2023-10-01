export const menu = () => {
  let id;
  let labeltext;
  const my = (selection) => {
    selection
      .selectAll("label")
      .data([null])
      .join("label")
      .attr("for", id)
      .text(labeltext);
  };

  my.id = function (_) {
    return arguments.length ? ((id = _), my) : id;
  };

  my.labeltext = function (_) {
    return arguments.length ? ((labeltext = _), my) : labeltext;
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
