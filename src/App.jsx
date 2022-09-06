import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostCreate from "./components/PostCreate";
import PostDetails from "./components/PostDetails";

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<PostCreate />
						</Route>
						<Route path='/posts/:id'>
							<PostDetails/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
