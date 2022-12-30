window.onload=()=>{
    changeNavLink();
}

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
