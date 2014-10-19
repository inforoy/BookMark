(function(){
    "use strict";

    angular.module('Bookmarks',[

        //dependencies here

    ])

    .controller('MainController',function($scope){
        $scope.name = 'Roy W.';
        $scope.categories = ['HTML5','JavaScript','CSS','Games'];
        $scope.bookmarks = [ 
            {id:1, title:'Quizzpot.com',   url:'https://quizzpot.com',               category:'JavaScript'},
            {id:2, title:'Html5 Game Devs',url:'https://html5gamedevs.com',          category:'Games'},
            {id:3, title:'CSS Tricks',     url:'http://css-tricks.com',              category:'CSS'},
            {id:4, title:'Bootstrap',      url:'http://getbootstrap.com',            category:'CSS'},
            {id:5, title:'Card',           url:'http://jessepollak.github.io/card/', category:'JavaScript'}
        ];

        $scope.currentCategory = null;
        $scope.requiredTrue = true;

        $scope.setCurrentCategory = function(category){            
          $scope.currentCategory = category;          
        }

        $scope.isCurrentCategory = function(category){            
          return $scope.currentCategory ===  category;
        }

        $scope.showWindow = function(bookmark){
            $scope.bookmarkForm.$setPristine();
            $scope.bookmarkForm.$setUntouched();

            bookmark = bookmark || {category:$scope.currentCategory,url:''};
            $scope.bookmark = bookmark;         
            $('#bookmarkModal').modal('show');
        }

        $scope.save = function(bookmark){
            if($scope.bookmarkForm.$valid){                
                if(!bookmark.id){
                    var record = angular.copy(bookmark);

                    record.id = $scope.bookmarks.length;
                    $scope.bookmarks.push(record);
                }
                $('#bookmarkModal').modal('hide');
            }
        }
        
        $scope.remove = function(id){
            for(var i=0,len=$scope.bookmarks.length;i<len;i++){
                if($scope.bookmarks[i].id === id){
                    $scope.bookmarks.splice(i,1);
                    break;
                }
            }
        }
        
       
    });

})();