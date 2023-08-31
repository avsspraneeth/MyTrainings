const width = window.innerWidth
const height=window.innerHeight
const svg=d3.select('body')
.append('svg')
.attr('width',width)
.attr('height',height)


const data_here=d3.range(25).map( d=>({
    x : d*35,
    y : 250+Math.sin(d) *35
}));
const data_join=svg.selectAll('cicle')
.data(data_here) 
///till here its a datajoin, notes n ONENOTE
const enter_selection = data_join.enter().append('circle') //access the enter selection 
const setting_attr= enter_selection.attr('r',10).attr('cx', d=> d.x).attr('cy', d=> d.y ).attr('fill','red')

///we wanna update this stuff then we need to  use update from data join


