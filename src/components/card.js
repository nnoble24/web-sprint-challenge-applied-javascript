const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  const articleWrapper = document.createElement('div');
 const headlineDiv = document.createElement('div');
 const authorDiv = document.createElement('div');
 const imgContainer = document.createElement('div');
 const authorPhotoTag = document.createElement('img');
 const authorSpan = document.createElement('span');

 articleWrapper.classList.add("card");
 headlineDiv.classList.add("headline");
 authorDiv.classList.add("author");
 imgContainer.classList.add("img-container");

headlineDiv.textContent = article.headline;
authorPhotoTag.src = article.authorPhoto;
authorSpan.textContent = article.authorName;

articleWrapper.appendChild(headlineDiv);
articleWrapper.appendChild(authorDiv);
authorDiv.appendChild(imgContainer);
imgContainer.appendChild(authorPhotoTag);
authorDiv.appendChild(authorSpan);

articleWrapper.addEventListener('click', () => console.log(article.headline))

return articleWrapper;


}

const cardAppender = (selector) => {

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardC = document.querySelector(selector);
  fetch('http://localhost:5001/api/articles')
  .then(response => response.json()
  )
  .then(data => {
    console.log(data)
    for (let article in data.articles) {
      for (let item of data.articles[article]) {
        const cards = Card(item);
        cardC.appendChild(cards);
      }
    }
    
  })
  return cardC
}

export { Card, cardAppender }
