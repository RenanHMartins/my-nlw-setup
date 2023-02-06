const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

let tpopup = document.getElementById("tpopup")
let fpopup = document.getElementById("fpopup")

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    fpopup.classList.add("open-fpopup")
    setTimeout(closePopup, 5000)
    return
  }

  tpopup.classList.add("open-tpopup")
  setTimeout(closePopup, 5000)
  nlwSetup.addDay(today)
}
function closePopup() {
  fpopup.classList.remove("open-fpopup")
  tpopup.classList.remove("open-tpopup")
}
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   gym: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
