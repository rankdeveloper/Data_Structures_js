function sortPeople(names, height) {
  return names
    .map((n, h) => n + height[h])
    .sort((a, b) => b.match(/\d+/) - a.match(/\d+/))
    .join(" ")
    .replace(/[0-9]/g, "")
    .split(" ");
}

const names = ["Bumrah", "Rohit", "Shreyas"];
const height = [168, 165, 170];

console.log(sortPeople(names, height));
