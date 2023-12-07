import faker from "faker";

const mount = (ele) => 
{
    if (!ele) return;

    let products = "";
    for (let i = 0; i < 7; i++)
    {
        const name = faker.commerce.productName(); // provide a product name
        products += `<div>${name}</div>`;
    }

    ele.innerHTML = products;
};

export 
{
    mount
};