import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import App from './containers/App';
import DetailPage from './containers/DetailPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/detail/:id' component={DetailPage} />
			<Redirect from='*' to='/'/>
		</div>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
