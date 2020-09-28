class Article {
  constructor(list, article) {
    this.list = list
    this.articleTitle = article.title
    this.articleImage = article.image
    this.articleBody = article.content
  }

  createArticle() {
    const title = new ArticleTitle(this.articleTitle).element
    const image = new ArticleImage(this.articleImage).element
    const body = new ArticleBody(this.articleBody).element
    const feedback = new LikeContainer().element
    const div = new Container().element

    div.appendChild(title)
    div.appendChild(image)
    div.appendChild(body)
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

      this.element.appendChild(likeButton)
      this.element.appendChild(likeCounter)

      this.like(likeButton, likeCounter)  
  }

  like(button, counter) {
    button.addEventListener("click", function() {
      if (counter.innerText === "0") {
        counter.innerText = 1
      } else if (counter.innerText === "1") {
        counter.innerText = 0
        this.onRemoveLikeClicked(button)
      }
    })
  }

  onLikeClicked(button) {
    
    console.log(this.button.classList)
  }

  onRemoveLikeClicked(button) {
    button.classList.remove('.like-button')
    button.classList.remove('like-button-clicked')
  }
}