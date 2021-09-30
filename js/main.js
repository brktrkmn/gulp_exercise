(() => {
    // start with a fetch call

    function getData() {
        // use the fetch API to retrieve some data
        fetch("./data.json")
        .then(res => res.json()) // unpack the API response (turn it back)
        .then(data => {
            console.log(data);

            // do anything else what we want with our data
        })
        .catch(error => console.error(error)); //catch and report any errors
    }
    // invoke the getData function
    getData();
})()