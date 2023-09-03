const array =[1,1,2]
array.push(1)
console.log(array) //pushes even if the array is const
//we can have list of different data types
array.push("C")

//creatng an array 
const alpha = (n) =>{
    for ( let i=0;i<=n;i++)
    {array.push(i)}
return array
};

let myarray = alpha(5)
console.log(myarray);



/// for each syntax
myarray.forEach(  (d)=>{console.log(d)  } ); 
///Map Syntax
const beta =(a) =>{console.log(a)}
myarray.map(beta)
///filter
console.log (myarray.filter((d)=> d%2===0))
///sort?
myarray.sort() //this will convert the array to strings and then sort
myarray.sort((a,b)=>b-a) //this will sort consieri numbers
//////////in D3 we can use 
//sortable.sort(ascending)  // or use decending there

///MAPS 
//creating an object using a map
console.log(myarray.map(d=> ({hmm1:d,hmm2:d*2})))
///Reduce 
//reduce takes 2 arguments with the funtion as shown below, passing other argument other than funtion is the initial condition for the acuumilator

myarray = [1,2,3,4,5]
myarray.reduce(    
(accumlator,presentvalue) =>{
console.log(accumlator + " adding to " + presentvalue );
return accumlator+presentvalue;

},100)

//most common use case
const  entries=[{key:'A1',value:'A2'},{key:'B1',value:'B2'}]
console.log(entries)
/// to get result={A1:A2,B1:B2}

const new_entries=entries.reduce((accumlator2,d)=>{
    console.log(accumlator2[d.key] +"  "+d.value)
    accumlator2[d.key] = d.value;
return accumlator2} , {})

console.log(new_entries)


