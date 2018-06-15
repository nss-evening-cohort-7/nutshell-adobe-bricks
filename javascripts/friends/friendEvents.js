const friendsCore = require('./core');

// const swapTab = () => {
//   $('.friends-tab').on('click', event => {
//     $('.friends-tab').closest('li').removeClass('active');
//     $(event.target).closest('li').addClass('active');
//     $('.friends-panel').addClass('hide');
//     $(`#${event.target.id.replace('tab', 'view')}`).removeClass('hide');
//   });
// };

const initFriendEvents = () => {
  // swapTab();
  requestFriendEvent();
  cancelRequestEvent();
  deleteFriendEvent();
  acceptFriendEvent();
  rejectFriendEvent();
  clearRejectionEvent();
};

const requestFriendEvent = () => {
  $(document).on('click', '.request-friend-button', e => {
    friendsCore.createFriendRequest($(e.target).data('friendUid'));
  });
};

const cancelRequestEvent = () => {
  $(document).on('click', '.cancel-friend-button', e => {
    friendsCore.cancelSentRequest($(e.target).data('friendUid'));
  });
};

const deleteFriendEvent = () => {
  $(document).on('click', '.delete-friend-button', e => {
    friendsCore.deleteFriend($(e.target).data('friendUid'));
  });
};

const acceptFriendEvent = () => {
  $(document).on('click', '.accept-friend-button', e => {
    friendsCore.acceptFriend($(e.target).data('friendUid'));
  });
};

const rejectFriendEvent = () => {
  $(document).on('click', '.reject-friend-button', e => {
    friendsCore.rejectFriend($(e.target).data('friendUid'));
  });
};

const clearRejectionEvent = () => {
  $(document).on('click', '.clear-rejected-friend-button', e => {
    friendsCore.clearRejection($(e.target).data('friendUid'));
  });
};

module.exports = {
  initFriendEvents,
};
