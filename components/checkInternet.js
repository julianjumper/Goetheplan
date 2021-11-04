import { useNetInfo } from "@react-native-community/netinfo";
import { View, Text } from "react-native";

const checkConnection = () => {
    const netInfo = useNetInfo();

    return (
        netInfo.isConnected
    );
};

export { checkConnection };