var dict = [
  {
    icon: "src/math.svg"
  },
  {
    icon: "src/book-outline.svg"
  },
  {
    icon: "src/history-brush.svg"
  },
  {
    icon: "src/science.svg"
  }
];

for (let i = 0; i < 4; i++) {
  document.getElementById(i).src = dict[i].icon;
}
