module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.map(item => item.join(''));

  for (let i = 0; i < brackets.length; i++) {

    if( str.includes(brackets[i]) ) {
      str = str.replace(brackets[i], '');
      i = -1;
    }
  }

  return str.length == 0 ? true : false
}
