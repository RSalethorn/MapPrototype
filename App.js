function App() {
    const [message, setMessage] = React.UseState("Hello Rob");

    return (<p>{message}</p>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);