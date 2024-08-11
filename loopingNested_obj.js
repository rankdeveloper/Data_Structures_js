const obj = {
  id: 1,
  name: "rohit sharma",
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    office: {
      plot: "#23",
      area: "IT",
    },
    hometown: {
      houseNo: "#232",
      village: "Majari",
      District: "Something",
    },
  },
};

function myFunction(obj) {
  let finalObj = {};
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      myFunction(obj[key]);
    } else {
      finalObj[key] = obj[key];
      console.log(obj[key]);
    }
  }
}
console.log(myFunction(obj));
