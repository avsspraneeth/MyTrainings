// const csv_url =
//   "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";
//or use
const csv_url = [
  "https://gist.github.com/",
  "curran/", //user
  "a08a1080b88344b0c8a7/", //Id of Gist
  "raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534", //commit
  "iris.csv",
].join("");
console.log(csv_url);

//instead of using d3.csv we can also do below, then we can use without d3.funtion()
const { csv } = d3;
//csv(csv_url).then((data) => console.log(data)); // can use this but in local server its prohibited
const gistId = "a08a1080b88344b0c8a7";
fetch(`https://api.github.com/gists/${gistId}`)
  .then((response) => response.json())
  .then((data) => {
    // Access the content of the Gist
    const files = data.files;
    const content = files["iris.csv"].content;
    //console.log(content);
  })
  .catch((error) => {
    console.error("Error fetching Gist:", error);
  });
//// BUT FOR NOW WE ARE GONNA USE LOCAL CSV
