const Nightmare = require("nightmare");

new Nightmare({ show: true })
    .viewport(800, 600)
    .goto("https://carbos.herokuapp.com/") //goes to carbos site

//TODO:

//HOME PAGE TESTS
//Add tests that check that the user lands on the appropriate page by taking a screen shot when the appropriate item is clicked.

nightmare
  .viewp(800, 600)
  .goto("https:/carbos.herokuapp.com")

//These are all NavBar- Footer- Homepage Content- related):
//I've added the appropriate id's that you will need for these tests.

// 1. Checks to see that the logo icon in the header sends us to the homepage.
//      id = "nav-logo"
  .click("#nav-logo")
  .wait("#nav-logo")
  .screenshot("homepage")
// 2. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-docs""nav-tab-templates", "nav-tab-forum", "nav-tab-team"
// 2a. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-docs"
  .click("#nav-tab-docs")
  .wait("#nav-tab-docs")
  .screenshot("navtab") 
//2b. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-templates"
  .click("#nav-tab-templates")
  .wait("#nav-tab-templates")
  .screenshot("navtemplates")
// 2c. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-forum"
  .click("#nav-tab-forum")
  .wait("#nav-tab-forum")
  .screenshot("navforum") 
// 2d. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-team"
  .click("#nav-tab-team")
  .wait("#nav-tab-team")
  .screenshot("navteam") 

//--------------------------------------------------------------------------------
// 3. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-tab-docs", "footer-tab-templates", "footer-tab-forum", "footer-links-team"
// 3a. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-tab-docs"
  .click("#footer-tab-docs")
  .wait("#footer-tab-docs")
  .screenshot("footerdocs") 

// 3b. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-tab-templates"
  .click("#footer-tab-templates")
  .wait("#footer-tab-templates")
  .screenshot("footertemplates") 
// 3c. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-tab-forum"
  .click("#footer-tab-forum")
  .wait("#footer-tab-forum")
  .screenshot("footerforum") 

// 3d. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-links-team"
  .click("#footer-links-team")
  .wait("#footer-links-team")
  .screenshot("footerteam") 


// 4. Checks that each card below the main display on the homepage takes us to the correct page.
//      id's = "home-section-docs", "home-section-templates", "home-section-forum"
// 4a. Checks that each footer link to a section takes us to the correct page.
//      id's = "home-section-docs"
  .click("#home-section-docs")
  .wait("#home-section-docs")
  .screenshot("homedocs") 
// 4b. Checks that each footer link to a section takes us to the correct page.
//      id's = "home-section-templates"
  .click("#home-section-templates")
  .wait("#home-section-templates")
  .screenshot("hometemplates") 
// 4c. Checks that each footer link to a section takes us to the correct page.
//      id's = "home-section-forum"
  .click("#home-section-forum")
  .wait("#home-section-forum")
  .screenshot("homeforum") 

//Review the screenshots and make sure those tests are working
//More tests to come once our other website capabilities are implemented.

//--------------------------------------------------------------------------------

// End test
    .end()
// Execute commands
    .then(function() {
        console.log("Done!");
    })
    // Catch errors
    .catch(function(err) {
        console.log(err);
    });