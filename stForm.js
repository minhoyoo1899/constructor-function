import manaStList from "./stinfo.js";

export default function stForm(list, arr, letter) {
  for (let i = 0; i < list.length; i++) {
    const number = i + 1;
    const setList = new manaStList(list[i], number);
    arr.push(setList);
    if (list[i][0] === letter) {
      setList.name = "피카츄";
      setList.number = number;
      // manaStList("피카츄", number);
      arr.push(setList);
    }
    
    // else {
    //   setList.name = list[i];
    //   setList.number = number;
    //   // manaStList(list[i], number);
    //   arr.push(setList);
    // }
  }
  //console.log(arr);
}