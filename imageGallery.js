document.addEventListener('DOMContentLoaded', () => {
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    for (let i = 10; i <= 29; i++) {
      const imgElement = document.createElement('img');
      imgElement.classList.add('thumbnail', 'img-thumbnail');
      imgElement.src = `https://picsum.photos/id/${i}/150/84`;
      imgElement.alt = 'Thumbnail';
      imgElement.setAttribute('data-img-id', i);
      
      imgElement.addEventListener('click', () => {
        changeImage(i);
      });
      
      thumbnailsContainer.appendChild(imgElement);
    }
  });
  
  function changeImage(imgId) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = `https://picsum.photos/id/${imgId}/900/500`;
  }
  