function createFullName(HTMLList) {
    let fullName = "";
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === "P" && element.innerText) {
            if (fullName) {
                fullName = fullName.concat(" ")
            }
            fullName = fullName.concat(`${element.innerText}`);
        }
    }
    return `"${fullName}"`;
}

const sectionList = document.getElementById("sectionList").children;
// const firstList = document.getElementById("list1").children;

function showList(list) {
    let string = "";
    for (let i = 0; i < list.length; i++) {
        const elementList = list[i];
        if (elementList.tagName === "H3") {
            string = string.concat(`${elementList.innerText}: `)
        }
        if (elementList.tagName === "DIV") {
            string = string.concat(
                createFullName(elementList.children) + "\n"
            )
        }
    }
    return string
}

console.log(showList(sectionList))

// console.log(createFullName(firstList));

// let integrantes = document.getElementsByTagName("h3");
// let integranteNum = "";
// function integrante() {
//     for (let i = 0; i < integrantes.length; i++) {
//         integranteNum = integranteNum + integrantes[i].innerText + "\n";
//     }
//     return integranteNum
// }
// console.log(integrante())
const exampleString = "Marcos Ariel"
console.log(exampleString.includes("arcos")) // true

function getDuplicateStrings() {
    let color;
    const dataCollection = document.getElementsByTagName("p");
    const firstPeopeNames = [];
    const secondPeopeNames = [];
    for (let index = 0; index < 2; index++) {
        firstPeopeNames.push(dataCollection[index]); 
    }
    for (let index = 4; index < 6; index++) {
        secondPeopeNames.push(dataCollection[index]); 
    }
    for (let index = 0; index < firstPeopeNames.length; index++) {
        const name = firstPeopeNames[index];
        for (let i = 0; i < secondPeopeNames.length; i++) {
            const name2 = secondPeopeNames[i];
            if (name.innerText === name2.innerText && (name.innerText || name2.innerText)) {
                if (color === undefined) {
                    color = window.prompt("Elija un color por favor:")
                }
                name.style = `color: ${color}`
                name2.style = `color: ${color}`
            }
        }
    }
}

getDuplicateStrings()