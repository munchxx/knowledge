$(document).ready(function () {
    const articleListContainer = $("#articleList");

    // Fetch and display articles dynamically
    fetchArticles().then(articles => {
        articles.forEach(article => {
            // Create a clone of the article template
            const articleTemplate = $("<iframe>").attr("src", `articles/${article.folder}/index.html`);

            // Append the article to the homepage
            articleListContainer.append(articleTemplate.contents());
        });
    });

    // Function to fetch article list (replace with actual logic)
    async function fetchArticles() {
        // Use fetch or any other method to get the list of articles
        // Return an array of article objects with title, date, tags, etc.
        return [
            { folder: 'article1', title: 'Article Title 1', date: 'January 1, 2023', tags: ['Tag1', 'Tag2'] },
            { folder: 'article2', title: 'Article Title 2', date: 'January 5, 2023', tags: ['Tag3', 'Tag4'] },
            // Add more articles as needed
        ];
    }
});