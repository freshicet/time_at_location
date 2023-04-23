# 🌎 Timezone Finder Chrome Extension

This project is a 🌐 Chrome extension that allows you to get the timezone information for a city by right-clicking on the city name and selecting "Get timezone info" from the context menu. It uses the API-Ninjas API to fetch the current time and timezone information.

## 🚀 Installation

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Create a new `.env` file and add your API key for the API-Ninjas API in the following format: `API_KEY=your_api_key_here`.
4. Load the extension into Chrome:
   1. Open Chrome and navigate to `chrome://extensions`.
   2. Turn on "Developer mode" using the toggle switch in the upper-right corner.
   3. Click the "Load unpacked" button and select the directory where you cloned the repository.

## 📚 Usage

1. Select a city name on any webpage in Chrome.
2. Right-click on the selected text and select "Get timezone info" from the context menu.
3. The extension will fetch the timezone information from the API and display a notification with the current time and timezone information for the selected city.

## 🔧 Technologies Used

- JavaScript
- Chrome API
- API-Ninjas API

## 📖 Story

I built this Chrome extension because I often work with people in different time zones, and it can be challenging to keep track of what time it is for them. I wanted a way to quickly look up the current time and timezone information for a city without having to leave the webpage I was on. With this Chrome extension, I can simply select a city name and get the information I need with just a few clicks. It has saved me a lot of time and frustration, and I hope it can do the same for others who work with people in different time zones.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
