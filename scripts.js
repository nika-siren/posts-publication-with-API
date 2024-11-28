// Функция, которая получает объект поста и возвращает строку HTML-разметки
function createPostHTML(post) {
  return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
}

// Функция, которая добавляет полученную разметку в контейнер
function appendPostToContainer(postHTML, container) {
  container.innerHTML += postHTML;
}

// Делаем GET запрос к JSONplaceholder API и добавляем полученные посты на страницу
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postsContainer = document.getElementById("posts-container");

    posts.forEach((post) => {
      const postHTML = createPostHTML(post);
      appendPostToContainer(postHTML, postsContainer);
    });
  });
