// Andy Million
// Handles user events
const eventsDataGateKP = require ('./eventsDatagatekeeper');
const eventsDom = require('./eventsDom');

const bindEventsData = () => {
  $('#events-view').on('click', '#events-view-all', e => {
    $('#events-view-nav').removeClass('hide');
    eventsDataGateKP.requestEventGET();
  });
  $('#events-view').on('click', '#events-add-new', e => {
    $('#events-view-nav').addClass('hide');
    eventsDom.buildEventInputForm();

    // requires input
  });
  $('#events-view').on('click', '.CLASSNAME-HERE', e => {
    eventsDataGateKP.requestEventDELETE();
    // requires input
  });
  $('#events-view').on('click', '.CLASSNAME-HERE', e => {
    eventsDataGateKP.requestEventPUT();
    // requires input
  });
  //
  $('#events-view').on('click', '#event-btn-add-new', e => {
    $('#events-header-view').addClass('hide');
    const eventToAdd = {
      'event': `${$('#eventName').val()}`,
      'location': `${$('#eventLocation').val()}`,
      'startDate': `${$('#eventDate').val()}`,
      'userUid': ``,
    };
    eventsDataGateKP.requestEventPOST(eventToAdd);
    alert('Thanks for adding a new event!');
    eventsDataGateKP.requestEventGET();
  });

  $('#events-view').on('click', '#event-btn-cancel-new', e => {
    e.preventDefault();
    $('#events-view-nav').removeClass('hide');
    $('#events-header-view').removeClass('hide');
    $('#eventName').val('');
    $('#eventLocation').val('');
    $('#eventDate').val('');
    eventsDataGateKP.requestEventGET();
  });
};

module.exports = {
  bindEventsData,
};