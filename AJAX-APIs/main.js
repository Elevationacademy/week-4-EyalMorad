/*
//Exercise 1
const fetch = function(userIsbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${userIsbn}`,
        success: function(data){
            console.log(data)
        },
        error: function(xhr, text, error){
            console.log("Error!")
        }
    })
}
let isbn = prompt("Enter the ISBN: ")
fetch(isbn)



//Exercise 2
const fetch = function(queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(data){
            console.log(data)
        },
        error: function(xhr, text, error){
            console.log("Error!")
        }
    })
}
let qType = prompt("Enter the queryType: ")
let qValue = prompt("Enter the queryValue: ")
fetch(qType,qValue)



//Exercise 3
const fetch = function(queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(data){
            let items=data.items
            items.forEach(element =>{
                console.log(`Book Tile: ${element.volumeInfo.title}, Author: ${element.volumeInfo.authors[0]}, ISBN: ${element.volumeInfo.industryIdentifiers[0]}`)
            })
           
        },
        error: function(xhr, text, error){
            console.log("Error!")
        }
    })
}
let qType = prompt("Enter the queryType: ")
let qValue = prompt("Enter the queryValue: ")
fetch(qType,qValue)
*/


//Exercise 4
