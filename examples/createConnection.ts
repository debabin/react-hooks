export const createConnection = (serverUrl: string) => {
  return {
    connect(cb?: Function) {
      console.log('✅ Connecting to "' + serverUrl);
      cb && setTimeout(cb, 2000);
    },
    disconnect() {
      console.log('❌ Disconnected from "' + serverUrl);
    },
  };
};
