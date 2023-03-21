class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundLoaded: "false",
            backgroundURL: null
        }
    }
    render(){
        return(
            <input type="file" id="file" accept="image/*" />
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);