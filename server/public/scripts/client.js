$(document).ready(function(){
  console.log("Jquery Loaded!");

  init();
});

function init(){

    // set up all initial stuff

  loadAll();  // set up listeners
  enable();
}

function enable(){


  $('.patronus-form').on('submit', submitPatronus);
  $('.person-form').on('submit', submitPerson);



}
function submitPatronus(event){
  event.preventDefault();

  // store the information in the form in this object
  var formData = {};

 // serialize the form and loop through it's info,
 // creating keys in the formData object as we go
 var formArray = $('.patronus-form').serializeArray();
 formArray.forEach(function(element){
   formData[element.name] = element.value;
 });

 // send the data to the server to be saved
 $.ajax({
   type: 'POST',
   url: '/patroni',
   data: formData,
   success: function(response){
     console.log(response);

   }

 });

  console.log("clicked submit patronus");



}

function submitPerson(event){
  event.preventDefault();
  // store the information in the form in this object
  var formData = {};

 // serialize the form and loop through it's info,
 // creating keys in the formData object as we go
 var formArray = $('.person-form').serializeArray();

 formArray.forEach(function(element){
   formData[element.name] = element.value;
 });

 // send the data to the server to be saved
 console.log("form data =", formData);
 console.log("formArray =", formArray);

 $.ajax({
   type: 'POST',
   url: '/people',
   data: formData,
   success: function(response){
     console.log(response);



   }

 });

  console.log("clicked submit person");


}

function loadAll(){

  // show all the people and patroni, dropdown boxes

  // empty person-vestibule, patronus-vestibule, dropdown-vestibule;
  displayPeople();
  // displayPatroni();
  // populateDropdown();




}
function displayPeople(){
  $('.people-vestibule').empty();

  $.ajax({
    type: 'GET',
    url: '/people',

    success: function(response){
      console.log("in display people",response);
      appendPeople(response);

    }

  });
}
function appendPeople(response){
  response.forEach(function(){
    //start here
    
  })


}
