 /*
* The purpose of doing in this approach is to automate the process of 
* writing all KOJOBS officers in simpler and efficient manner. 
*/

document.addEventListener("DOMContentLoaded", function() {
    load_representatives();
    load_hrs_team();
    load_pm_team();
    load_prd_team();
    load_md_team();
});

/* 
* fetches a given jsonfile, reads its data, then creates div element for each officer. 
* we include officer's name, role, and their email to be displayed. 
* Once the div element is created it appends the element to the officers_list element
* passed down.
* 
* parameters: officers_list - document element 
*             jsonfile - json file address
*             attribute - css class for the officer, refer to style-officers.css 
* return value: none
*/
function load_members(officers_list, jsonfile, attribute) {
    fetch(jsonfile)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < Object.keys(data.officers).length; i++) {
                let officer = document.createElement('div');
                officer.setAttribute("class", attribute);

                let name = document.createElement('div'); 
                name.innerHTML += `<b>${data.officers[i].name}</b>`;
                name.setAttribute("class", "officer-text");

                let english_name = document.createElement('div'); 
                english_name.innerHTML += `<b>${data.officers[i].english_name}</b>`;
                english_name.setAttribute("class", "officer-text");

                let role = document.createElement('div');
                role.innerHTML += `Role: <b>${data.officers[i].role}</b>`;
                role.setAttribute("class", "officer-text");

                officer.appendChild(name);
                officer.appendChild(english_name);
                officer.appendChild(role);

                if (attribute == "officer-representatives") {
                    let email = document.createElement('div');
                    email.innerHTML += `Email: <b>${data.officers[i].email}</b>`;
                    email.setAttribute("class", "officer-text");
                    officer.appendChild(email);
                }
                

                let linkedinLink = data.officers[i].linkedin;
                if (linkedinLink != "none") {
                    let lkn = document.createElement('div');
                    lkn.innerHTML += `<a class="lknlink" href="${linkedinLink}"><b>LinkedIn</b></a>`;
                    lkn.setAttribute("class", "officer-text");
                    officer.appendChild(lkn);
                }

                officers_list.appendChild(officer);
            }
        })
} 

/* 
* reads member data within representatives json file for 2022-23 year
* and loads them to /officers.html page within the div with id="representative-officers".
* 
* parameters: none
* return value: none
*/
function load_representatives() {
    let officers_list = document.getElementById("representative-officers");
    let jsonfile = '../json/officers-22-23/representatives.json';
      
    load_members(officers_list, jsonfile, "officer-representatives");
}

/* 
* reads member data within human resources & statistics team json file for 2022-23 year
* and loads them to /officers.html page within the div with id="hrs-officers".
* 
* parameters: none
* return value: none
*/
function load_hrs_team() {
    let officers_list = document.getElementById("hrs-officers");
    let jsonfile = '../json/officers-22-23/hrs-team.json';
      
    load_members(officers_list, jsonfile, "officer");
}

/* 
* reads member data within planning & management team json file for 2022-23 year
* and loads them to /officers.html page within the div with id="pm-officers".
* 
* parameters: none
* return value: none
*/
function load_pm_team() {
    let officers_list = document.getElementById("pm-officers");
    let jsonfile = '../json/officers-22-23/pm-team.json';
      
    load_members(officers_list, jsonfile, "officer");
}

/* 
* reads member data within public relations & development team json file for 2022-23 year
* and loads them to /officers.html page within the div with id="prd-officers".
* 
* parameters: none
* return value: none
*/
function load_prd_team() {
    let officers_list = document.getElementById("prd-officers");
    let jsonfile = '../json/officers-22-23/prd-team.json';
      
    load_members(officers_list, jsonfile, "officer");
}

/* 
* reads member data within marketing & design team json file for 2022-23 year
* and loads them to /officers.html page within the div with id="md-officers". 
* 
* parameters: none
* return value: none
*/
function load_md_team() {
    let officers_list = document.getElementById("md-officers");
    let jsonfile = '../json/officers-22-23/md-team.json';
      
    load_members(officers_list, jsonfile, "officer");
}