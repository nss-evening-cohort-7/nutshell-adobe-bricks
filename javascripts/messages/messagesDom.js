// Maken - Building dom View,

const { getAllUsernames, } = require('../firebase/firebaseApi');
const { getMessageUID, } = require('./holdUID');

const convertUserIdToUserName = (uid, userArray) => {
  return userArray.find((user) => {
    return user.userUid === uid;
  }).username;
};

const buildMessagesDomString = (allMessagesArray) => {
  getAllUsernames()
    .then((userArray) => {
      let string = '';
      allMessagesArray.forEach((message) => {
        const sender = convertUserIdToUserName(message.userUid, userArray);
        string += `<div class="panel panel-primary mess" data-firebase-id="${message.id}">`;
        string += `<h4 id="WhoSaidIt" class="nameOfUser" data-nameOfUser="${sender}">${sender}</h4>`;
        string += `<div>`;
        string += `<input type="text" class="hide form-control changeMessageTextField" placeholder="" value="${message.message}">`;
        string += `<p class="userMessage theMessage" data-theMessage="${message.message}">${message.message}</p>`;
        string += `<p class="time" data-time="${moment(message.timestamp).format('LT')}">${moment(message.timestamp).format('LT')}`;
        if (message.isEdited === true) {
          string += `<span id="messageStatus" >     edited</span>`;
        };
        string += `</p>`;
        string += `</div>`;
        string += `<div class="buttMessagesDiv clearfix">`;
        string += `<div class='float-right'>`;
        string += `<button type="button" class="hide saveEdit btn btn-default btn-xs">`;
        string += `<span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span> Save`;
        string += `<button type="button" class="hide cancelEdit btn btn-default btn-xs">`;
        string += `<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancel`;
        string += `</button>`;
        if (getMessageUID() === message.userUid) {
          string += `<button type="button" class="editButt btn btn-default btn-xs">`;
          string += `<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit`;
          string += `</button>`;
          string += `<button type="button" class="deleteButt btn btn-default btn-xs">`;
          string += `<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete`;
          string += `</button>`;
        };
        string += `</div>`;
        string += `</div>`;
        string += `</div>`;
      });
      printMessagesToDom(string);
    })
    .catch((error) => {
      console.error('error in convert id to user name function', error);
    });
};

const printMessagesToDom = (results) => {
  $('#messages-text').html(results);
};

module.exports = {
  buildMessagesDomString,
};
