function calculator() {
    var a = document.square.square_a.value
    var b = document.square.square_b.value
    var c = document.square.square_c.value
    var sol = document.getElementById(' square_sol')

    if (b == '-') {
        string = a - c
    } else if (b == '+') {
        string = Number(+a + +c)
    } else if (b == '*') {
        string = a * c
    } else if (b == '/') {
        string = a / c
    }
    square_sol.innerHTML = string;
}