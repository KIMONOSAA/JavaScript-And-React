let today = new Date();
let DataYear = today.getFullYear();
let DataMonth = today.getMonth();
let DataMonth_S = document.querySelector("#month");
let DtatYear_s = document.querySelector("#year");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear  = document.getElementById("monthAndYear");
showCalendar(DataMonth,DataYear);

function next(){
       DataYear = (DataMonth === 11 ) ? DataYear+1 : DataYear;
       DataMonth = (DataMonth + 1) % 12;
       showCalendar(DataMonth,DataYear);
}

function previous(){
    DataYear = (DataMonth === 0) ? DataYear - 1 : DataYear;
    DataMonth = (DataMonth === 0) ? 11 : DataMonth-1;
    showCalendar(DataMonth,DataYear);
}

function jump(){
    DataYear = parseInt(DtatYear_s.value);
    DataMonth = parseInt(DataMonth_S.value);
    showCalendar(DataMonth,DataYear);
}
function showCalendar(month,year){
     let firstDay = (new Date(year,month)).getDay();

     
     let tbbase = document.querySelector("#calendar-body");
     tbbase.innerHTML = "";

     monthAndYear.innerHTML = months[month] + " " + year;
     DataMonth_S.value = month;
     DtatYear_s.value = year;
     let data = 1;
     for(let i = 0;i<6;i++){
        let crealTr = document.createElement("tr");
        let crealTd;
        let crealTds;
        for(let j = 0;j<7;j++){
            if(i === 0 && j <firstDay){
                crealTd = document.createElement("td");
                crealTds = document.createTextNode("");
                crealTd.appendChild(crealTds);
                crealTr.appendChild(crealTd);
            }else if(data > daysInMonth(month,year)){
                break;
            }
            else{

                crealTd = document.createElement("td");
                crealTds = document.createTextNode(data);
                if(data ===  today.getDate() && month === today.getMonth() && year === today.getFullYear()){
                    crealTd.classList.add("bg-info");
                }
                crealTd.appendChild(crealTds);
                crealTr.appendChild(crealTd);
                data++;
            }
           
        }
        tbbase.appendChild(crealTr);
     }   
}



function daysInMonth(iMonth, iYear){ 
    return 32 - new Date(iYear, iMonth, 32).getDate(); 
}