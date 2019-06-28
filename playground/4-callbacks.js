setTimeout(() => {
    console.log('2 sec')
}, 2000)

const names = ['Anca', 'Wenlin', 'Santi']
const shortNames = names.filter((name) => {
    return name.length <= 4
})