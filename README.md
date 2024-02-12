# Transaction Manager App

Welcome to the Transaction Manager App – your efficient solution for managing wallet addresses and transactions seamlessly.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Challenges Faced](#challenges-faced)
4. [Solutions Implemented](#solutions-implemented)
5. [Unique Approaches](#unique-approaches)
6. [Feedback and Contributions](#feedback-and-contributions)

---

## Installation

To install and run the Transaction Manager App, follow these steps:

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/Sahusuman880/simplified-Transaction-web-application.git
   ```

2. Navigate to the project directory.

   ```
   cd simplified-Transaction-web-application
   ```

3. Install dependencies.

   ```
   npm install
   ```

4. Set up Firebase configuration.

   - Create a Firebase project and obtain the configuration details.
   - Add the configuration details in `src/firebase.js`.

5. Run the application.
   ```
   npm run dev
   ```

---

## Usage

The Transaction Manager App allows you to:

- Add wallet addresses and corresponding amounts securely.
- Validate wallet addresses to ensure accuracy.
- View and manage transactions seamlessly.
- Retrieve transaction data from Google Firestore.

---

## Challenges Faced

Building the Transaction Manager App posed challenges, primarily due to the shift from the familiar Node.js and MongoDB stack to using Google Firestore. Key challenges included:

1. **Adapting to Firestore:**

   - **Issue:** Unfamiliarity with Google Firestore.
   - **Solution:** Invested time in understanding Firestore's structure and integration with React. Leverage Firestore documentation and tutorials.

2. **Real-time Data Sync:**

   - **Issue:** Ensuring real-time updates in the transaction data.
   - **Solution:** Utilized Firestore's real-time updates feature to sync data seamlessly across the app.

3. **Wallet Address Validation:**
   - **Issue:** Implementing effective validation for wallet addresses.
   - **Solution:** Leveraged existing validation libraries and custom functions to ensure the accuracy of wallet addresses.

---

## Solutions Implemented

1. **Firestore Integration:**

   - Successfully integrated Google Firestore with React, ensuring efficient data storage and retrieval.

2. **Real-time Updates:**

   - Utilized Firestore's real-time data synchronization to ensure instant updates in the transaction data.

3. **Wallet Address Validation:**
   - Implemented robust validation methods to verify the correctness of wallet addresses.

---

## Unique Approaches

- **Firestore Efficiency:**
  - Leveraged Firestore's NoSQL capabilities for efficient data storage and retrieval.
- **Real-time Data Sync:**

  - Utilized Firestore's real-time features to enhance user experience by providing instant updates.

- **Intuitive Validation:**
  - Implemented a user-friendly validation process to enhance the accuracy of wallet addresses.

---
