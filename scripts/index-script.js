window.onload=()=>{
    changeNavLink();
}

/* 
* Changes the link that each nav items is associated to for index.html,
* since all the other .html files are under /app/ folder.
* 
* parameters: none
* return value: none
*/
function changeNavLink() {

    let item = Array.from(document.getElementsByClassName("home"));
    item.forEach(itemIdx => {
        itemIdx.href = "index.html";
        });


    const navItems = ["aboutUs", "events", "officers", "membership"];

    for (let i = 0; i < navItems.length; i++) {
        let item = Array.from(document.getElementsByClassName(navItems[i]));

        if (navItems[i] == "membership") {
            item[0].setAttribute("onClick", "location.href = '/app/membership.html'"); 
            item[1].href = "/app/membership.html";
        } 
        else {
        item.forEach(itemIdx => {
            itemIdx.href = "/app/" + navItems[i] + ".html";
          });
        }
    }

}
