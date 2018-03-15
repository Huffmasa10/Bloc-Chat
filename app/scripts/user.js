(function() {
  function BlocChatCookies ($cookies, $uibModal) {
    var currentUser = $cookies.get("blocChatCurrentUser");
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        backdrop: "static",
        animation: true,
        templateUrl: "/templates/user.html",
        controller: "UserCtrl",
        size: "sm"
      })
    }
  }

  angular
    .module("bloc-chat-seth")
    .run(["$cookies", "$uibModal", BlocChatCookies]);
})();
