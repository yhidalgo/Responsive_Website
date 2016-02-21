
var categoryTemplate, animalsTemplate;

var currentCategory = animals_data.category[0];

function showTemplate(template, data) {
   var html = template(data);
   $("#content").html(html);
}

$(document).ready(function(){
   categoryTemplate = Handlebars.compile($("#categoryTemplate").html());
   animalsTemplate = Handlebars.compile($("#animalsTemplate").html());
   //TODO: animalsTemplate
   
   
   $("#my-js-categoryTab").click(function () {
      showTemplate(categoryTemplate,animals_data);
      
      $(".my-js-navigationTab .active").removeClass("active");
      $("#my-js-categoryTab").addClass("active");
      
      $(".my-js-category").click(function () {
         var currentCategoryIndex = $(this).data("id");
         currentCategory = animals_data.category[currentCategoryIndex];
         
         showTemplate(animalsTemplate,currentCategory);
         
         $(".my-js-navigationTab").removeClass("active");
         $("#my-js-animalsTab").addClass("active");
         
         
      });
   });
   
   $("#my-js-categoryTab").click();
});

