
const doInitWorldId = ({ address, sessionId }) => {
    console.log('beginning world id verify')

    const worldIdAppUrl = `${Meteor.settings.public.WORLDID_APP_URL}/?callbackUrl=${Meteor.absoluteUrl('/api/verifyWorldProof')}&address=${address}&sessionId=${sessionId}`;
    window.open(worldIdAppUrl)
};

const getIdVerificationStatus = () => {
    const address = Session.get('connectedAddress');
    return Claimers.findOne({ address, })?.idVerified;
}

export {
    doInitWorldId,
    getIdVerificationStatus,
};