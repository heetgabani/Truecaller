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

	return (
		<div className="App">
			<button onClick={handleTrueCaller}>Login with Truecaller</button>
		</div>
	);
}

export default App;
