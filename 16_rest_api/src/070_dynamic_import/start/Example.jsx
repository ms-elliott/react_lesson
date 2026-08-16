const Example = () => {
    import("./add").then(module => {
        console.log(module)
    })
};

export default Example;
