Template.navbar.helpers({
    isWalletConnected: () => {
        return Session.get('connectedStatus');
    },
    getRandomNumber: () => {
        return Math.floor(Math.random() * 10) + 1;
    },
})