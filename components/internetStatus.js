import React, { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";

const useInternetStatus = () => {
    const [reachable, setReachable] = useState(false);

    useEffect(() => {
        const subscribe = state => setReachable(state.isInternetReachable);

        NetInfo.addEventListener(subscribe);

        return () => NetInfo.removeEventListener(subscribe);
    }, []);

    return reachable;
};


export { useInternetStatus };