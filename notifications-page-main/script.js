
let read = document.getElementById("read");
console.log("opa")


read.addEventListener("click", () => {
  document.querySelectorAll(".unread").forEach((e) => {
    console.log(e);
    e.classList.remove("unread")
  })
  document.querySelectorAll(".dot").forEach(e => {
    console.log(e)
    e.classList.remove("dot")
  })
  document.getElementById("three").innerText = "0"
})