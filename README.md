# 🏥 HES - Health for every student

![GitHub](https://img.shields.io/github/license/2006coder/HES)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.7.0-orange)

A modern web application that helps users find the right medical facilities based on their symptoms and location. 

## ✨ Features

- 🔍 Search for medical facilities using natural language descriptions of symptoms
- 📍 Automatic location detection or manual location input
- 🏥 View detailed information about nearby medical facilities
- ⭐ Sort facilities by rating
- 🔬 Filter by medical specialties
- 📱 Responsive design for all devices

## 🛠️ Technology Stack

- **Frontend**: React.js
- **Backend**: Firebase/Firestore
- **NLP Processing**: Custom keyword mapping (with planned GPT integration - I'm working on it)

## 🗂️ Project Structure

```
HES/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── LocationInput.js
│   │   ├── ResultCard.js
│   │   ├── ResultsList.js
│   │   └── SearchBar.js
│   ├── services/
│   │   └── nlpService.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   └── ... (other styles)
│   ├── App.js
│   ├── firebase_integration.js
│   └── index.js
├── facilities-data.json
├── upload-data.js
└── package.json
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js
- npm
- Firebase account

### Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the steps
   - Enable Firestore database in your project

2. **Get Firebase Config**:
   - In your project settings, find the Firebase SDK configuration 
   - Copy the configuration object for web apps
   - Replace the placeholder in `src/firebase_integration.js` with your config

3. **Get Service Account Key**:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Save the JSON file as `project-name-firebase-adminsdk-fbsvc-theid.json` in your project root
   - This file is needed for the data upload script

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/HES.git
   cd HES
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Upload sample data to Firebase:
   ```bash
   node upload-data.js
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📋 Using the App

1. Allow location access or manually enter your location
2. Enter your symptoms in natural language (e.g., "my back hurts")
3. View the list of nearby medical facilities that match your needs
4. Get directions or call the facility directly from the app

## 💾 Database Structure

The application uses Firestore with the following structure:

```
facilities/
  |- facilityId/
      |- name: string
      |- type: string
      |- address: string
      |- phoneNumber: string
      |- hours: object
      |- appointmentStyle: string
      |- price: string
      |- specialties: array
      |- rating: number
      |- openNow: boolean
```

## ⚠️ Important Notes

- The `project-name-firebase-adminsdk-fbsvc-theid.json` service account file contains sensitive credentials. Never commit this file to your repository!
- Make sure to replace the Firebase configuration in `firebase_integration.js` with your own Firebase project details.
- The application currently uses a simple keyword matching for symptom analysis. Future versions will integrate with GPT for more accurate results.

## 🔧 Customizing the Data

You can customize the medical facilities in your database by editing the `facilities-data.json` file before running the upload script. The file follows this structure:

```json
{
  "facilities": [
    {
      "name": "Facility Name",
      "type": "facility type",
      "address": "Full address",
      "phoneNumber": "Phone number",
      "specialties": ["specialty1", "specialty2"],
      "rating": 4.5,
      "openNow": true,
      ...
    }
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by 2006coder (Bach Pham)
