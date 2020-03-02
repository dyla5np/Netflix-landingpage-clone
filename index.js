const quesBtn = document.querySelectorAll("#question");
const ansBtn = document.querySelectorAll("#answer");

for (let i = 0; i < quesBtn.length; i++) {
  quesBtn[i].addEventListener("click", e => {
    return (
      ansBtn[i].classList.toggle("open"), quesBtn[i].classList.toggle("open")
    );
  });
}
