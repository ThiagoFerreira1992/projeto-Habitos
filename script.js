const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayexists = nlwSetup.dayExists(today)

  if (dayexists) {
    alert("Dia concluido💪🏽")
    retorn
  }
  alert("Adicionado com sucesso🏆")
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("projeto@app", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("projeto@app")) || {}

nlwSetup.setData(data)
nlwSetup.load()
