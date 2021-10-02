(() => {
    const   theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;

    // theTeam.style.display = 'none';

    // start with a fetch call

    function getData() {
        // use the fetch API to retrieve some data
        fetch("./data.json")
        .then(res => res.json()) // unpack the API response (turn it back into plain JS) res = response
        .then(data => {
            console.table(data);

            // do anything else what we want with our data
            // call a function to generate our dynamic content
            buildTeam(data);
        })
        .catch(error => console.error(error)); //catch and report any errors
    }

    function buildTeam(info) {
        // first, get a reference to all of the people (the keys of the info object)
        let team = Object.keys(info);

        team.forEach(person =>{
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;
            
            memberInfo[0].querySelector('img').src = `images/${info[person].biopic}`;
            memberInfo[1].textContent = info[person].name;
            memberInfo[2].textContent = info[person].role;
            memberInfo[3].textContent = info[person].nickname;

            // put the virtual panel in the team section in our HTML page
            theTeam.appendChild(panel);
        })
        // first, clone the template because we can't use it directly
  
    }
    // invoke the getData function
    getData();
})()