const dev =  {
    recipeContext: 'http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com:5500/'
}

const prod = {
    recipeContext: 'some AWS url'
}

export let enviromnent = dev;

if (process.env.NODE_ENV === 'production') {
    enviromnent = prod;
}