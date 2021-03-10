const countries = [
  {
    country: "India",
    inhabitants: 1398496000,
  },
  {
    country: "China",
    inhabitants: 1404959000,
  },
  {
    country: "Indonesia",
    inhabitants: 269856000,
  },
  {
    country: "Estados Unidos",
    inhabitants: 330641000,
  },
];
/* 1 . Escribe el código JS necesario para pintar en 'info' el listado de países ordenados de mayor a menor población. */
const $info = document.getElementById("info");

const countriesSorted = countries.sort((paisA, paisB) =>
  paisA.inhabitants < paisB.inhabitants ? paisA : paisB
);
const countriesReversed = [...countriesSorted].reverse();

const $ol = document.createElement("ol");
const countriesList = countriesReversed.forEach((country) => {
  const $li = document.createElement("li");
  $li.innerHTML = `${country.country}`;

  $ol.appendChild($li);
});
$info.appendChild($ol);

/* 2. Escribe el código JS necesario para concatenar al contenido existente de los 2 primeros elementos de la lista, los 2 mayores números de habitantes  */
const $listItems = document.querySelectorAll("#info li");
for (let i = 0; i < 2; i++) {
  const element = $listItems[i];
  element.innerHTML = `${countriesReversed[i].country}  ${countriesReversed[i].inhabitants}`;
}

/* 3. Escribe el código JS necesario para desplazar el scroll de la web hasta el div 'info' */
const $scrollToInfo = document.createElement("button");
$scrollToInfo.innerText = "Scroll hacia Info";

document.body.appendChild($scrollToInfo);

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    $info.scrollIntoView(true, { behavior: "smooth" });
  }
});
