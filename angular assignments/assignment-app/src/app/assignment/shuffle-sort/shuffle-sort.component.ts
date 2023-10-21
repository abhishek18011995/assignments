import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shuffle-sort',
  templateUrl: './shuffle-sort.component.html',
  styleUrls: ['./shuffle-sort.component.scss']
})
export class ShuffleSortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  let inputArr = [
    {
       val: 1,
       className: "color1"
    },
    {
       val: 2,
       className: "color2"
    },
    {
       val: 3,
       className: "color3"
    },
    {
       val: 4,
       className: "color2"
    },
    {
       val: 5,
       className: "color3"
    },
    {
       val: 6,
       className: "color4"
    },
    {
       val: 7,
       className: "color4"
    },
    {
       val: 8,
       className: "color1"
    },
    {
       val: 9,
       className: "color3"
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

}
