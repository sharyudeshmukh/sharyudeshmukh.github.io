console.log('Is this working?');

let viz;
let workbook;
let activeSheet;

// Create a function to generate the viz element
function loadViz(containerId, url) {
    try {
        const vizContainer = document.getElementById(containerId);
        const options = {
            hideTabs: true,
            height: 600, // Adjusted height to match the container
            width: '100%', // Adjusted width to match the container
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

        console.log('Executing the loadViz function for ' + containerId + '!');
        viz = new tableau.Viz(vizContainer, url, options);
    } catch (error) {
        console.error("Error initializing Tableau viz:", error);
    }
}

// Initial call to load the first dashboard when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadViz('vizContainer1', 'https://public.tableau.com/views/Caloriesupplybyfoodgroup/Dashboard1');

// Initial call to load the second dashboard when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadViz('vizContainer2', 'https://public.tableau.com/views/Shareofpopulationthatcannotaffordahealthydiet_17214254941400/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link');
});
