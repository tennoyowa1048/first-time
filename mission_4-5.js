function omikujishow(){
    var omikuji = ["大吉","中吉","吉","小吉","凶","大凶"];

    var number1 = Math.random();
    var number2 = number1 * 6;
    var number = Math.floor(number2);
    var result = omikuji[number];

    var object = document.getElementById("omikuji");
    object.innerText = result;
    alert("今日のあなたの運勢は" + result + "です!");
}