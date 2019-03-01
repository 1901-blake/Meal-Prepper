const dev =  {
    recipeContext: 'http://localhost:5500'
}

const prod = {
    recipeContext: 'http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com:5500/'
}



export let enviromnent = prod;

if (process.env.NODE_ENV === 'production') {
    enviromnent = prod;
}