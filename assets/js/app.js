const selectCar = document.getElementById("selectCar");
const all = [...document.querySelectorAll(".all")];

const onCarselect = (eve) => {
  const selectCars = eve.target.value;
  console.log(selectCars);
  all.forEach((div) => div.classList.add("d-none"));
  let selectDiv = [...document.querySelectorAll("." + selectCars)];
  console.log(selectDiv);
  selectDiv.forEach((div) => div.classList.remove("d-none"));
};
if (selectCar) {
  selectCar.addEventListener("change", onCarselect);
}
