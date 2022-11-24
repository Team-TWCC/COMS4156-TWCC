import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import EventsContainer from './components/events/EventsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthToken } from './utils/authUtil';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<div className="App">
			<h1>TWCC Events</h1>
			<Router>
				<>
					<Routes>
						<Route exact path='/' element={<Landing />} />            
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/events' element={<EventsContainer />} />
					</Routes>
				</>
			</Router>
		</div>
	);
};

export default App;