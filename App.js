import {useState} from 'react';
function App() {
    const [message, setMessage] = useState("Hello Rob");

    return (<p>{message}</p>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);