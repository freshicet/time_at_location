function formatTime(time) {
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};
	return time.toLocaleString('en-US', options);
}

function updateClock(time, offset) {
	const localTime = new Date(time.getTime() + offset * 60 * 60 * 1000);
	const timeStr = formatTime(localTime);
	document.getElementById('time').textContent = timeStr;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.time && message.offset) {
		console.log(`Received message:`, message);
		const time = new Date(message.time);
		const offset = message.offset;
		updateClock(time, offset);
	} else {
		console.error(`Invalid message received:`, message);
	}
});
