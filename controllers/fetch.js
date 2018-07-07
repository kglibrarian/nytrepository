// Controller for our scraper
// ============================

var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(articles) {        
        // then insert articles into the db
        return db.Article.create(articles)
          .then(createdArticles => console.log("Scraped and inserted")
          .catch(err => console.log("Error in inserting scraped articles", err))
        );
        
      })
      .then(function(createdArticles) {
        if (createdArticles.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {
          // Otherwise send back a count of how many new articles we got
          res.json({
            message: "Added " + createdArticles.length + " new articles!"
          });
        }
      })
      .catch(function(err) {
        // This query won't insert articles with duplicate headlines, but it will error after inserting the others
        res.json({
          message: "Possible scrape error/no articles to insert!!"
        });
      });
  }
};