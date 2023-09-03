const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let interval = 100;
let t = 0;

function updateCircles1(data) {
  const circles = svg.selectAll('circle').data(data);

  circles.enter()
    .append('circle')
    .attr('r', 10)
    .attr('fill', 'red')
    //.merge(circles) // Merge enter and update selections
    circles.attr('cx', d => d.x)
    .attr('cy', d => d.y);

  //circles.exit().remove(); // Remove any circles that are not in the data anymore
}


function updateCircles2(data) {
    const circles = svg.selectAll('circle').data(data);
  
    var circleEnter=circles.enter().append('circle').attr('r', 10).attr('fill', 'red')
    circleEnter.merge(circles) // Merge enter and update selections
      .attr('cx', d => d.x)
     .attr('cy', d => d.y);

      
    
    
      circles.exit().remove(); // Remove any circles that are not in the data anymore when circles are dynamic as below 
  }


  function updateCircles3(data) {
    const circles = svg.selectAll('circle').data(data);
  
    // var circleEnter=circles.enter().append('circle').attr('r', 10).attr('fill', 'red')
    // circleEnter.merge(circles) // Merge enter and update selections
    //   .attr('cx', d => d.x)
    //   .attr('cy', d => d.y);

      //we can use join for new syntax for merge enter and exit together
  
        circles.join('circle').attr('r', 10).attr('fill', 'red')
    
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    
    
    
    
      //circles.exit().remove(); // Remove any circles that are not in the data anymore
  }


  setInterval(() => {
  const data_here = d3.range(50+Math.sin(t)*25).map(d => ({
    x: d * 35,
    y: 250 + Math.sin(d + t) * 35
  }));
  
  updateCircles2(data_here); //either use updateCircles1 or UpdateCircles2
  
  t = t + 0.5; // Increment t by a smaller value for smoother animation
}, interval);
