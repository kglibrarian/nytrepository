import axios from "axios";
import filterParams from "./filterParams";

export default {
    //Get articles from the NYT API
    getArticles: function(params) {
        return axios.get("/api/nyt", { params: filterParams(params) });
    },
    //Gets all saved articles 
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    //Delets the saved articles with the given id
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    //Saves an article to the database
    saveArticle: function(articleData){
        return axios.post("/api/articles", articleData);
    },
    scrapeArticle: function(){
        return axios.get("/api/fetch")
    }
};
