Meteor.publish('claimers/getCurrentClaimer', ({ address, sessionId }) => {
    check(address, String);
    check(sessionId, String);
});