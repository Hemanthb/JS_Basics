const add = (a,b,error) => { return new Promise((resolve,reject) => {
    if(!error){
        resolve(a+b);
    }else{
        reject("Oops!Something wrong in add!!");
    }
});
}
const sub = (a,b,error) => { return new Promise((resolve,reject) => {
    if(!error){
        resolve(a-b);
    }else{
        reject("Oops!Something wrong in sub!!");
    }
});
}

async function result(){
    try{
        let result1 = await add(3,5,true);
        let result2 = await sub(result1,2,false);
        console.log("Result is - "+result2);
    }
    catch(err){
        console.log(err);
    }
}

result();