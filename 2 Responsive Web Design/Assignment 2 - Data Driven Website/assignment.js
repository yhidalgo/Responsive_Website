
var categoryTemplate, animalsTemplate, detailedAnimalTemplate;

var currentCategory = animals_data.category[0];
var currentAnimal = currentCategory.animals[0];

function showTemplate(template, data) {
   var html = template(data);
   $("#content").html(html);
}

$(document).ready(function(){
   categoryTemplate = Handlebars.compile($("#categoryTemplate").html());
   animalsTemplate = Handlebars.compile($("#animalsTemplate").html());
   detailedAnimalTemplate = Handlebars.compile($("#detailedAnimalTemplate").html());
   
   function viewDetailedAnimal(currentAnimal) {
      showTemplate(detailedAnimalTemplate,currentAnimal);
      $(".my-js-navigationTab").removeClass("active");
      $("#my-js-detailedAnimalTab").addClass("active");
      $(".my-js-currentCategory").html(currentCategory.name);
   }
   $("#my-js-detailedAnimalTab").click(function(){
      viewDetailedAnimal(currentAnimal);
   });
   
   function viewAnimals(currentCategory){
      showTemplate(animalsTemplate,currentCategory);
      $(".my-js-navigationTab").removeClass("active");
      $("#my-js-animalsTab").addClass("active");
      $(".my-js-animal").click(function () {
         var currentAnimalIndex = $(this).data("id");
         currentAnimal = currentCategory.animals[currentAnimalIndex];
         viewDetailedAnimal(currentAnimal);
      });
   };
   $("#my-js-animalsTab").click(function() {
      viewAnimals(currentCategory);
   });
   $(".my-js-categoryBreadcrumb").click(function() {
      alert("Hi");
      viewAnimals(currentCategory);
   });
   
   $("#my-js-categoryTab").click(function () {
      showTemplate(categoryTemplate,animals_data);
      
      $(".my-js-navigationTab").removeClass("active");
      $("#my-js-categoryTab").addClass("active");
      
      $(".my-js-category").click(function () {
         var currentCategoryIndex = $(this).data("id");
         currentCategory = animals_data.category[currentCategoryIndex];
         viewAnimals(currentCategory);
      });
   });
   $(".my-js-allCategoriesBreadcrumb").click(function () {
      alert("Hi");
      $("#my-js-categoryTab").click();
   });
   
   $("#my-js-categoryTab").click();
});

