let inputArr = [
   {
      val: 1,
      className: "one"
   },
   {
      val: 2,
      className: "two"
   },
   {
      val: 3,
      className: "three"
   },
   {
      val: 4,
      className: "four"
   },
   {
      val: 5,
      className: "five"
   },
   {
      val: 6,
      className: "six"
   },
   {
      val: 7,
      className: "seven"
   },
   {
      val: 8,
      className: "eight"
   },
   {
      val: 9,
      className: "nine"
   }
]

// Shuffle array element logic
function shuffleArray(arr) {
   for (let i = arr.length - 1; i > 0; i--)
   {
      let j = Math.floor(Math.random() * i);
      let k = arr[i];
      arr[i] = arr[j];
      arr[j] = k;
   }

   return arr;
}

// Sort array of object based on value
function sortArray(arr) {
   return arr.sort((item1, item2) => item1.val - item2.val);
}

// Transform the card elements based on param
function transformCards(cardElements) {
   let cardContainer = document.querySelector('.cards');
   for (let i = 0; i < cardContainer.children.length; i++)
   {
      cardContainer.children[i].className = `card ${cardElements[i].className}`;
      cardContainer.children[i].innerHTML = `${cardElements[i].val}`;
   }
}

function shuffleCards() {
   const cardElements = shuffleArray(inputArr);
   transformCards(cardElements);
}

function sortCards() {
   const cardElements = sortArray(inputArr);
   transformCards(cardElements);
}