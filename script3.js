const sum1 = document.getElementById("sum1");
const sum2 = document.getElementById("sum2");
const sum3 = document.getElementById("sum3");
const sum4 = document.getElementById("sum4");
const sum45 = document.getElementById("sum45");
const sum98 = document.getElementById("sum98");

const v1 = document.getElementById('input0');
const v2 = document.getElementById('input1');
const v3 = document.getElementById('input2');
const v4 = document.getElementById('input3');
const v5 = document.getElementById('input4');
const v6 = document.getElementById('input5');
const v7 = document.getElementById('input6');
const v8 = document.getElementById('input7');
const v9 = document.getElementById('input8');

function sum() {

  var summary1, summary2, summary3, summary4;
  summary1 = sum1.innerText = 0 + parseInt(v1.value) + parseInt(v2.value) + parseInt(v4.value) + parseInt(v5.value);
  summary2 = sum2.innerText = 0 + parseInt(v2.value) + parseInt(v3.value) + parseInt(v5.value) + parseInt(v6.value);
  summary3 = sum3.innerText = 0 + parseInt(v4.value) + parseInt(v5.value) + parseInt(v7.value) + parseInt(v8.value);
  summary4 = sum4.innerText = 0 + parseInt(v5.value) + parseInt(v6.value) + parseInt(v8.value) + parseInt(v9.value);

  sum98.innerText = summary1 + summary2 + summary3 + summary4
  sum45.innerText = 0 + parseInt(v1.value) + parseInt(v2.value) + parseInt(v3.value) + parseInt(v4.value) + parseInt(v5.value) + parseInt(v6.value) + parseInt(v7.value) + parseInt(v8.value) + parseInt(v9.value)
}

function check() {

}

const inputs = document.getElementsByTagName('input');

const arr = Array.from(inputs);
arr.forEach(input => {
  input.addEventListener('input', function (e) {
    sum();
  });
});