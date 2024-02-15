// let suhu = 212;
// // suhu  = fahrenheit(suhu);
// result = celcius(suhu);

// console.log(result);

document.getElementById("button1").onclick = function () {
  let suhu;
  if (document.getElementById("radio1").checked) {
    suhu = document.getElementById("label1").value;
    suhu = Number(suhu)
    suhu = celcius(suhu)
    document.getElementById("labelhasil").innerHTML = `${suhu}°C`
  } else if (document.getElementById("radio2").checked) {
    suhu = document.getElementById("label1").value;
    suhu = Number(suhu)
    suhu = fahrenheit(suhu)

    document.getElementById("labelhasil").innerHTML = `${suhu}°F`
  } else {
    document.getElementById("labelhasil").innerHTML = "Pilih Salah Satu Dahulu";
  }
};

function fahrenheit(suhu){
  return (9 / 5) * suhu + 32;
}

function celcius(suhu) {
  return (5 / 9) * (suhu - 32);
}
