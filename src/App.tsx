import React, { useEffect } from "react";
import "./App.css";

function App() {
  const OTPless = Reflect.get(window, "OTPless");

  const callback = console.log;

  const OTPlessSignin = new OTPless(callback);

  const handleTrueCaller = async () => {
    OTPlessSignin.initiate({
      channel: "OAUTH",
      channelType: "TRUE_CALLER",
    }).then(console.log);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTrueCaller();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="App">Truecaller Demo</div>;
}

export default App;
