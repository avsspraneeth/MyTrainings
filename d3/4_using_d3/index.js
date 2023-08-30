
//////////////////
//import  selection np from "https://cdn.jsdelivr.net/npm/d3-selection@3";
//import selection  from "./node_modules/d3/src/index.js";

const width=window.innerWidth;
const height=window.innerHeight;
const svg=d3.select('body').append('svg')
svg.attr('width',width);
svg.attr('height',height);
/////////////////////////////////
 const n=100;
// const marks=[];
// for (let i=0;i<n;i++){
//     marks.push(
//         {
//             y : i *20,
//             height : 10 ,
//             width : width,
//             mask : 'url(#cirle-mask)'
//         }
//     )
// }
// console.log(marks)
// svg.selectAll('rect')
// .data(marks)
// .join('rect')
// .attr('y', (d)=>d.y)
// .attr('height', (d)=>d.height)
// .attr('width', (d)=>d.width)
// .attr('mask', (d)=>d.mask)

////////////////////////// other way to do the same ////
svg.selectAll('rect.hor')
.data(d3.range(n))
.join('rect')  // we can use .enter().append('rect') // if no elemnt then it will create .(alternate syntax)
.attr('y',(d)=>d*20)
.attr('width',width)
.attr('height',10)
.attr('class','hor')
.attr('mask','url(#circle-mask)');

const mask=svg.append('mask').attr('id','circle-mask')
mask.append('rect').attr('width',width).attr('height',height).attr('fill','white')
mask.append('circle').attr('cx',width/2).attr('cy',height/2).attr('r',250).attr('fill','black')


svg.selectAll('rect.ver')
.data(d3.range(n))
.join('rect')
.attr('x',(d)=>d*20)
.attr('width',10)
.attr('height',height)
.attr('class','ver')
.attr('mask','url(#circle-mask2)');
/// If we dont se select all with all name, this is gonna replace the above rect as well therefore we need to use a class name 
//or we can use groupling element called svg.select('Rect').append('g') ///
// use .append('g') at both the places and the check !!
const mask2=svg.append('mask').attr('id','circle-mask2')
mask2.append('circle').attr('cx',width/2).attr('cy',height/2).attr('r',250).attr('fill','white')

