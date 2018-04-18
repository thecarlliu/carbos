const Nightmare = require("nightmare");

new Nightmare({ show: true })
    .viewport(800, 600)
    .goto("https://carbos.herokuapp.com/") //goes to carbos site

//TODO:
//HOME PAGE TESTS
//Add tests that check that the user lands on the appropriate page by taking a screen shot when the appropriate item is clicked.

//These are all NavBar- Footer- Homepage Content- related):
//I've added the appropriate id's that you will need for these tests.

// 1. Checks to see that the logo icon in the header sends us to the homepage.
//      id = "nav-logo"

// 2. Checks that each section (Docs, Templates, Forum, Meet the Team) in the header takes us to the correct page.
//      id's = "nav-tab-docs", "nav-tab-templates", "nav-tab-forum", "nav-tab-team"

// 3. Checks that each footer link to a section takes us to the correct page.
//      id's = "footer-tab-docs", "footer-tab-templates", "footer-tab-forum", "footer-links-team"

// 4. Checks that each card below the main display on the homepage takes us to the correct page.
//      id's = "home-section-docs", "home-section-templates", "home-section-forum"

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