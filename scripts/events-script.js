/*
* The purpose of doing in this approach is to automate the process of 
* writing all events of KOJOBS in simpler and efficient manner. 
*/

document.addEventListener("DOMContentLoaded", function() {
    load_2021_2022_events();
    load_2022_2023_events();
});


/* 
* fetches a given jsonfile, reads its data, then creates div element for each events. 
* we include title, the events' detail to be displayed in specific format. 
* Once the div element is created it appends the element to the events_list element
* passed down.
* 
* parameters: events_list - document element 
*             jsonfile - json file address
*             attribute - css class for the events, refer to style-events.css 
* return value: none
*/
function load_events(events_list, jsonfile, attribute) {
    fetch(jsonfile)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < Object.keys(data.events).length; i++) {
                let event = document.createElement('div');
                event.setAttribute("class", attribute);

                let event_title = document.createElement('div');
                event_title.setAttribute("class", "col-lg-4");

                let event_detail = document.createElement('div');
                event_detail.setAttribute("class", "col-lg-8");

               // let event_detail = document.createElement('div');
               // event_detail.setAttribute("class", "media-body");

                /* This codes are to create title section*/
                let title = document.createElement('h3'); 
                title.innerHTML += `<b>${data.events[i].name}</b>`;
                title.setAttribute("class", "headings");

                let date = document.createElement('figcaption');
                date.innerHTML += `<b>${data.events[i].date}</b>`;
                date.setAttribute("class", "blockquote-footer");

                let main_img = document.createElement('img');
                main_img.src = data.events[i].mainImg;
                /*main_img.alt = data.events[i]*/
                main_img.setAttribute("class", "img-fluid img-thumbnail");

                /* This section is for event_detail, which fills up the details of the events*/
                let detail = document.createElement('p')
                detail.innerHTML += `<b>${data.events[i].text}</b>`;

                let sub_img1 = document.createElement('img');
                sub_img1.src = data.events[i].subImg1;
                sub_img1.setAttribute("class", "sub-img");
                
                let sub_img2 = document.createElement('img');
                sub_img2.src = data.events[i].subImg2;
                sub_img2.setAttribute("class", "sub-img");


                event_title.appendChild(title);
                event_title.appendChild(date);
                event_title.appendChild(main_img);

                event_detail.appendChild(detail);
                event_detail.appendChild(sub_img1);
                event_detail.appendChild(sub_img2);

                //event_detail_section.appendChild(event_detail);

                event.appendChild(event_title);
                event.appendChild(event_detail);
                
                events_list.appendChild(event);
            }
        })
} 

/* 
* reads member data within event json file for 2021-22 year
* and loads them to /events.html page within the div with id="21-22-events".
* 
* parameters: none
* return value: none
*/
function load_2021_2022_events() {
    let events_list = document.getElementById("21-22-events");
    let jsonfile = '../json/events21-22/events21-22.json';
      
    load_events(events_list, jsonfile, "row event_list");
}

/* 
* reads member data within event json file for 2022-23 year
* and loads them to /events.html page within the div with id="22-23-events".
* 
* parameters: none
* return value: none
*/
function load_2022_2023_events() {
    let events_list = document.getElementById("22-23-events");
    let jsonfile = '../json/events22-23/events22-23.json';
      
    load_events(events_list, jsonfile, "row event_list");
}
