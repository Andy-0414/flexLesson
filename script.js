
var direction = document.getElementsByName("flex-direction")
var justify = document.getElementsByName("justify-content")
var align = document.getElementsByName("align-items")

var body = document.getElementsByClassName("body")[0]

var directionSpan = document.getElementById("direction")
var justifySpan = document.getElementById("justify")
var alignSpan = document.getElementById("align")

var directionResult = "row"
var justifyResult = "center"
var alignResult = "center"

direction.forEach(x => {
    x.addEventListener("change", e => {
        setFlex(e.target.value, null, null)
    })
})
justify.forEach(x => {
    x.addEventListener("change", e => {
        setFlex(null, e.target.value, null)
    })
})
align.forEach(x => {
    x.addEventListener("change", e => {
        setFlex(null, null, e.target.value)
    })
})

function setFlex(d, j, a) {
    if (d) directionResult = d
    if (j) justifyResult = j
    if (a) alignResult = a

    directionSpan.innerHTML = directionResult
    justifySpan.innerHTML = justifyResult
    alignSpan.innerHTML = alignResult

    body.style.flexDirection = directionResult
    body.style.justifyContent = justifyResult
    body.style.alignItems = alignResult
}