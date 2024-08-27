import React, { useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

export default function App() {
  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const { biometryType } = await rnBiometrics.isSensorAvailable();

    if (biometryType === BiometryTypes.FaceID) {
      console.log("Face ID is available on this device");
    } else if (
      biometryType === BiometryTypes.TouchID ||
      biometryType === BiometryTypes.Biometrics
    ) {
      console.log("Fingerprint/biometrics are available on this device");
    } else {
      console.log("Biometric authentication is not available on this device");
    }
  };

  const handleBiometricLogin = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      const { biometryType } = await rnBiometrics.isSensorAvailable();

      let promptMessage = "";
      if (biometryType === BiometryTypes.FaceID) {
        promptMessage = "Confirm your Face ID";
      } else if (
        biometryType === BiometryTypes.TouchID ||
        biometryType === BiometryTypes.Biometrics
      ) {
        promptMessage = "Confirm your fingerprint";
      } else {
        Alert.alert(
          "Error",
          "Biometric authentication is not available on this device."
        );
        return;
      }

      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: promptMessage,
        cancelButtonText: "Cancel",
      });

      if (success) {
        // Here, you would typically verify the user's credentials with your backend.
        // If the credentials are correct, proceed with login.
        handleLogin();
      } else {
        Alert.alert("Failure", "Authentication failed");
      }
    } catch (error) {
      if (error.code === "-4") {
        // UI canceled by system or user
        Alert.alert(
          "Authentication Canceled",
          "The authentication process was canceled."
        );
      } else {
        Alert.alert("Error", "Biometric login failed.");
        console.error(error);
      }
    }
  };

  const handleLogin = () => {
    // Replace this with your login logic (e.g., API call to your backend)
    Alert.alert("Success", "User authenticated and logged in successfully!");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the App</Text>
      <Button title="Login with Biometrics" onPress={handleBiometricLogin} />
    </View>
  );
}
