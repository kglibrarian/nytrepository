//Takes in params obj and returns obj with null keys removed

//Takes in params object and returns the object with null/empty keys removed

export default params =>
Object.keys(params)
.filter(key=> params[key])
.reduce((acc,curr) =>{
    acc[curr]= params[curr];
    return acc;
}, {});