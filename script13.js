// bool = durum
var sayı1 = 5;
var sayı2 = 8;


var bool1 = sayı1 > sayı2;
document.write(bool1);
document.write("<br/>")

var bool2 = sayı1 < sayı2;
document.write(bool2);
document.write("<br/>")

var bool3 = sayı1 == sayı2;
document.write(bool3);
document.write("<br/>")

var bool4 = sayı2 > sayı1 && sayı2 % 2 == 0; // && ve operatörü
document.write(bool4);
document.write("<br/>")

var bool5 = sayı2 > sayı1 || sayı2 % 2 == 0; // || veya operatörü = en az birisi doğru olacak
document.write(bool5);
document.write("<br/>")