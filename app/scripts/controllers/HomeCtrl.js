(function() {
  function HomeCtrl($scope, Room, $uibModal, Message, $cookies) {
    $scope.roomList = Room.all;
    $scope.messages = {};
    $scope.currentRoom = null;
    $scope.currentUser = $cookies.get("blocChatCurrentUser");

    $scope.setCurrentRoom = function(room) {
      console.log("room clicked!");
      $scope.currentRoom = room;
      $scope.messages = Message.getByRoomId(room.$id);
    };

    $scope.logOut = function() {
      console.log("Successfully logged out");
      $cookies.remove("blocChatCurrentUser");
      window.location.reload();
    }

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
      .controller("HomeCtrl", ["$scope","Room", "$uibModal", "Message", "$cookies", HomeCtrl]);
})();
