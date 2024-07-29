let outline = ["You can ", "Be yourself, ", "Never stop "];
let quotes0 = [
  "accomplish anything you set your mind to.",
  "reach your goals.",
];
let quotes1 = [
  "it feels good.",
  "not what others want you to be.",
  "everyone else is taken.",
];
let quotes2 = ["reaching for your goals.", "being you."];

const pickQuote = (list) => {
  let randomNum = Math.floor(Math.random() * list.length);
  return list[randomNum];
};

const finalQuote = () => {
  let currentOutline = pickQuote(outline);
  if (currentOutline === outline[0]) {
    return currentOutline + pickQuote(quotes0);
  } else if (currentOutline === outline[1]) {
    return currentOutline + pickQuote(quotes1);
  } else {
    return currentOutline + pickQuote(quotes2);
  }
};

console.log("Here is an inspirational quote:");
console.log('"' + finalQuote() + '"');
