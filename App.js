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
        this.setState({
            backgroundLoaded: "true",
            backgroundURL: event.target.value
        })
    }

    render(){
        let backgroundImg = <img></img>
        if (this.state.backgroundLoaded == true) {
            backgroundImg = <img src={this.state.backgroundURL}></img>
        }
        return(
            <div id="app">
                {backgroundImg}
                <input type="file" id="file" accept="image/*" onChange={this.onPhotoSelect.bind(this)}/>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);