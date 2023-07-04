var dict = [
  {
    icon: "src/icon-reaction.svg"
  },
  {
    icon: "src/icon-memory.svg"
  },
  {
    icon: "src/icon-verbal.svg"
  },
  {
    icon: "src/icon-visual.svg"
  }
];

for (let i = 0; i < 4; i++) {
  document.getElementById(i).src = dict[i].icon;
}
