(function() {
  function Room($firebaseArray) {
    var Room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    makeRoom = function(room) {
      rooms.$add(room);
    };
    return Room;
}

  angular
    .module("bloc-chat-seth")
    .factory("Room", ["$firebaseArray", Room]);
})();
