import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <h1>OTPless TrueCaller Demo</h1>
      )}
    </div>
  );
}

export default App;
