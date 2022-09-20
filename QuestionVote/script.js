//Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCgvS6n6BioJ_H9zgUqqr_w9LJlwXyWDbc",
    authDomain: "scalerproblemsolvingproject.firebaseapp.com",
    projectId: "scalerproblemsolvingproject",
    storageBucket: "scalerproblemsolvingproject.appspot.com",
    messagingSenderId: "375857095655",
    appId: "1:375857095655:web:0cc6ce80b1a89c11f2d342",
    measurementId: "G-65YXBZCXFJ"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let database = getDatabase()



//-------- Keep updating the number of save buttons -----------//
let saveButton = document.getElementsByClassName("btn-outline-success")
let rowButton = document.getElementsByClassName("btn-block")[0]


function updateButtons() {
    saveButton = document.getElementsByClassName("btn-outline-success")
}


class TableClass {
    constructor(Table) {
        this.Table = Table
    }

    addRow(element_list) {
        // Creating elements
        let psDiv = element_list[0]
        let day_topic = element_list[1]
        let textArea1 = element_list[2]
        let textArea2 = element_list[3]
        let thumbsUp = element_list[4]
        let guid = element_list[5]
        let saveBtn = element_list[6]

        //Adding class or ID and Attributes to the element
        psDiv.classList.add("form-floating")

        textArea1.classList.add("form-control")
        textArea1.setAttribute("id", "floatingTextarea")
        textArea2.classList.add("form-control")
        textArea2.setAttribute("id", "floatingTextarea")

        psDiv.appendChild(textArea1)
        day_topic.appendChild(textArea2)

        thumbsUp.setAttribute("class", "like_button")

        guid.setAttribute("type", "text")
        guid.classList.add("form-control")
        guid.setAttribute("placeholder", "Guid Name")

        saveBtn.setAttribute("type", "button")
        saveBtn.setAttribute("class", "btn btn-outline-success")
        saveBtn.innerHTML = "SAVE"


        n = table.rows.length;                                  //Finding number of rows


        //Adding rows and cells in the table
        let row = table.insertRow(-1)
        let sn = row.insertCell(0)
        let ps = row.insertCell(1)
        let topic = row.insertCell(2)
        let votes = row.insertCell(3)
        let vouteUp = row.insertCell(4)
        let trainer = row.insertCell(5)
        let save = row.insertCell(6)


        //Appending created elements into the table rows
        sn.innerHTML = n;
        topic.appendChild(day_topic)
        ps.appendChild(psDiv)
        votes.innerHTML = 0
        vouteUp.appendChild(thumbsUp)
        trainer.appendChild(guid)
        save.appendChild(saveBtn)
        updateButtons()


        //--------------Updating Save Buttons after adding new from class-----------------//

        Array.from(saveButton).forEach(button => {
            button.addEventListener('click', () => {
                // console.log(button.cellIndex)
                // this.saveData()
            })
        })

    }

    saveData() {
        let serialNumber = table.rows[n].cells[0].innerHTML
        console.log(serialNumber)
    }


}


//-------------------------- Out From Class ------------------------------//

let table = document.getElementsByClassName("table")[0]         //Table instance
let n = 0

const tableObj = new TableClass(table)


function createTableElement() {
    let psDiv = document.createElement("div")                   //Question name
    let day_topic = document.createElement("div")               //Day and Topic
    const textArea1 = document.createElement("textarea")        //Text Area for Question name
    const textArea2 = document.createElement("textarea")        //Text Area for Day and Topic
    const thumbsUp = document.createElement("button")           //For UpVote
    const guid = document.createElement("input")                //For Guid name
    const saveBtn = document.createElement("button")            //Save Button
    return [psDiv, day_topic, textArea1, textArea2, thumbsUp, guid, saveBtn]
}


rowButton.addEventListener('click', () => {
    let element_list = createTableElement()
    tableObj.addRow(element_list)
})


Array.from(saveButton).forEach(button => {
    button.addEventListener('click', () => {
        tableObj.saveData()
    })
})

// document.querySelector("td").forEach(cell =>{
//     cell.addEventListener('click', () => {
//         console.log(cell.cellIndex)
//     })
// })