

export function printHeader(array, elementHTML) {


    

    let html = ""
    array.forEach(({icon,number,state,title,today,user})=>{

      const iconState = state ? '<img src="./src/images/icon-up.svg" alt="">': '<img src="./src/images/icon-down.svg" alt="">'


      html += `
      <div class="follower">
      <div class="follower__head">
            <img src="${icon}">
            <p>${user}</p>
      </div>
      <div class="followers_total">
             <p>${number}</p>
             <p>${title}</p>
      </div>

      <div class="followers_today">

             ${iconState}
             <span class="${state ? "green_text" : "red_text" }"">  ${today} </span>
      </div>
</div> 
      `
    })

    elementHTML.innerHTML=html
}


export function printBody(array, elementHTML) {
    //console.log(array, elementHTML);

    

    let html = ""

    array.forEach(({title,icon, number, percent, state })=>{

      const  iconState = state ? '<img src="./src/images/icon-up.svg" alt="">'  :  '<img src="./src/images/icon-down.svg" alt="">'

         html += `
         <div class="overview">
         <div class="overview_top">
            <p>${title}</p>
            <img src="${icon}" alt="">
         </div>
         <div class="overview_bottom">
              <p>${number}</p>
              <div 
              class="overview_bottom_percent">
                   ${iconState}

                   <p class = "${state ? "green_text" : "red_text"}">
                   ${percent}%</p>
              </div>                   
         </div>                
     </div>
         `
        
    })

    elementHTML.innerHTML=html
}