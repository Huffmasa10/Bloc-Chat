(function() {
  function HomeCtrl($scope, Room, $uibModal) {
    console.log("Home Controller linked");
    $scope.roomList = Room.all;


    $scope.addRoomModal = function() {
      console.log("Called!");
      $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: "ModalCtrl",
          size: "sm",
          animation: "true"
      })
    };
  }

  angular
      .module("bloc-chat-seth")
      .controller("HomeCtrl", ["$scope","Room", "$uibModal", HomeCtrl]);
})();
