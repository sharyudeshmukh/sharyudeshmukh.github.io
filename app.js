console.log('Is this working?');

let viz;
let workbook;
let activeSheet;

// Add Share Link to Tableau Public here
const url = "https://public.tableau.com/views/Caloriesupplybyfoodgroup/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        try {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
            console.log("My dashboard is interactive");
        } catch (error) {
            console.error("Error during first interaction:", error);
        }
    }
};

// Create a function to generate the viz element
function initViz() {
    try {
        console.log('Executing the initViz function!');
        viz = new tableau.Viz(vizContainer, url, options);
    } catch (error) {
        console.error("Error initializing Tableau viz:", error);
    }
}

// Run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);
