const form = document.querySelecter('form')
const errCallback = err => console.log(err.response.data)
const newCompliment = body => axios.post(baseURL, body).then
const compliments = require('./db.json')
function submitHandler(e) {
    e.preventDefault()

    let bodyObj = {
        input: input.value,
        
    }

    newCompliment(bodyObj)

    input.value = ''
}
