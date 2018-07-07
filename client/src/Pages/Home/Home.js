import React, {Component} from 'react';
import API from './../../utils/API';
import Article from './../../Component/Article';
import "./Home.css";

class Home extends Component {
    state = {
        articles: [],
        savedArticles: [],
        q: "",
        start_year: "",
        end_year: "",
    }

    // lifecycles
    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
        this.fetchArticles();

    }

    // my methods
    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
        .then(res =>
            this.setState({
                articles: res.data,
            })
        )
        .catch(err => console.log(err));
    }

    fetchArticles = () => {
        API.scrapeArticle().then(fetchedArticles => {
            console.log(fetchedArticles)
        })
    }

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => {this.getSavedArticles();this.getArticles()});
    }


    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
            this.setState({
                savedArticles: res.data
            })
        )
        .catch(err => console.log(err));
    }

    deleteArticles = id => {
        API.deleteArticle(id)
        .then(res => 
        this.getSavedArticles()
    )
    .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbo-color">
                    <div className="container">
                        <h1 className="display-4">New York Times Article App </h1>
                        <p className="lead">Search for and save articles of interest.</p>
                    </div>
                </div>
                <div className = "card d-flex  m-2 p-2 bd-highlight">
                    <div className="card-header box-title"  >Current NYT Articles</div>
                    {this.state.articles.map(article => (
                        <Article
                            key={article._id}
                            _id={article._id}
                            title={article.headline.main}
                            url={article.web_url}
                            date={article.pub_date}
                            handleClick={this.handleArticleSave}
                            buttonText="Save Article"
                        />
                    
                    ))}
                    </div>

                <div className = "card d-flex  m-2 p-2 bd-highlight">
                    <div className="card-header box-title">Saved Articles</div>
                        {this.state.savedArticles.map(article => (
                            <Article
                                key={article._id}
                                _id={article._id}
                                title={article.title}
                                handleClick={this.deleteArticles}
                                buttonText="Delete Article"
                            />
                        ))} 
                </div>               
            </div>
        );
    };
}

export default Home;