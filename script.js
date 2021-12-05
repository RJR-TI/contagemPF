function calcularAPF() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const TD = document.querySelector("#tr").value;
  const TR = document.querySelector("#td").value;

  // //ALI
  if (type == "") {
    PF = "Sem informações";
    document.write(PF);
  }

  if (
    (type == "ali" && TD <= 50) ||
    (type == "ali" && TD <= 20 && TR == NULL)
  ) {
    let PF = " ALI => complexidade: Baixa PF = 7";
    document.write(PF);
  }

  if (type == "ali" && TR >= 6 && TD >= 20) {
    let PF = "ALI => complexidade: Média PF = 10";
    document.write(PF);
  }

  if (type == "ali" && TR >= 2 && TD >= 51) {
    let PF = "ALI => complexidade: Alta PF = 15";
    document.write(PF);
  }

  //AIE
  if (
    (type == "aie" && TD <= 50) ||
    (type == "aie" && TD <= 20 && TR == undefined)
  ) {
    let PF = "AIE => complexidade: Baixa PF = 5";
    document.write(PF);
  }

  if (type == "aie" && TR >= 6 && TD >= 20) {
    let PF = "AIE => complexidade: Média PF = 7";
    document.write(PF);
  }

  if (type == "aie" && TR >= 2 && TD >= 51) {
    let PF = "AIE => complexidade: Alta PF = 10";
    document.write(PF);
  }

  //SE
  if (
    (type == "se" && TR <= 3 && TD <= 5) ||
    (type == "se" && TD >= 0 && TR <= 3)
  ) {
    let PF = "SE => complexidade: Baixa PF = 4";
    document.write(PF);
  }

  if (type == "se" && TR <= 3 && TD <= 19) {
    let PF = "SE => complexidade: Média PF = 5";
    document.write(PF);
  }

  if (type == "se" && TR >= 2 && TD >= 20) {
    let PF = "SE => complexidade: Alta PF = 7";
    document.write(PF);
  }

  //   CE
  if (type == "ce" && TR <= 3 && TD <= 19) {
    let PF = "CE => complexidade: Média PF = 4";
    document.write(PF);
  } else if (
    (type == "ce" && TR <= 3 && TD <= 5) ||
    (type == "ce" && TD >= 0 && TR <= 3)
  ) {
    let PF = "CE => complexidade: Baixa PF = 3";
    document.write(PF);
  } else if (type == "ce" && TR >= 2 && TD >= 20) {
    let PF = "CE => complexidade: Alta PF = 6";
    document.write(PF);
  }

  //EE
  if (type == "ee" && TR <= 2 && TD <= 4) {
    let PF = "EE => complexidade: Baixa PF = 3";
    document.write(PF);
  }

  if (type == "ee" && TR >= 3 && TD <= 4) {
    // Comp: Média;
    // PF= 5;
    let PF = "EE => complexidade: Média PF = 4";
    document.write(PF);
  }

  if (type == "ee" && TR >= 2 && TD >= 16) {
    // Comp: Alta;
    // PF= 7;
    let PF = "EE => complexidade: Alta PF = 6";
    document.write(PF);
  }
}
