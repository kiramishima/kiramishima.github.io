import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import '../sass/app.scss'
import Avatar from './Components/avatar.jsx'
import Skills from './Components/skills.jsx'


class Application extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (<div className="row">
			<div className="col s6">
				<Avatar source="https://api.github.com/users/kiramishima" />
			</div>
			<div className="col s6 m6">
				<h5>Paul Emilio Arizpe Colorado</h5>
			</div>

			<div className="col s12 m12">
				<Skills />
			</div>
		</div>)
	}
}

main();

function main() {
    ReactDOM.render(<Application />, document.getElementById('app'));
}