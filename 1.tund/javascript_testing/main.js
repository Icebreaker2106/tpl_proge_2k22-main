function costOfSmoking() {
    
    var howManyCigsPerDay = window.prompt("How many cigarettes do you smoke per day?");
    var howManyYearsSmoked = window.prompt("How many years have you been smoking?");
    var howMuchCostsOnePack = window.prompt("How much costs one pack of cigarettes?");

    var cigsInPack = 20;

    var howManyCigsInWholeLife = howManyCigsPerDay * howManyYearsSmoked * 365;
    var howMuchMoneyWasted = howManyCigsInWholeLife * howMuchCostsOnePack / cigsInPack;


    alert("You have smoked " + howManyCigsInWholeLife + " cigarettes in your whole life and it cost you " + howMuchMoneyWasted + " euros")
} 