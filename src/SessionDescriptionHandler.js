"use strict";
/**
 * @fileoverview SessionDescriptionHandler
 */

/* SessionDescriptionHandler
 * @class PeerConnection helper Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 */
module.exports = function (EventEmitter) {
var SessionDescriptionHandler = function(session, options) {
  // keep jshint happy
  session = session;
  options = options;
};

SessionDescriptionHandler.prototype = Object.create(EventEmitter.prototype, {

  /**
   * Destructor
   */
  close: {value: function close () {}},

  /**
   * Gets the local description from the underlying media implementation
   * @param {Object} [constraints] MediaStreamConstraints https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
   * @param {Array} [modifiers] Array with one time use description modifiers
   * @returns {Promise} Promise that resolves with the local description to be used for the session
   */
  getDescription: {value: function getDescription (constraints, modifiers) {
    // keep jshint happy
    constraints = constraints;
    modifiers = modifiers;
  }},

  /**
   * Check if the Session Description Handler can handle the Content-Type described by a SIP Message
   * @param {String} contentType The content type that is in the SIP Message
   * @returns {boolean}
   */
  hasDescription: {value: function hasSessionDescription (contentType) {
    // keep jshint happy
    contentType = contentType;
  }},

  /**
   * The modifier that should be used when the session would like to place the call on hold
   * @param {String} [sdp] The description that will be modified
   * @returns {Promise} Promise that resolves with modified SDP
   */
  holdModifier: {value: function holdModifier (sdp) {
    // keep jshint happy
    sdp = sdp;
  }},

  /**
   * Set the remote description to the underlying media implementation
   * @param {String} sessionDescription The description provided by a SIP message to be set on the media implementation
   * @param {Object} [constraints] MediaStreamConstraints https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
   * @param {Array} [modifiers] Array with one time use description modifiers
   * @returns {Promise} Promise that resolves once the description is set
   */
  setDescription: {value: function setDescription (sessionDescription, constraints, modifiers) {
    // keep jshint happy
    sessionDescription = sessionDescription;
    constraints = constraints;
    modifiers = modifiers;
  }}
});

return SessionDescriptionHandler;
};
