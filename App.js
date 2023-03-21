class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Rob"
        }
    }
    render(){
        return(
            <p>{this.state.message}</p>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);