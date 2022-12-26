 /*
* The purpose of doing in this approach is to automate the process of 
* writing all KOJOBS officers in simpler and efficient manner. 
*/
document.addEventListener("DOMContentLoaded", function() {
    load_representatives();
    // load_hrs_team(); 
    // load_pm_team(); 
    // load_prd_team();
    // load_md_team(); 
  });

/* 
* reads member data within representatives json file for 2022-23 year
* and loads them to /officers.html page under its representatives box. 
* 
* parameters: none
* return value: none
*/
function load_representatives() {
    let officers_list = document.getElementById("executives-officers");

    let jsonfile = './json/officers-22-23/representatives.json'; 
    fetch(jsonfile)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < Object.keys(data.officers).length; i++) {
                let officer = document.createElement('div');
                officer.setAttribute("class", "officer");

                let name = document.createElement('div'); 
                name.innerHTML += `Name: <b>${data.officers[i].name}</b>`; 

                let role = document.createElement('div'); 
                role.innerHTML += `Role: <b>${data.officers[i].role}</b>`; 

                let email = document.createElement('div'); 
                email.innerHTML += `Email: <b>${data.officers[i].role}</b>`; 

                officer.appendChild(name);
                officer.appendChild(role);
                officer.appendChild(email);

                officers_list.appendChild(officer); 
            }
        })
}