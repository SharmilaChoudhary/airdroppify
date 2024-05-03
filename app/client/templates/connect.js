import { walletConnectModal, walletConnectConfig, watchAccount, disconnect, getAccount } from "../../imports/client/WalletConnectWrapper";

Template.connect.helpers({
    isWalletConnected: () => {
        return Session.get('connectedStatus');
    },
    getWalletAddress: () => {
        let address = Session.get('connectedAddress');
        return address.slice(0, 5) + '...' + address.slice(-2);
    },
});

Template.connect.events({
    'click #connectButton': (event) => {
        walletConnectModal.open()

    },
    'click #disconnectButton': (event) => {
        disconnect(walletConnectConfig);
    },
});

Template.connect.onCreated(() => {
    watchAccount(walletConnectConfig,
        {
            onChange(account) {
                console.log('Account change detected', account);
                if (account.isConnected) {
                    console.log(account);
                    Session.set('connectedStatus', true);
                    Session.set('connectedAddress', account.address);
                } else {
                    Session.set('connectedStatus', false);
                    delete Session.keys.connectedAddress;
                }
            }
        }
    );
})