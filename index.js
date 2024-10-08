let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'
document.write("i="+i)
document.write("</br>")
document.write("f="+f)
document.write("</br>")
document.write("b="+b)
document.write("</br>")
document.write("s="+s)
document.write("</br>")
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
document.write("</br>")
function check(){
    let a = prompt("nhập số a");
    let b = prompt("nhập số b");
    a = parseFloat(a);
    b = parseFloat(b);
    if (b === 0){
        alert("số b không được bằng 0");
        return;

    }
    if (a % b === 0) {
        alert(a + " là bội số của " + b);
    } else {
        alert(a + " không phải là bội số của " + b);
    }
}


