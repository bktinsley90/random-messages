const randomQuote = () => {
  let quoteArray = ['“First, solve the problem. Then, write the code.” – John Johnson', '“Experience is the name everyone gives to their mistakes.” – Oscar Wilde', '“ In order to be irreplaceable, one must always be different” – Coco Chanel', '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann', '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon', '“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov', '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House']

  const messageGenerator = () => {
    let random = Math.ceil(Math.random() * quoteArray.length)
    return quoteArray[random];
  }
  document.querySelector('p').innerText = messageGenerator()

}