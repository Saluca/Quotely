# Quotely 📖

A quote app built with React and Firebase Firestore. Quotes are stored in a Firestore database and served randomly on the frontend when a user clicks a button.

## Tech Stack

- React (Vite)
- Firebase Firestore
- CSS (no frameworks)

## Features

- Random quote served on button click
- Copy quote to clipboard
- Notebook/paper inspired UI

## Running locally

1. Clone the repo and install dependencies
2. Create a .env.local file in the root and add your Firebase config

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

3.Set up Firestore rules in Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{collection}/{document} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

4. Run the app
   npm run dev
