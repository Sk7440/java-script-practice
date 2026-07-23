function calculator(val) {
  if (val <= 2) return "$5";
  else if ((val <= 5)) return "$10";
  else if(val<=10)return "$20"
  else if(val>10) return"$35"
}

console.log(calculator(9))