1. Difference between id and class is that way we access the element in CCS, #.id_name or #.Class_name.
2. ID is unique but call can be used to multple elements.
3. we cant change the value of an constant in JS but we can mutate the value of an property of an object.
4. var is a global scope variable but let and const are scope specific
5. need to learn how to write codes like this
<pre>

```
fetch(`https://api.github.com/gists/${gistId}`)
  .then((response) => response.json())
  .then((data) => {
    // Access the content of the Gist
    const files = data.files;
    const content = files["iris.csv"].content;
    console.log(content);
  })
  .catch((error) => {
    console.error("Error fetching Gist:", error);
  });
```

</pre>
