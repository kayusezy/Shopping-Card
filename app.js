var plusButtons = document.querySelectorAll(".plus-button");
var minusButtons = document.querySelectorAll(".minus-button");
var unitPrice = document.querySelector(".unit-price");
var fasHearts = document.querySelectorAll(".heart");
var totalValue = document.querySelector(".total")
var removeCards = document.querySelectorAll(".delete");

// plusButton.addEventListener("click", function() {
//     var counterPlus = document.getElementById("quantity");
//     counterPlus.textContent = parseInt(counterPlus.textContent) + 1;
//     var currentPrize = unitPrice.innerHTML;
//     var numericalCurrentPrize = parseInt(currentPrize);
//     if (counterPlus.textContent >= 1) {
//         var newPrice = numericalCurrentPrize + 10;
//         unitPrice.innerHTML = newPrice +  ' $';
//     }
      
// })
// 
plusButtons.forEach(function(plusButton) {
    plusButton.addEventListener("click", function() {
        var card = plusButton.closest(".card");
        var quantityElement = card.querySelector(".quantity");
        var unitPriceElement = card.querySelector(".unit-price");
        
        var currentQuantity = parseInt(quantityElement.textContent);
        var unitPrice = parseInt(unitPriceElement.textContent);
        
        quantityElement.textContent = currentQuantity + 1;
        unitPriceElement.textContent = (currentQuantity + 1) * 10 + " $"; // Adjust price logic

        calculateTotalPrice()

    });
});
// minusButton.addEventListener("click", function() {
//     var counterMinus = document.getElementById("quantity");
//     counterMinus.textContent = parseInt(counterMinus.textContent) - 1;
//     if (counterMinus.textContent < 0) {
//         counterMinus.textContent = 0;
//     }else{
//         var currentPrize = unitPrice.innerHTML;
//         var numericalCurrentPrize = parseInt(currentPrize);
//         var newPrice = numericalCurrentPrize - 10;
//         unitPrice.innerHTML = newPrice +  ' $';
        
//     }
// });
minusButtons.forEach(function(minusButton) {
    minusButton.addEventListener("click", function() {
        var card = minusButton.closest(".card");
        var quantityElement = card.querySelector(".quantity");
        var unitPriceElement = card.querySelector(".unit-price");
        
        var currentQuantity = parseInt(quantityElement.textContent);
        var unitPrice = parseInt(unitPriceElement.textContent);
        
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
            unitPriceElement.textContent = (currentQuantity - 1) * 10 + " $"; // Adjust price logic
        }

        calculateTotalPrice()
    });
});

fasHearts.forEach(fasHeart => {
    fasHeart.addEventListener("click", function() {
        if (fasHeart.classList.contains('text-dark')) {
            // If red, change to gray
            fasHeart.classList.remove('text-dark');
            fasHeart.classList.add('text-danger');
          } else {
            // If gray (or other color), change to red
            fasHeart.classList.remove('text-danger');
            fasHeart.classList.add('text-dark');
          }
    })
    
});
removeCards.forEach( function(removeCard) {
    removeCard.addEventListener('click', function() {
        var card = removeCard.closest(".card");
        card.remove();

        calculateTotalPrice(); // Update total price after removing a card
    }) 
});

function calculateTotalPrice() {
    var total = 0;
    var unitPrices = document.querySelectorAll(".unit-price");
    
    unitPrices.forEach(function(unitPriceElement) {
        var priceText = unitPriceElement.textContent.trim();
        var price = parseInt(priceText.substring(0, priceText.length - 2)); // Remove the " $" and parse as integer
        total += price;
    });
    
    // Update the total price display
    var totalPriceElement = document.querySelector(".total");
    totalPriceElement.textContent = total + " $";
}

// Initially calculate and display total price
calculateTotalPrice();
