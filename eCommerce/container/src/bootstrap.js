// import("cart/CartShow");

import { mount } from "products/ProductIndex";
import { mount as CartMount } from "cart/CartShow";

const ele1 = document.querySelector("#selector-1");
if (ele1 && mount)
    mount(ele1);


const ele2 = document.querySelector("#selector-2");
if (ele2 && CartMount)
    CartMount(ele2);