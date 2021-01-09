/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
var searchTerm = "";
var numRecords = 0;
var startYear = 0;
var endYear = 0; 


function buildQueryURL() {
    var inputField = $('#searchTerm');
    console.log(inputField);
    var numberOfResults = $('#recordsCount');
    console.log(numberOfResults);
    var startYear = $('#startYear');
    console.log(startYear)
    var endYear = $('#endYear');
    console.log(endYear);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + inputField + "&" + 'begin_date=' + startYear + "0101" + "&" + "end_date=" + endyear + "1231" + "&api-key=63EeL0GaSAhcm7C0625KMimB7g8SGdvN";

    return queryURL;
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing NYT API data
 */
function updatePage(NYTData) {
  
}

// Function to empty out the articles
function clear() {
  $("#article-section").empty();
}

$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // Empty the region associated with the articles
  clear();

  // Build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);

});


// .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
