import { Navbar } from "./js/navbar/navbar.js"
import { Sidebar } from "./js/main/sidebar/sidebar.js"
import { workSpace } from "./js/main/main.js"
import { Colori } from "./js/stile/variabili.js"

//*set PAGE
document.getElementsByTagName('title')[0].textContent = "MYPage"


//*COMPONENTI
new Navbar().elementi().Style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5px",
    height: "6vh",
    backgroundColor: Colori['navbar']
}).schermo(0, "main")

new Sidebar().Style({
    display: "flex",
    flexDirection: "column",
    float: "left",
    height: "100vh",
    width: "21vh",
    overflow: "hidden",
    backgroundColor: Colori['sidebar']
}).schermo(0)

new workSpace().Style({
    display: "flex",
    height: "92vh",
    backgroundColor: Colori['main']
}).schermo(1, "main")



