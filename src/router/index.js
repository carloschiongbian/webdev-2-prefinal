import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ItemDetails from '../views/ItemDetails.vue';
import Cart from '../views/Cart.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/itemDetails",
    name: "ItemDetails",
    component: ItemDetails
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
