import store from "../js/store/index";
import { generateStories } from "../js/actions/index";

window.store = store;
window.addProductIncrement = generateStories;
