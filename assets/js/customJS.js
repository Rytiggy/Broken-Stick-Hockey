$( document ).ready(function() {
    console.log( "ready!" );



    $.ajax({
        url: 'https://api.cosmicjs.com/v1/broken-sticks-hockey/object-type/pages?pretty=true&hide_metafields=true',
        type: 'get',
        dataType: 'json',
        error: function(data){
        },
        success: function(data){
          //do something with data 
          setupHomepage(data.objects[3]) 
          setupAbout(data.objects[2])
          setupLocations(data.objects[1])
          setupW2W(data.objects[0])
        }
    });







 $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });



});





function setupHomepage(data) {
    let title = $('#home-title');
    let description = $('#home-description');
    let upcomingSchedule = $('#upcoming-schedule-title');
    console.log(data.metadata.upcoming_schedule)
    title.text(data.title)
    description.text(data.metadata.homepage_description)
    upcomingSchedule.html(data.metadata.upcoming_schedule)
}




function setupAbout(data) {
    let title = $('#about-title');
    let description = $('#about-description');
    let rules = $('#rules-description');
    let faq = $('#faq-description');
    let assumptions = $('#assumptions-description');
    let concussion = $('#concussion-description');

    
    title.text(data.title)
    description.html(data.content)
    rules.html(data.metadata.rules_and_policies)
    faq.html(data.metadata.faq)
    assumptions.html(data.metadata.assumption_of_risk)
    concussion.html(data.metadata.concussion_protocol)

}


function setupLocations(data) {
    let title = $('#locations-title');
    let description = $('#locations-description');
    title.text(data.title)
    description.html(data.content)
}




function setupW2W(data) {
    let title = $('#week-to-week-title');
    let description = $('#week-to-week-description');
    title.text(data.title)
    description.html(data.content)
}

