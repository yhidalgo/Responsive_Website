
var categoryTemplate, animalsTemplate;

var currentCategory = animals_data.category[0];

function showTemplate(template, data) {
   var html = template(data);
   $("#content").html(html);
}

$(document).ready(function(){
   categoryTemplate = Handlebars.compile($("#categoryTemplate").html());
   //TODO: animalsTemplate
   
   
   $("#my-js-categoryTab").click(function () {
      showTemplate(categoryTemplate,animals_data);
   });
   
   $("#my-js-categoryTab").click();
});

