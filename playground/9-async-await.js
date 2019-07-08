const add = (a, b) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a< 0 || b<0){
                return reject('Numbers must be positive')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum, -4)
    return sum3

    // throw new Error('Something went wrong')
    // return 'Anca'
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e',e)
})

//console.log(doWork())