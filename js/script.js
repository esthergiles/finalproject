/******************************************
  Name: Esther Brown
  CIS 376 Spring 2020
  Final Project
  Due: 5/3/2020
*****************************************/

$(function () {
  $(newCard);
  var score = 0;
  var cardCount = 0;

  const fill = document.querySelector(".fill");
  const empties = document.querySelectorAll(".empty");

  // Fill listeners
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
  }

  /***************************************
            Drag Functions
   ****************************************/
  function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);

    var offset = $(this).offset();
    var xPos = offset.left;
    var yPos = offset.top;
    console.log(xPos);
    console.log(yPos);
  }

  function dragEnd() {
    this.className = "card";
    var finalOffset = $(this).offset();
    var finalxPos = finalOffset.left;
    var finalyPos = finalOffset.top;
    console.log(finalxPos);
    console.log(finalyPos);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
  }

  function dragLeave() {
    this.className = "card slot";
  }

  function dragDrop() {
    this.className = "card";
   // this.append(fill);

    //checkEntry(); //event fires to check score
    
    
    if (cardCount < 10) 
      newCard();
    else displayScore();
  }

  /********************************
        Stack Creation
*********************************/
  // Create Card Object
  function card(suit, value, image) {
    this.suit = suit;
    this.value = value;
    this.image = image;
  }

  // Create s stack of cards
  var stack = [
    new card("Hearts", 2, "hearts"),
    new card("Hearts", 4, "hearts"),
    new card("Hearts", 6, "hearts"),
    new card("Hearts", 8, "hearts"),
    new card("Hearts", 10, "hearts"),
    new card("Spades", 2, "spades"),
    new card("Spades", 4, "spades"),
    new card("Spades", 6, "spades"),
    new card("Spades", 8, "spades"),
    new card("Spades", 10, "spades")
  ];

  //Random Num Gen
  function getRandom(num) {
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
  }


  function newCard() {
    var index = getRandom(10);
    var currentCard = stack[index];
    document.getElementById("card").innerHTML =
      '<img src="img/' +
      currentCard.image +
      '.png" alt = "card icon"><h2>' +
      currentCard.suit +
      "<p>" +
      currentCard.value +
      "</p></h2>";
    cardCount++;
  }

  /*********************************
          Scoring
  **********************************/

  function displayScore() {
    // document.getElementById("card").innerHTML =
    //   "<h3> Congrats! </br> Your Score is </h3><h2>" +
    //   score + "</h2><div><button id='reset'>Play Again</button></div>";
    document.getElementById("card").innerHTML =
      "<h3> Congrats! </br> Your Score is </h3><h2>" + score + "</h2>";
  }
  
  function checkEntry() {
    if (currentCard.suit == "Hearts" && xPos > finalxPos) score++;
    if (curentCard.suit == "Spades" && xPos < finalxPos) score++;
  }
  
  // document.getElementById("reset").addEventListener("click", reset);

  function reset() {
    cardCount = 0;
    score = 0;
    newCard();
  }
});
  
});
