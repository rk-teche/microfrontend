import faker from "faker";

const mount = (ele) =>
{
    const cartItems = `you have ${faker.random.number()} items in your card`;

    ele.innerHTML = cartItems;
};

export 
{
    mount
};