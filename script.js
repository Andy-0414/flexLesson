var direction = document.getElementsByName("flex-direction")
var justify = document.getElementsByName("justify-content")
var align = document.getElementsByName("align-items")
var wrap = document.getElementsByName("flex-wrap")

var body = document.getElementsByClassName("body")[0]
var boxList = document.getElementById("boxList")
var append = document.getElementById("append")
var remove = document.getElementById("delete")

var directionSpan = document.getElementById("direction")
var justifySpan = document.getElementById("justify")
var alignSpan = document.getElementById("align")
var wrapSpan = document.getElementById("wrap")

var directionResult = "row"
var justifyResult = "center"
var alignResult = "center"
var wrapResult = "wrap"

var currentIdx = 2

function setHtmlCode() {
    var str = ""
    for (let i = 1; i <= currentIdx; i++) {
        str += `    &lt;<b>div</b> class="box"&gt;${i}&lt;/<b>div</b>&gt;`
        if (i != currentIdx) str += "\n"
    }
    console.log(str)
    boxList.innerHTML = str
}
append.addEventListener("click", e => {
    if (currentIdx < 10) {
        var div = document.createElement("div")
        div.classList.add("box")
        div.innerText = ++currentIdx;
        body.appendChild(div)
        setHtmlCode()
    }
})
remove.addEventListener("click", e => {
    if (currentIdx > 2) {
        currentIdx--
        body.removeChild(body.lastChild)
        setHtmlCode()
    }
})


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
wrap.forEach(x => {
    x.addEventListener("change", e => {
        setFlex(null, null, null, e.target.value)
    })
})

function setFlex(d, j, a, w) {
    if (d) directionResult = d
    if (j) justifyResult = j
    if (a) alignResult = a
    if (w) wrapResult = w

    directionSpan.innerHTML = directionResult
    justifySpan.innerHTML = justifyResult
    alignSpan.innerHTML = alignResult
    wrapSpan.innerHTML = wrapResult

    body.style.flexWrap = wrapResult
    body.style.flexDirection = directionResult
    body.style.justifyContent = justifyResult
    body.style.alignItems = alignResult
}