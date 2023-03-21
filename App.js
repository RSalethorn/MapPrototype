class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundLoaded: "false",
            backgroundURL: null
        }
    }

    onPhotoSelect(event) {
        console.log(event.target.value);
    }

    render(){
        return(
            <input type="file" id="file" accept="image/*" onChange={this.onPhotoSelect}/>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);