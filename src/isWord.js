function isWord(str) {
  const regex = /^(\S[\w'"]*)$/g.test(str);
  if (regex) {
    return true;
  } else return false;
}

module.exports = isWord;
