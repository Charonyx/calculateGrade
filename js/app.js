function createInput() {
    var numSubject = document.getElementById('numSubject').value;
    for (var i = 0; i < numSubject; i++) {
        document.getElementById('insertInput').innerHTML = "eiei" + i;
        // document.getElementsByName('insertInput').

        console.log(i);
    }
}

function calGrade() {
    // var unit1 = (document.getElementById('unit1').value) * (document.getElementById('grade1').value);
    // var unit2 = (document.getElementById('unit2').value) * (document.getElementById('grade2').value);
    // var unit3 = (document.getElementById('unit3').value) * (document.getElementById('grade3').value);
    // var unit4 = (document.getElementById('unit4').value) * (document.getElementById('grade4').value);
    // var unit5 = (document.getElementById('unit5').value) * (document.getElementById('grade5').value);
    // alert(unit1);

    var GPAX    = 0;    //เกรดเฉลี่ย
    var GPA     = 0;    //เกรดแต่ละวิชา
    var unitAll = 0;    //หน่วยกิตทั้งหมด
    var grade   = document.getElementsByName('grade');
    var unit    = document.getElementsByName('unit');

    for (var i = 0; i < unit.length; i++) {
        if (unit[i].value != 0 && grade[i].value != 0) {
            unitAll += parseInt(unit[i].value);
            GPA     += parseFloat(unit[i].value) * parseFloat(grade[i].value);

            console.log('unit: ' + unit[i].value);
            console.log('unitAll: ' + unitAll);
            console.log('------\n');
        }
    }
    GPAX = GPA / unitAll; 
    console.log('GPAX: ' + GPAX);
    document.getElementById('result').value = GPAX;
    // document.getElementById('result2').innerHTML = GPAX;

    //ui    -> navbar div container position color
}