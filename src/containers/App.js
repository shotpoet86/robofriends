import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../components/ErrorBoundary';
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component {
    /*construcor opens the app on the webpage*/
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    /*app runs this only if component mounts*/
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    /*render actually renders or 'shows' the content on the page*/
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;