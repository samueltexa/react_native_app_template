```markdown
# React Native App Template

A reusable React Native app template for quick project setups. This template includes basic structure, commonly used libraries, and best practices to get you started with your mobile app development in react native.

## Features

- **React Navigation**: For navigation
- **Redux**: State management
- **React Native Paper**: UI components
- **Axios**: HTTP client
- **Jest**: Testing framework

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/samueltexa/react-native-app-template.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-native-app-template
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

1. Start the Metro Bundler:
    ```bash
    npm start
    ```
2. Run the app on an Android device/emulator:
    ```bash
    npm run android
    ```
   Or on an iOS device/simulator:
    ```bash
    npm run ios
    ```

### Folder Structure

```plaintext
react-native-app-template
├── src
│   ├── components        # Reusable components
│   ├── constants         # Constants used throughout the app
│   ├── navigation        # Navigation setup
│   ├── redux             # Redux setup and state management
│   ├── screens           # Screen components
│   ├── services          # API and service calls
│   ├── styles            # Styles and theming
│   └── utilityFunctions  # Reusable utility functions
├── assets                # Assets like images, fonts, etc.
├── node_modules          # Node modules
├── .gitignore            # Git ignore file
├── App.js                # Entry point
├── package.json          # Project configuration
├── README.md             # Project documentation
└── yarn.lock             # Yarn lock file
```

### Customization

To customize the template for your project:

1. **Change the app name**:
    - Open `app.json` and modify the `name` and `displayName` fields.
2. **Replace assets**:
    - Add your own images, icons, and fonts in the `assets` folder.
3. **Update styles**:
    - Modify the styles in the `src/styles` directory to match your app's theme.

### Adding New Screens

To add a new screen:

1. Create a new file in the `src/screens` directory.
2. Define your component and export it.
3. Add the new screen to your navigation in the `src/navigation` directory.

### Managing State with Redux

To manage state with Redux:

1. Define your actions and reducers in the `src/redux` directory.
2. Use the `useSelector` and `useDispatch` hooks to interact with the state in your components.

### Making API Calls with Axios

To make API calls:

1. Define your API functions in the `src/services` directory.
2. Use these functions in your components or Redux actions to fetch or post data.

### Installing Additional Packages

#### AsyncStorage

1. Install the package:
    ```bash
    npm install @react-native-async-storage/async-storage
    ```
2. For further instructions, head to [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/).

#### Stack Navigator

1. Install the packages:
    ```bash
    npm install @react-navigation/stack
    npm install react-native-gesture-handler
    ```
2. Add the following code to the body of the `MainActivity` class:

    **Java**
    ```java
    public class MainActivity extends ReactActivity {
      // ...
      @Override
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
      }
      // ...
    }
    ```

    **Kotlin**
    ```kotlin
    class MainActivity: ReactActivity() {
      // ...
      override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
      }
      // ...
    }
    ```

3. Make sure to add the following import statement at the top of this file below your package statement:
    ```java
    import android.os.Bundle;
    ```

4. For further instructions, head to [React Navigation Stack Navigator](https://reactnavigation.org/docs/stack-navigator) and [React Navigation Getting Started](https://reactnavigation.org/docs/getting-started).

#### Bottom Tabs Navigator

1. Install the package:
    ```bash
    npm install @react-navigation/bottom-tabs
    ```
2. For further instructions, head to [React Navigation Bottom Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator).

#### Vector Icons

1. Install the packages:
    ```bash
    npm install --save react-native-vector-icons
    npm i --save-dev @types/react-native-vector-icons
    ```
2. For further instructions, head to [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons).

3. Icons:
    - Explore icons at [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/).

### After Installation

1. Navigate to the `android` directory:
    ```bash
    cd android
    ```
2. Clean the project:
    ```bash
    ./gradlew clean
    ```
3. Re-run the application:
    ```bash
    npm run android
    ```
   Or
    ```bash
    npm run ios
    ```

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```