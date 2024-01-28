document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running")
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action

        //clear search results
        document.getElementById("display").innerHTML = "";
        // Form data processing
        var name = document.getElementById('search').value + "introduction and learning for kids 12 and under";
        const response = axios.get('https://api.search.brave.com/res/v1/web/search', {
        params: {
          'q': name
        },
        headers: {
          'Accept': 'application/json',
          'X-Subscription-Token': 'BSAlCBDXr5PwulB9XwmMvBR4pB9KDDP'
        }
      }).then(response => {
        // Handle response
        console.log(response.data);
        for(let i = 0; i < response.data.web.results.length; i++) {
          let obj = response.data.web.results[i];
          console.log(obj.description);
          var store = (i+1).toString() + ". " + '<a href="' + obj.url + '">' + obj.title + "</a>" +"<br/>"; 
          store  += "<span style='font-size:0.875em'>" + obj.description + "</span>" + "<br/>";
          document.getElementById("display").innerHTML += store;
      }
        //(response.data.web).forEach(ind=>console.log(ind.url));
      }).catch((error) => console.error(error));
        
    });
});