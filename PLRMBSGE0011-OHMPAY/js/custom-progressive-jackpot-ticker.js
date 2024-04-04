document.addEventListener('DOMContentLoaded', function () {
    function updateJackpotAmount(startAmount, increment) {
        var jackpotElement = document.getElementById('jackpotAmount');
        var currentAmount = parseFloat(jackpotElement.textContent.substring(0));
        var formatter = new Intl.NumberFormat();
        jackpotElement.textContent = '$' + formatter.format(startAmount.toFixed(2));

        setInterval(function () {
            currentAmount += increment;
            jackpotElement.textContent = '$' + formatter.format(currentAmount.toFixed(2));
        }, 10);
    }

    updateJackpotAmount(0, 0.01);
});
