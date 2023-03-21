function App() {
    const [message, setMessage] = UseState("Hello Rob");

    return (<p>{message}</p>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);