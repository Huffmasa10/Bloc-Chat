(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var message = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    }

    Message.send = function(newMessage, currentRoomId) {
        message.$add({
          username: $cookies.get("blocChatCurrentUser"),
          content: newMessage,
          sentAt: Date.now(),
          roomId: currentRoomId
        });
    }

    return Message;
  }

  angular
    .module("bloc-chat-seth")
    .factory("Message", ["$firebaseArray", "$cookies", Message]);
})();
