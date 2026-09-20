const txt = "lorem ipsum dolor si";

function First_five_char() {
  return txt.substring(0, 5);
}

function Three_to_eight() {
  return txt.substring(2, 8);
}

function From_five() {
  return txt.substring(4);
}

function From_five_thrught_six() {
  return txt.substring(4, 10);
}

function Upper() {
  return txt.toUpperCase();
}

function Snd_upper() {
  let masodik = "";

  for (let i = 0; i < txt.length; i++) {
    if (i % 2 === 1) {
      masodik += txt[i].toUpperCase();
    } else {
      masodik += txt[i];
    }
  }

  return masodik;
}

function Re_e() {
  return txt.replaceAll("e", "E");
}

function Sp_e() {
  return txt.split("e");
}

console.log("Eredeti szoveg: " + txt);
console.log("1, Az első öt karakter: " + First_five_char());
console.log("2, 3-tól 8-ig: " + Three_to_eight());
console.log("3, 5-tól végig: " + From_five());
console.log("4, 5-tól 6 karkater hosszan: " + From_five_thrught_six());
console.log("5, Nagybetűs:" + Upper());
console.log("6, Minden második nagybetű: " + Snd_upper());
console.log("7, Minden e cserélve E-re: " + Re_e());
console.log("8, E betűk szerint elválasztva: " + Sp_e());
