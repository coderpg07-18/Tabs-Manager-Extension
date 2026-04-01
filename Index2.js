//  Browser Extension

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadFromLocalStorage) {

    myLeads = leadFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

        myLeads.push(tabs[0].url)   // accessValue => Array-Index-.key
        localStorage.setItem("myLeads", JSON.stringify( myLeads ))
    
        render(myLeads)
    });
    
})

function render(whichArr_Leads) {

    let listItems = ""

    for (let i = 0; i < whichArr_Leads.length; i++) {

        listItems +=
        `<li>
            <a target='_blank' href='${whichArr_Leads[i]}'>
                ${whichArr_Leads[i]}
            </a>
            <button class="delete-item" data-index="${i}">✕</button>
        </li>`
    }

    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {

    localStorage.clear()
    myLeads = []
 
    render(myLeads)
})


inputBtn.addEventListener("click", function() {  

    myLeads.push(inputEl.value)

    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})


ulEl.addEventListener("click", function(event) {

    // Check if the clicked element is the delete button
    if (event.target.classList.contains("delete-item")) {

        const itemIndex = event.target.dataset.index;  // Get the index of the item.

        myLeads.splice(itemIndex, 1);  // Remove Item

        // Update localStorage with the new array
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        
        render(myLeads);  // Re-render the updated list.
    }
});