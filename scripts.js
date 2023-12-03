$(document).ready(function () {
    loadArticles();
});

function loadArticles() {
    fetchArticles()
        .done(displayArticles)
        .fail(handleError);
}

function fetchArticles() {
    // Fetch a list of articles (you may need to adjust the path)
    return $.getJSON("articles-list.json");
}

function displayArticles(articles) {
    // Sort articles by date (assuming articles have a "date" property)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Display articles in the article-list container
    let articleListContainer = $("#article-list");
    $.each(articles, function (index, article) {
        let articleElement = $("<div>").html(`<a href="${article.path}"><h2>${article.title}</h2><p>${article.date}</p></a>`);
        articleListContainer.append(articleElement);
    });
}

function handleError(jqXHR, textStatus, errorThrown) {
    console.error("Error loading articles:", errorThrown);
}