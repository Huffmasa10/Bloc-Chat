(function() {
  function HomeCtrl($scope, Room) {
    $scope.roomList = Room.all;
  }

  angular
      .module("bloc-chat-seth")
      .controller("HomeCtrl", ["$scope", "Room", HomeCtrl]);
})();
