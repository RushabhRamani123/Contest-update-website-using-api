let i = 1; 
let ihtml =""
let response = fetch("https://kontests.net/api/v1/all")
    response.then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        ihtml = [];
        for (item in data) {
        
            console.log(`${i}. ${data[item].name}`);
            // <img src="..." class="card-img-top" alt="...">
      ihtml[i] = ` <div class="card" style="width: 100%;text-align:center">
            <h5 class="card-title">${data[item].name}</h5>
           <div class="card-text">
           <p class="card-text">Site : ${data[item].site}</p>
           <p class="card-text">Duration : ${data[item].duration}</p>
           <p class="card-text">Start_Time: ${data[item].start_time}</p>
           <p class="card-text">End_Time : ${data[item].end_time}</p>
           <p class="card-text">In_24_Hours: ${data[item].in_24_hours}</p>
           <p class="card-text">Status : ${data[item].status}</p>
           <a href="${data[item].url}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`  
    
            i++; 
            
        }
        
console.log(ihtml);        
        cardContainer.innerHTML = ihtml; 
        
        
       
})