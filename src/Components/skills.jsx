import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../../sass/skills.scss'
import {Knowledges} from './knowledges.jsx'

export class Skill extends Component {
	skill () {
		// console.log(this)
		ReactDOM.render(<Knowledges key={this.props.name} lang={this.props.name} skills={this.props.knowledge} />, document.getElementById('knowledgeContent'))
	}
	render () {
		return <div className="chip" onClick={this.skill.bind(this)}><img src={this.props.src} alt="Contact Person"/> {this.props.name} </div>
	}
}

export default class Skills extends Component {
	constructor (props) {
		super(props)
		this.state = {skills: []}
	}

	componentDidMount() {
		(async () => {
			const response = await fetch('./build/skills.json')
			const json = await response.json()
			this.setState(json)
		})()
	}

	render () {
		var items = this.state.skills.map((item) => <Skill key={item.name}  name={item.name} src={item.logo} knowledge={item.knowledge} />  )
		return (
			<div className="skills">
				<h3>Skills</h3>
				{items}
			</div>
		)
	}
}