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
		return (<div>
			<div className="row">
				<div className="col col-33">
					<Avatar source="https://api.github.com/users/kiramishima" />
				</div>
				<div className="col">
					<h5>Paul Emilio Arizpe Colorado</h5>
					<h8>TSU Tecnologias de la información y comunicación</h8>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Skills />
				</div>
			</div>
			<div className="row" id="knowledgeContent">
			</div>
		</div>)
	}
}

main();

function main() {
    ReactDOM.render(<Application />, document.getElementById('app'));
}