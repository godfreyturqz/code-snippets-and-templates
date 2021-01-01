// -------------
// CALLBACK FUNCTION
// -------------
const fetchData = (callbackFn) => {

    setTimeout(() => {
        const response = 'response data from a callback function'
        callbackFn(response)
    }, 1000)
}

const callbackFn = (res) => {
    console.log(res)
}

fetchData(callbackFn)

// -------------
// PROMISES
// -------------
const fetchData2 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject('fetch failed!')
            } else {
                const fakeData = {
                    id: id,
                    name: 'godfrey'
                }
                resolve(fakeData)
            }
        }, 1000)
    })
}

fetchData2(10)
.then(res => console.log('using simple .then .catch', res))
.catch(err => console.log('using simple .then .catch', err))

// SIMULTANEOUS PROMISE
Promise.all([fetchData2(231), fetchData2(234)])
.then(res => console.log('using Promise all', res))
.catch(err => console.log('using Promise all', err))

// -------------
// ASYNC AWAIT
// -------------
const fetchUser = async (id) => {
    try {
        const response = await fetchData2(id)
        console.log('using async await', response)
    } catch (error) {
        console.log('using async await', error)
    }
}
fetchUser(15)
