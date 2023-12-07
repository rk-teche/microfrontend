const file = import("./bootstrap"); // when we use import() function it will load things asynchronously

file.then(context =>
{
    if (process.env.NODE_ENV === 'development')
    {
        const ele = document.querySelector("#product-selector");
        ele && context.mount(ele);
    }
});