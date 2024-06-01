let son1 = Number(prompt("Birinchi son kiriting"));
let son2 = Number(prompt("Birinchi son kiriting"));

let amal = Number(prompt(`Amallarni kiriting:
1: qoshish.
2: ayirish.
3: kopaytirish.
4: bolish.
5: amalni Tanlang:(1/2/3/4):  
`));


if (amal === 1) {
    alert(`${son1} + ${son2} = ${son1 + son2}`);
}

if (amal === 2) {
    alert(`${son1} - ${son2} = ${son1 - son2}`);
}

if (amal === 3) {
    alert(`${son1} * ${son2} = ${son1 * son2}`);
}

if (amal === 2) {
    alert(`${son1} / ${son2} = ${son1 / son2}`);
}
