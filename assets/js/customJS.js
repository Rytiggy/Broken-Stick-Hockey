$(document).ready(function () {
  console.log("ready!");
  $("#myCarousel").carousel({ interval: 3000 });

  setupContact(bshData.objects[0]);
  setupFooter(bshData.objects[1]);
  // setupW2W(bshData.objects[2]);
  // setupLocations(bshData.objects[3]);
  setupAbout(bshData.objects[4]);
  setupHomepage(bshData.objects[5]);

  $('.dropdown-submenu a.test').on("click", function (e) {
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
  let refereeInformation = $('#referee-information-description');
  let assumptions = $('#assumptions-description');
  let concussion = $('#concussion-description');
  let concussionPdf = $('#concussion-pdf')
  let waivePdf = $('#waive-pdf')
  let howitworks = $('#how-it-works-description')

  title.text(data.title)
  description.html(data.content)
  rules.html(data.metadata.rules_and_policies)
  refereeInformation.html(data.metadata.referee_info)
  assumptions.html(data.metadata.assumption_of_risk)
  concussion.html(data.metadata.electronic_waive)
  howitworks.html(data.metadata.how_it_works)
  concussionPdf.attr('src', data.metadata.concussion_pdf.url + '#toolbar=0&navpanes=0&scrollbar=0')
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

  title.text(data.title)
  description.html(data.content)
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




let bshData = {
  "objects": [{
    "_id": "5a6fdcfe58fef24f12c5a205",
    "slug": "contact",
    "title": "Contact",
    "content": "<section id=\"test\"><h5 id=\"contact-description\">For any questions, comments, or concerns, please contact us at <a href=\"mailto:ktedesco@brokenstickshockey.com\" id=\"contact-email\"> ktedesco@brokenstickshockey.com</a></h5><p><br></p></section><section id=\"features\"><br></section>",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-30T02:48:30.324Z",
    "created_by": "5a6e24c35787ca4f70a8c52e",
    "created": "2018-01-30T02:48:30.324Z",
    "status": "published",
    "modified_at": "2018-02-04T18:55:07.050Z",
    "modified_by": "5a6fa86556668b7382230bfb",
    "publish_at": null,
    "metadata": null
  },
  {
    "_id": "5a6fcb46e5a74324778540a4",
    "slug": "footer",
    "title": "Footer",
    "content": "<p>Providing the Buffalo, NY area with the best possible pick-up hockey experience.</p>",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-30T01:32:54.313Z",
    "created_by": "5a6e24c35787ca4f70a8c52e",
    "created": "2018-01-30T01:32:54.313Z",
    "status": "published",
    "modified_at": "2018-02-04T17:34:13.134Z",
    "modified_by": "5a6fa86556668b7382230bfb",
    "publish_at": null,
    "metadata": {
      "footer_location": "<p>39 Hilltowne Dr<br>Orchard Park, NY 14127</p>",
      "footer_email": "ktedesco@brokenstickshockey.com"
    }
  },
  {
    "_id": "5a6e842a58fef24f12c59fc0",
    "slug": "week-to-week",
    "title": "Players",
    "content": "",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-29T02:17:14.288Z",
    "created_by": "5a6e25855787ca4f70a8c536",
    "created": "2018-01-29T02:17:14.288Z",
    "status": "published",
    "modified_at": "2018-02-05T13:24:47.809Z",
    "modified_by": "5a6e24c35787ca4f70a8c52e",
    "publish_at": null,
    "metadata": {
      "goalie_title": "Goalies ",
      "goalies_description": "<p>At Broken Sticks Hockey we feel goalies are a key part to the success of the pick-up experience we are striving to create. It is essential to have a goalie on each team in order to ensure a great experience for all players. Therefor we don&rsquo;t feel goalies should have to pay to play. That&rsquo;s right, goalies play for free! This is a great way to learn to play that position you&rsquo;ve always wondered about, or just freshen up on your goal tending skills. Please email us with the date of the game you are interested in playing in and we will let you know if the spot is available.</p>"
    }
  },
  {
    "_id": "5a6e841158fef24f12c59fbd",
    "slug": "locations",
    "title": "Locations",
    "content": "<p><strong><span style=\"font-size: 18px;\">Northtown Center</span></strong><br><span style=\"font-size: 14px;\">1615 Amherst Manor Dr.<br>Williamsville, NY 14221</span><br><span style=\"font-size: 14px;\">(716) 631-7555</span><br><br><strong><span style=\"font-size: 18px;\">Holiday Twin Rinks</span></strong><br>3465 Broadway St.<br>Cheektowaga, NY 14227<br>(716) 685-3660</p>",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-29T02:16:49.033Z",
    "created_by": "5a6e25855787ca4f70a8c536",
    "created": "2018-01-29T02:16:49.033Z",
    "status": "published",
    "modified_at": "2018-03-02T16:56:01.548Z",
    "modified_by": "5a6fa86556668b7382230bfb",
    "publish_at": null,
    "metadata": null
  },
  {
    "_id": "5a6e3e9b58fef24f12c59f92",
    "slug": "about-us",
    "title": "About us",
    "content": "<section id=\"rules\"><p>Broken Sticks Hockey was created in 2018 by founder Kyle Tedesco. &quot;I learned to play ice hockey in a similar styled pick-up league while living out of state. It was a great way to meet friends and get involved in a community of like minded people. When I moved home to Buffalo, I felt we were lacking that style of pick-up hockey. I created this company with hopes of bringing that type of community to my home town and providing Buffalo&#39;s players with a great pick-up experience.&quot;<br><br></p></section>",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-28T21:20:27.646Z",
    "created_by": "5a6e24c35787ca4f70a8c52e",
    "created": "2018-01-28T21:20:27.646Z",
    "status": "published",
    "modified_at": "2018-03-02T19:38:09.797Z",
    "modified_by": "5a6fa86556668b7382230bfb",
    "publish_at": null,
    "metadata": {
      "how_it_works": "<table style=\"margin-right: calc(10%); width: 90%;\"><tbody><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\"><strong><span style=\"font-size: 14px;\">1.</span></strong>Sign up for the game you want to play through the Week-To-Week section of our website.</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\"><span style=\"font-size: 14px;\"><strong>2.</strong></span> You will be prompted to read and agree to the ASSUMPTION OF RISK, WAIVER OF LIABILITY, INDEMNITY AGREEMENT &amp; PHOTO/VIDEO RELEASE FORM during checkout. Make sure to fully read and understand it, check and agree to the TERMS OF SERVICE.</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\"><span style=\"font-size: 14px;\"><strong>3.</strong></span> Receive a receipt after completing the booking process.</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\"><strong><span style=\"font-size: 14px;\">4.</span></strong> Show up to the rink and a Team Sheet will be posted on each locker room door assigning you to either the &quot;Dark&quot; or &quot;White&quot; team (bring both a dark and white jersey).</div></td></tr><tr><td><div style=\"text-align: center;\"><strong><span style=\"font-size: 14px;\">5.</span></strong> Enjoy an hour of ice time with your teammates!</div></td></tr></tbody></table>",
      "rules_and_policies": "<section id=\"rules\"><p><strong><span style=\"font-size: 18px;\">Rules</span></strong><br>USA Hockey Rules 2021-2025. The full list of rules can be found <a href=\"https://www.usahockeyrulebook.com/page/7463/official-rules-casebook-2025-2029\">here</a>. With the following modifications, unless otherwise noted for any particular game<br>- We do not allow fighting, &nbsp;checking, or any intentional body contact.<br>- Each game is a running clock of 45 minutes with a 5-minute warm up before the clock begins.<br>- Each team will be limited to 12 skaters max and 1 goalie.<br>- Games will end in a tie, there will be no overtime or shootouts.<br><br><strong><span style=\"font-size: 18px;\">Zero Tolerance Policy for Fighting, Game Misconduct and Match Penalties</span></strong><br>Anyone involved with a fight in or off the ice, a game misconduct penalties and/or a match penalties will result in immediate ejection from the game and may result in a lifetime ban from Broken Sticks Hockey events.<br><br><strong><span style=\"font-size: 18px;\">Amount of Ice time</span></strong><br>Each game has an hour of ice time. First will be a Zamboni cleaning, followed by a 5-minute warm-up, followed by a running clock of around 48 minutes of play time.<br><br><strong><span style=\"font-size: 18px;\">Level of Skill</span></strong><span style=\"font-size: 18px;\"><br></span>Currently, we are offering &quot;Novice Level&quot; hockey. We consider that to be ranging anywhere from &quot;learning to play&quot; to &quot;freshening up your skills&quot;. Most of our players have little to no college-level experience, are rusty and looking to pick it back up, and under 5 years experience. These are just loose guidelines, every player excels at a different rate. The best way to see if you are a good fit for this level is by playing! With week-to-week non-commitment hockey, you aren&#39;t signing up for more than an hour at a time. As the company grows we hope to offer multiple skill levels.<br><br><strong><span style=\"font-size: 18px;\">Attendance Policy</span></strong><br><span style=\"font-size: 14px;\">Broken Sticks Hockey is committed to providing all players with the best possible pick-up experience. In order for us to ensure a full bench and 2 goalies, we enforce our attendance policy and ask that you try your very best to attend the games you sign up for. We understand things happen and offer refunds up to 72 hours prior to puck drop. if you can not attend, send us an email letting us know the game you signed up for and are no longer able to attend and we will refund your method of payment. If you need to cancel for any reason within the 72-hour mark, we apologize but are unable to provide a refund due to you reserving a spot we most likely won&#39;t be able to refill within that short of a time frame. We do appreciate an email letting us know you won&#39;t be able to attend.&nbsp;</span><br><br><strong><span style=\"font-size: 18px;\">Theft Policy</span></strong><br>We have a zero-tolerance policy towards theft from anyone involved in a Broken Sticks Hockey event including but not limited to any of the rinks, players, and referees. Criminal charges may be pressed against any individualizes involved.<br><br><span style=\"font-size: 18px;\"><strong>Identification Policy</strong></span><br>You may be asked to provide a valid form of ID to the referee before the game. This is to ensure your safety in that the person playing is the person who signed up and read over the waiver. Please be prepared with a valid ID in case the referee inquires.<br><br><span style=\"font-size: 18px;\"><strong>Age Requirement</strong></span><br>Broken Sticks Hockey is an adult hockey league. For the safety of you and the other players, absolutely no one under the age of 18 is allowed to participate. We apologize for any inconveniences.<br><br></p><strong><span style=\"font-size: 18px;\">Required Equipment</span></strong></section><table style=\"margin-left: calc(0%); margin-right: calc(41%); width: 59%;\"><tbody><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Helmet</div><div style=\"text-align: center;\"><span style=\"font-size: 10px;\">(HECC-approved and has a chin strap securely fastened). Goalies must have a proper face cage/shield.</span></div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Gloves</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Chest protector (goalies)</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Padded pants or girdle</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Skates</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Shin pads (skaters) or leg pads (goalies)</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Elbow pads</div></td></tr><tr><td style=\"width: 100.0000%;\"><section style=\"text-align: center;\">Protective cup</section></td></tr><tr><td style=\"width: 100.0000%;\"><section style=\"text-align: center;\">Jersey&nbsp;</section><section style=\"text-align: center;\"><span style=\"font-size: 10px;\">(Bring both a dark and a white to ensure you are able to play on the team you are designated to)</span></section></td></tr></tbody></table><section style=\"text-align: center;\"><br></section><section><p><strong>The following equipment is optional but strongly recommended</strong></p><table style=\"background-color: rgb(255, 255, 255); margin-left: calc(0%); margin-right: calc(55%); width: 45%;\"><tbody><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Shoulder pads</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Face shield/cage (skaters)</div></td></tr><tr><td style=\"width: 100.0000%;\"><div style=\"text-align: center;\">Mouth guard</div></td></tr></tbody></table><p style=\"text-align: center;\"><br><br><br></p></section>",
      "referee_info": "<section id=\"faq\"><p>Each game will have a referee. Our referees are trained and practice USA Hockey rules.</p></section><section id=\"faq\"><br></section><section id=\"assumptions\"><br></section>",
      "electronic_waive": "",
      "waive_pdf": {
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/2c367620-1e4a-11e8-89e4-db7642b320e6-Assumption of Risk, Waiver of Liability, Indemnity Agreement, & Photo Video Release Form.pdf",
        "imgix_url": "https://cosmic-s3.imgix.net/2c367620-1e4a-11e8-89e4-db7642b320e6-Assumption of Risk, Waiver of Liability, Indemnity Agreement, & Photo Video Release Form.pdf"
      },
      "concussion_protocol": "<p><a class=\"fr-file\" href=\"https://s3-us-west-2.amazonaws.com/cosmicjs/e0d706e0-0549-11e8-a7a3-511d0c67a414-Broken Sticks Hockey Concussion Protocal.pdf\">Broken Sticks Hockey Concussion</a></p>",
      "concussion_pdf": {
        "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f4b829f0-0576-11e8-acc0-af9a96981b22-e0d706e0-0549-11e8-a7a3-511d0c67a414-Broken Sticks Hockey Concussion Protocal.pdf",
        "imgix_url": "https://cosmic-s3.imgix.net/f4b829f0-0576-11e8-acc0-af9a96981b22-e0d706e0-0549-11e8-a7a3-511d0c67a414-Broken Sticks Hockey Concussion Protocal.pdf"
      }
    }
  },
  {
    "_id": "5a6e251e5787ca4f70a8c534",
    "slug": "home-titl",
    "title": "Buffalo Pick-Up Hockey",
    "content": "",
    "bucket": "5a6e24fb9210b869e159b4d4",
    "type_slug": "pages",
    "created_at": "2018-01-28T19:31:42.292Z",
    "created_by": "5a6e24c35787ca4f70a8c52e",
    "created": "2018-01-28T19:31:42.293Z",
    "status": "published",
    "modified_at": "2018-02-04T19:07:46.841Z",
    "modified_by": "5a6fa86556668b7382230bfb",
    "publish_at": null,
    "metadata": {
      "homepage_description": "<p>Broken Sticks Hockey was created to bring a great pick-up hockey experience to the Buffalo, NY area. We feel that if done right, pick-up hockey can be a great experience ranging from learning how to play to getting some extra ice time in between your league games. We strive to give players that experience in many ways such as, hiring trained referees who enforce clean hockey polices, limiting the amount of players per side to ensure a competitive amount of ice time, and doing our very best to find committed players and goalies to ensure a full bench and a goalie on each side. In addition to providing a clean, competitive game we want to provide a completely non-commitment experience that allows people to sign up week to week with complete flexibility to work around their own schedule.&nbsp;</p>",
      "info_layer_one_title": "Week To Week",
      "info_layer_one_description": "Check our calendar to find our next game. Sign up to play one game at a time! Completely flexible around your schedule. ",
      "info_layer_two_title": "Competitive",
      "info_layer_two_description": "2 goalies per game.\nMax of 12 players per team.\n1 hour of ice time.",
      "info_layer_three_title": "Clean Hockey",
      "info_layer_three_description": "Referee for each game. Non contact hockey. Zero tolerance policy towards fighting."
    }
  }
  ],
  "total": 6
}
