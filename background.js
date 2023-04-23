require('dotenv').config();

function fetchTimezoneInfo(city, state) {
	const apiKey = process.env.API_KEY;
	const url = `https://api.api-ninjas.com/v1/worldtime?city=${city}&state=${state}`;

	return new Promise((resolve, reject) => {
		fetch(url, {
			headers: {
				'X-Api-Key': apiKey,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(`Received timezone info:`, result);
				resolve(result);
			})
			.catch((error) => {
				console.error(`Error while fetching timezone info:`, error);
				reject(new Error(error.message));
			});
	});
}

chrome.contextMenus.create({
	title: 'Get timezone info',
	contexts: ['selection'],
	onclick: (info, tab) => {
		const selectedText = info.selectionText.trim();
		const commaIndex = selectedText.indexOf(',');
		let city, state;
		if (commaIndex !== -1) {
			city = selectedText.substring(0, commaIndex).trim();
			state = selectedText.substring(commaIndex + 1).trim();
		} else {
			city = selectedText;
			state = '';
		}
		fetchTimezoneInfo(city, state)
			.then((result) => {
				console.log(`Timezone info for ${city}:`, result.hour);
				const hour = result.hour;
				const minute = result.minute;
				console.log(`The current time in ${city} is ${hour}:${minute}`);
				chrome.notifications.create({
					type: 'basic',
					title: `Timezone info for ${city}`,
					message: `The current time in ${city} is ${hour}:${minute}`,
					iconUrl:
						'https://pics.freeicons.io/uploads/icons/png/5798666251543238869-512.png',
				});
			})
			.catch((error) => {
				console.error(`Error getting timezone info for ${city}:`, error);
				chrome.notifications.create({
					type: 'basic',
					title: `Error getting timezone info for ${city}`,
					message: error.message,
					iconUrl:
						'https://pics.freeicons.io/uploads/icons/png/5798666251543238869-512.png',
				});
			});
	},
});

console.log('Extension loaded.');
