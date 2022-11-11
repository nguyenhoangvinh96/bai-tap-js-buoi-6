//Bài 1: Tìm số chẵn/lẻ nhỏ hơn 100

function timSoChanLe() {
    for (var a = "", b = "", n = 0; n < 100; n++) {
        if ( n % 2 == 0) {
            a += n + " "
        }

    else { b += n +  " "}
    };
    document.getElementById("txtResult").innerHTML = "Số chẵn: " + a + "<br>  Số lẻ: " + b;
}

//Bài 2: Đếm số chia hết cho 3
function demSoChiaHetCho3() {
for ( var a = 0, n = 0; n < 1e3; n ++) {
    if ( n % 3 == 0) {
        a++;
    }
}
document.getElementById("txtResult2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + a + " số";   
}

//Bài 3: Tìm số nguyên dương nhỏ nhất
function findMin() {
    for ( var a = 0, b = 0, n = 1; n < 1e4; n++)
    if (((a += n), console.log(a), a > 1e4)) {
        console.log(n), (b = n);
    break;
    }
 document.getElementById("txtResult3").innerHTML = "Số nguyên dương nhỏ nhất: " + b;   
}

//Bài 4: Tính tổng
function tinhTong() {
    for (
        var a = document.getElementById("inputX").value,
        b = document.getElementById("inputN").value,
        n = 0,
        i = 1;
        i <= b;
        i++
    )
    n += Math.pow(a,i);
    document.getElementById("txtResult4").innerHTML = "Tổng: " + n;
}

//Bài 5: Tính giai thừa
function tinhGT() {
    for ( 
        var a = document.getElementById("inputN1").value,
    b = 1,
    n = 1;
    n <= a;
    n++
    )
    b *= n;
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + b;
}

//Bài 6: Tạo thẻ div
function taoDiv() {
    for (var a = "", b = 1; b <= 10; b++)
    a +=
    b % 2 == 0
          ? "<div class='bg-danger text-white p-2'>Div chẵn</div>"
       
           : "<div class='bg-primary text-white  p-2'>Div lẻ </div>"
    document.getElementById("txtResult6").innerHTML = a;
}

