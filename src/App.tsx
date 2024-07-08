import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const OTPless = Reflect.get(window, "OTPless");

    const callback = console.log;

    const OTPlessSignin = new OTPless(callback);

    const handleTrueCaller = async () => {
      OTPlessSignin.initiate({
        channel: "OAUTH",
        channelType: "TRUE_CALLER",
      }).then(console.log);
    };

    const timer = setTimeout(() => {
      handleTrueCaller();
    }, 5000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <h1>OTPless TrueCaller Demo</h1>
    </div>
  );
}

export default App;
