//this is gonna handle recording sound i think?

function streamHandler(stream) {
    if (!stream) {
        console.error('Error starting tab capture: ' + (chrome.runtime.lastError.message || 'UNKNOWN'));
        return;
    }
    if (receiver != null) {
        receiver.close();
    }

    receiver = window.open('reciever.html');
    receiver.currentStream = stream;
    //i took some of this code from the tabcapture thing, reciever is probably not needed?
}

function testCapture() {
    // some wrapper function?

    chrome.tabCapture.capture({
        video: false, audio: true,
        function(stream) {
            streamHandler(stream);
        }
    });
}