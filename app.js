var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var outputBtn = document.querySelector('#output-btn');
var outputBox = document.querySelector('#output-box');


outputBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var init = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateStocks(init, qty, curr);
}

function calculateStocks(initial, quantity, current)
{
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial)*100;

        output(`Ohh you are is loss business of ${loss} with ${lossPercentage}%`);
    }
    else if(initial < current)
    {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial)*100;
        output(`Woww!! you have a profit of ${profit} with ${profitPercentage}%`);
    }
    else
    {
        output(`No gain No pain`);
    }
}

function output(mssg){
    outputBox.innerHTML = mssg;
}