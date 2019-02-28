const dev =  {
    recipeContext: 'http://localhost:3000'
}

const prod = {
    recipeContext: 'some AWS url'
}

export let enviromnent = dev;

if (process.env.NODE_ENV === 'production') {
    enviromnent = prod;
}