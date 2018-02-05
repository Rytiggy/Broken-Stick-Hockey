$( document ).ready(function() {
    console.log( "ready!" );



    $.ajax({
        url: 'https://api.cosmicjs.com/v1/broken-sticks-hockey/object-type/pages?pretty=true&hide_metafields=true',
        type: 'get',
        dataType: 'json',
        error: function(data){
        },
        success: function(data){
            console.log(data)
          //do something with data 
            setupContact(data.objects[0])
            setupFooter(data.objects[1])
            setupW2W(data.objects[2])
            setupLocations(data.objects[3])
            setupAbout(data.objects[4])
            setupHomepage(data.objects[5])


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

    let infoOneTitle = $('#three-item-row-two-one');
    let infoOneDiscription = $('#three-item-row-one');
    let infoTwoTitle = $('#three-item-row-two-title');
    let infoTwoDiscription = $('#three-item-row-two');
    let infoThreeTitle = $('#three-item-row-three-title');
    let infoThreeDiscription = $('#three-item-row-three');




    console.log(data.metadata.upcoming_schedule)
    title.text(data.title)
    description.html(data.metadata.homepage_description)

    infoOneTitle.text(data.metadata.info_layer_one_title)
    infoOneDiscription.text(data.metadata.info_layer_one_description)

    infoTwoTitle.text(data.metadata.info_layer_two_title)
    infoTwoDiscription.text(data.metadata.info_layer_two_description)

    infoThreeTitle.text(data.metadata.info_layer_three_title)
    infoThreeDiscription.text(data.metadata.info_layer_three_description)

}




function setupAbout(data) {
    console.log(data)
    let title = $('#about-title');
    let description = $('#about-description');
    let rules = $('#rules-description');
    let faq = $('#faq-description');
    let assumptions = $('#assumptions-description');
    let concussion = $('#concussion-description');
    let concussionPdf = $('#concussion-pdf')
    let waivePdf = $('#waive-pdf')
    let howitworks = $('#how-it-works-description')
    
    title.text(data.title)
    description.html(data.content)
    rules.html(data.metadata.rules_and_policies)
    faq.html(data.metadata.referee_info)
    assumptions.html(data.metadata.assumption_of_risk)
    concussion.html(data.metadata.electronic_waive)
    howitworks.html(data.metadata.how_it_works)
    concussionPdf.attr('src', data.metadata.concussion_pdf.url+ '#toolbar=0&navpanes=0&scrollbar=0')
    waivePdf.attr('src', data.metadata.waive_pdf.url + '#toolbar=0&navpanes=0&scrollbar=0')


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
    let goaliesTitle = $('#week-to-week-goalies-title');
    let goaliesDescription = $('#week-to-week-goalies-description');

    title.text(data.title)
    description.html(data.content)
    goaliesTitle.text(data.metadata.goalie_title)
    goaliesDescription.html(data.metadata.goalies_description)
}




function setupFooter(data) {
    let footerAddress = $('#footer-address');
    let footerDescription = $('#footer-description');
    let footerEmail = $('#footer-email');

    
    footerDescription.html(data.content)
    footerAddress.html(data.metadata.footer_location)
    footerEmail.text(data.metadata.footer_email)

}


function setupContact(data) {
    let contactTitle = $('#contact-title');
    let contactDescription = $('#contact-description');

    
    contactTitle.html(data.title)
    contactDescription.html(data.content)

}

