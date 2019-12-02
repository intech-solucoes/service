var config = require("../../../../src/config.json");
var ReactNative: any;

try {
    // @ts-ignore
    ReactNative = require("react-native");
} catch {}

export abstract class Session {
    static setToken = async(token: string, setAdmin: boolean = true) => {
        if (typeof (localStorage) !== 'undefined') {
            await localStorage.setItem(`@${config.appName}:token`, token);

            if(setAdmin)
                await localStorage.setItem(`@${config.appName}:token-admin`, token);
        }
        else {
            if (ReactNative) {
                await ReactNative.AsyncStorage.setItem(`@${config.appName}:token`, token);

                if(setAdmin)
                    await ReactNative.AsyncStorage.setItem(`@${config.appName}:token-admin`, token);
            }
        }
    }

    static clear = async() => {
        if (typeof (localStorage) !== 'undefined') {
            await localStorage.removeItem(`@${config.appName}:token`);
            await localStorage.removeItem(`@${config.appName}:token-admin`);
        }
        else {
            if (ReactNative) {
                await ReactNative.AsyncStorage.removeItem(`@${config.appName}:token`);
                await ReactNative.AsyncStorage.removeItem(`@${config.appName}:token-admin`);
            }
        }
    }
}