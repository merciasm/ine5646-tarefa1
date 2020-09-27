class Article {
  constructor(list, article) {
    this.list = list
    this.articleTitle = article.title
    this.articleImage = article.image
    this.articleBody = article.content
  }

  createArticle() {
    const title = new ArticleTitle(this.articleTitle)
    const image = new ArticleImage(this.articleImage)
    const body = new ArticleBody(this.articleBody)
    const feedback = new LikeContainer().element
    const div = new Container().element

    div.appendChild(title.element)
    div.appendChild(image.element)
    div.appendChild(body.element)
    div.appendChild(feedback)
    this.list.appendChild(div)
  }
}

class ArticleTitle {
  constructor(title) {
    this.element = document.createElement('H2')
    this.element.innerText = title
    this.element.className = "post-title"
  }
}

class ArticleBody {
  constructor(content) {
    this.element = document.createElement('P')
    this.element.innerText = content
    this.element.className = "post-text"
  }
}

class ArticleImage {
  constructor(img) {
    this.element = document.createElement('IMG')
    this.element.src = img
    this.element.className = "post-image"
  }
}

class Container {
  constructor() {
    this.element = document.createElement("DIV")
    this.element.className = "post-container"
  }
}

class LikeContainer {
  constructor() {
      const likeButton = document.createElement('BUTTON')
      likeButton.className = 'like-button'

      const likeCounter = document.createElement('SPAN');
      likeCounter.innerHTML = '0';
      likeCounter.className = 'like-counter';

      this.element = document.createElement('DIV')
      this.element.className = "like-container"

      this.element.appendChild(likeButton);
      this.element.appendChild(likeCounter);
  }

  likeOrDislike(botao1, botao2, contador1, contador2) {
    botao1.addEventListener("click", this._changeColor);
    botao1.addEventListener("click", function(){
        if (contador1.innerText === "0") {
            contador1.innerText = 1;
            if (contador2.innerText === "1") {
                contador2.innerText = 0;
                $(botao2).toggleClass("visivel");
            }
        } else {
            contador1.innerText = 0;
        }
    });
  }
}