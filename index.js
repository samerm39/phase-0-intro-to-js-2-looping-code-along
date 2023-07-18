//test 1
function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
  }

  const names = ["Guadalupe", "Ollie", "Aki"];
  const eventName = "surprise";
  
  const cards = writeCards(names, eventName);
  console.log(cards);

  //test 2

  function countDown(number) {
    while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);