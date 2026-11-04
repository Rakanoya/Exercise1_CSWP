"use strict";

const languageURL = 'https://cs.appstate.edu/jas/3440/project/data_language.json';
const projectURL = 'https://cs.appstate.edu/jas/3440/project/data_projects.json';
const studyAbroadURL = 'https://cs.appstate.edu/jas/3440/project/data_study_abroad.json';

function start() {
    // Examples of calling getLanguage with filter arguments:
    // getLanguage(); 
    // getLanguage("French"); 
    // getLanguage("French", "med"); 
    getLanguage("", "", "or"); 
}

async function getLanguage(language = "", level = "low", searchName = "") {
    try {
        const header = ["Firstname", "Lastname", "Language", "Proficiency", "Email", "WebPage"];
        
        // Fetch data
        const response = await fetch(languageURL);
        let data = await response.json();

        // 1. Filter by Language
        if (language && language.trim() !== "") {
            data = data.filter(item => 
                item.Language.trim().toLowerCase() === language.trim().toLowerCase()
            );

            // 2. Filter by Proficiency Level (only if language is selected)
            const cleanLevel = level.trim().toLowerCase();
            if (cleanLevel === "med") {
                data = data.filter(item => {
                    const prof = item.Proficiency.trim().toLowerCase();
                    return prof === "med" || prof === "high";
                });
            } 
            else if (cleanLevel === "high") {
                data = data.filter(item => 
                    item.Proficiency.trim().toLowerCase() === "high"
                );
            }
        }

        // 3. Filter by Substring in Firstname OR Lastname
        if (searchName && searchName.trim() !== "") {
            const query = searchName.trim().toLowerCase();
            data = data.filter(item => {
                const firstNameMatch = item.Firstname.trim().toLowerCase().includes(query);
                const lastNameMatch = item.Lastname.trim().toLowerCase().includes(query);
                return firstNameMatch || lastNameMatch;
            });
        }

        // Generate and append table
        const table = getTable(header, data);
        const container = document.querySelector("#language");
        container.innerHTML = ""; // Clear existing table before rendering
        container.appendChild(table);

    } catch (error) {
        console.error("Error fetching language data:", error);
    }
}

function getTable(header, data) {
    const table = document.createElement("table");
    
    // Create Header Row
    const trHeader = document.createElement("tr");
    for (let key of header) {
        const th = document.createElement("th");
        th.textContent = key;
        trHeader.appendChild(th);
    }
    table.appendChild(trHeader);

    // Create Data Rows
    for (let item of data) {
        const tr = getRow(item);
        table.appendChild(tr);
    }

    return table;
}

function getRow(item) {
    const tr = document.createElement("tr");
    for (let i in item) {
        const td = document.createElement("td");
        td.textContent = item[i];
        tr.appendChild(td);
    }
    return tr;
}

start();
