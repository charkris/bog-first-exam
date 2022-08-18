import { myObj } from "./common/common.js";
import { Home } from "./modules/home/home.js";

let homePage = new Home(myObj);

homePage.render();