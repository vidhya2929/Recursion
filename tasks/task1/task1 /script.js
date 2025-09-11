const postList = document.getElementById('postList');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;
    postList.appendChild(li);
  })
  .catch(error => console.error('Error:',error));
})