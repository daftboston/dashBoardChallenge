import "./darkmode.js"
import { amountFollowers } from "./helpers.js"
import {printBody,printHeader} from "./layout.js"

const contentFollower = document.querySelector(".followers")
const contentOverviews = document.querySelector(".overviews")
const totalNumber = document.querySelector(".totalNumber")



const months = document.querySelector(".months")
//console.log(months);

const currentMonth = document.querySelector (".currentMonth")

let dataDashboard = null

months.addEventListener('click',(e)=>{
    // pregunta si contiene la clase item
   if(e.target.classList.contains("item")){
      // logea solo el contenido.
     const nameMonth = e.target.textContent
      currentMonth.textContent = nameMonth


      console.log(dataDashboard[nameMonth]);
      
      const {dataHead, databody}= dataDashboard[nameMonth]
      totalNumber.textContent = amountFollowers(dataHead)

      //llama nuevamente a las funciones.
      printHeader(dataHead, contentFollower);
      printBody(databody, contentOverviews);
   }    
})


async function getData() {
    try {
        const data = await fetch("./src/data.json")
        const res = await data.json()

        dataDashboard = res 
        const {dataHead, databody} = dataDashboard.ene;
        totalNumber.textContent = amountFollowers(dataHead)
       
     
        printHeader(dataHead, contentFollower);
        printBody(databody, contentOverviews);
    } catch (error) {
        console.log(error);
    }
    
}

getData()