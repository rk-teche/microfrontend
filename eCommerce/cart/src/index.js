const bootstrap = import("./bootstrap");

bootstrap.then(context => 
{
    if (process.env.NODE_ENV === "development")
    {
        const ele = document.querySelector("#selector-2");

        if (ele && context.mount)
            context.mount(ele);
    }
})

