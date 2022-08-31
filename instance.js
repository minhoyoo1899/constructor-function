// console.log("A");

const Instance = (name, age, gender, nation, race) => { // 첫 letter가 capital letter인경우 pascal face라고 하며 중요하다는 뜻 
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.nation = nation;
  this.race = race;
}

export default { Instance };