// this is my solution, which is way longer than it needs to be.
console.log(text.replace(/((\s|^)')|('(\s|$))/g, str => {
	if (str.match(/\s'/)) return " \"";
  if (str.match(/'\s/)) return "\" ";
  else return "\"";
}));

// this is the example solution from the book, which is better.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
