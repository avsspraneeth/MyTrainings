//import  selection np from "https://cdn.jsdelivr.net/npm/d3-selection@3";
//import selection  from "./node_modules/d3/src/index.js";

const width=window.innerWidth;
const height=window.innerHeight;
const svg=d3.select('body').append('svg')
svg.attr('width',width);
svg.attr('height',height);
/////////////////////////////////
 const n=100;
svg.selectAll('rect.hor')
.data(d3.range(n))
.join('rect')  // we can use .enter().append('rect') // if no elemnt then it will create .
.attr('y',(d)=>d*20)
.attr('width',width)
.attr('height',10)
.attr('class','hor')
.attr('mask','url(#mask1)');

// const mask=svg.append('mask').attr('id','circle-mask')
// mask.append('rect').attr('width',width).attr('height',height).attr('fill','white')
// mask.append('circle').attr('cx',width/2).attr('cy',height/2).attr('r',250).attr('fill','black')


svg.selectAll('rect.ver')
.data(d3.range(n))
.join('rect')
.attr('x',(d)=>d*20)
.attr('width',10)
.attr('height',height)
.attr('class','ver')
.attr('mask','url(#mask2)');
//////
// const mask2=svg.append('mask').attr('id','circle-mask2')
// mask2.append('rect').attr('width',width).attr('height',height).attr('fill','black')
// mask2.append('circle').attr('cx',width/2).attr('cy',height/2).attr('r',250).attr('fill','white')

const renderMask = (selection,id_name,inverted)=> {
    const mask2=selection.append('mask').attr('id',id_name)
    mask2.append('rect').attr('width',width).attr('height',height).attr('fill',inverted ? 'white':'black')
    mask2.append('circle').attr('cx',width/2).attr('cy',height/2).attr('r',250).attr('fill',inverted ? 'black':'white')

}
// renderMask("mask1",true);
// renderMask("mask2",false);
svg.call(renderMask,'mask1',false); // this is a other way to call, we can use above call as well, but this to work we need to give selection as an argument in the funtion.
svg.call(renderMask,'mask2',true);



console.log("rnning...")