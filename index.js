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
    const div = new Container().element

    div.appendChild(title.element)
    div.appendChild(image.element)
    div.appendChild(body.element)
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