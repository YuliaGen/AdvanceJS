let initialData = JSON.parse(localStorage.getItem('initialData'));
  if (initialData === null) {
    initialData = [];
  } else {
    initialData = JSON.parse(localStorage.getItem('initialData'));
  }
  console.log(initialData);

  const pUsers2 = document.querySelector('.userValues2');
  function printValues(initialData) {
    for (let k in initialData) {
      if (initialData[k] instanceof Object) {
        printValues(initialData[k]);
      } else {
        if (k === "product") {
          pUsers2.innerHTML += "<br /> Наименование: <br />" + initialData[k] + "<br />";
        } else {
          pUsers2.innerHTML += "Комментарий: <br />" + initialData[k] + "<br />";
        };
      };
    };
  };
  printValues(initialData);
  
  const pUsers = document.querySelector('.userValues');
 
  const butS = document.getElementById("subm1");
 
  butS.addEventListener("click", () => {
    const inp = document.getElementById("theme");
    const inp2 = document.getElementById("textUser");
    const newProd = inp.value;
    const newText = inp2.value;
    const newProdObj = {
      product: newProd,

      text: newText,

    };
    initialData.push(newProdObj);
    localStorage.setItem('initialData', JSON.stringify(initialData, null, 2));
    console.log(initialData);
    console.log(JSON.stringify(initialData));
    console.log(JSON.stringify(initialData, null, 2));
    pUsers2.innerHTML = ' ';
    printValues(initialData);
  });
