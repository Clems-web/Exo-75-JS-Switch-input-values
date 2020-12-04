let bouton = document.getElementById("switch");

bouton.addEventListener("click", function () {
    let text1 = document.getElementById("input1");
    let text2 = document.getElementById("input2");
    let text1_2 = text1.value;
    text1.value = text2.value;
    text2.value = text1_2;
});