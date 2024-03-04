var app = angular.module('imageApp', []);

app.controller('ImageController', function($http) {
  var vm = this;

  vm.images = [];
  vm.currentIndex = null;

  // Function to fetch images from Picsum Photos API
  vm.fetchImages = function() {
    $http.get('https://picsum.photos/v2/list?page=1&limit=20')
      .then(function(response) {
        // Success callback
        // Map the response to format { thumbnail: '', fullsize: '' }
        vm.images = response.data.map(function(img) {
          var urlBase = 'https://picsum.photos/id/' + img.id;
          return {
            thumbnail: urlBase + '/50/50',
            fullsize: urlBase + '/300/300'
          };
        });
      }, function(error) {
        // Error callback
        console.error('Error fetching images:', error);
      });
  };

  // Function to show full-size image when a thumbnail is clicked
  vm.showFullSize = function(index) {
    vm.currentIndex = index;
  };

  // Fetch images when controller initializes
  vm.fetchImages();
});
