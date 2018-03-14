(function() {
  function ModalCtrl($scope, Room, $uibModalInstance) {


    $scope.createRoom = function(room) {
      Room.add(room);
      $uibModalInstance.close();
    };

    $scope.cancelRoom = function() {
      $uibModalInstance.close();
    };

    }
  angular
      .module("bloc-chat-seth")
      .controller("ModalCtrl", ["$scope","Room", "$uibModalInstance", ModalCtrl]);
})();
