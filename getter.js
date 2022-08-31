import Instance from "./instance.js";


const mcuList = [
  {
    name: "Tony Stark",
    age: 50,
    gender: "male",
    nation: "US",
    race: "terran"
  },
  {
    name: "Steve Rodgers",
    age: 100,
    gender: "male",
    nation: "US",
    race: "terran"
  }
];
for (let i = 0; i < mcuList.length; i++) {
  const setting = new Instance(mcuList[i].name, mcuList[i].age, mcuList[i].gender, mcuList[i].nation, mcuList[i].race);
  
  console.log(setting);
}
//console.log(mcuList);