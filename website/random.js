const min = document.getElementById("inputMin")
const max = document.getElementById("inputMax")
const butt = document.getElementById("butt")
const err = document.getElementById("err")

function generate(MIN, MAX) {
    MIN = MIN || 1
    MAX = MAX || 100

    console.log(MIN,MAX)
    let rand = 0
    rand = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    console.log(rand)
    return { rand, MIN, MAX }
}

butt.onclick = function () {
    let { rand, MIN, MAX } = generate(Number(min.value), Number(max.value))
   console.log(rand)
    document.getElementById("rrr").textContent = String(rand)
    min.value = String(MIN)
    max.value = String(MAX)
}