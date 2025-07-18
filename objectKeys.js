//object keys
console.log(Object.keys(obj11));
console.log(Object.values(obj11));
console.log(JSON.stringify(obj11));


//Promise is javascript

function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === 'success'){
            return resolve('successfully execusted')
        }
        else{
            return resolve('unsuccessfully execusted')
        }
    })
}
