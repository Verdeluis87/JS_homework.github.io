// from data.js
var tableData = data;
// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

function init() {
    var newdata = data.filter(function(x) {
        return x.datetime == `1/1/2010`
    });
    newdata.forEach((sight) => {
        var row = tbody.append("tr");
        Object.entries(sight).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
}

function clearTable()
{
 document.getElementById('table').innerHTML="";
}

// Submit Button handler
function handleSubmit() {
    // @TODO: YOUR CODE HERE
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Filter the data
    clearTable();
    filterdata();

};

function filterBy(item, attr) {
    var value = d3.select(`#${attr}`).node().value.trim().toLowerCase();
    return !value || item[attr] === value;
}

function filterdata(){
    var newdata = data.filter(function(x) {
        return filterBy(x, 'datetime') &&
            filterBy(x, 'city') &&
            filterBy(x, 'state') &&
            filterBy(x, 'country') &&
            filterBy(x, 'shape');
    });

    newdata.forEach((sight) => {
        var row = tbody.append("tr");
        Object.entries(sight).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

// Add event listener for submit button
// @TODO: YOUR CODE HERE
var shapes = [];
data.forEach(function(item) {
    if (!shapes.includes(item.shape)) {
        shapes.push(item.shape);
    }
}); 

shapes.sort();

shapes.forEach(function(item) {
    d3.select('#shape')
        .append("option")
        .attr('value', item)
        .text(item);
});

var states = [];
data.forEach(function(item) {
    if (!states.includes(item.state)) {
        states.push(item.state);
    }
}); 

states.sort();

states.forEach(function(item) {
    d3.select('#state')
        .append("option")
        .attr('value', item)
        .text(item);
});

var countries = [];
data.forEach(function(item) {
    if (!countries.includes(item.country)) {
        countries.push(item.country);
    }
}); 

countries.sort();

countries.forEach(function(item) {
    d3.select('#country')
        .append("option")
        .attr('value', item)
        .text(item);
});

var cities = [];
data.forEach(function(item) {
    if (!cities.includes(item.city)) {
        cities.push(item.city);
    }
}); 

cities.sort();

cities.forEach(function(item) {
    d3.select('#city')
        .append("option")
        .attr('value', item)
        .text(item);
});

d3.select("#filter-btn").on("click",handleSubmit);
init();