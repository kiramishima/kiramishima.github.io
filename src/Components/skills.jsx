import React, {Component} from 'react'

export class Skill extends Component {
	skill () {
		console.log(this)
	}
	render () {
		return <div className="chip" onClick={this.skill.bind(this)}><img src={this.props.src} alt="Contact Person"/> {this.props.name}</div>
	}
}

export default class Skills extends Component {
	constructor (props) {
		super(props)
		this.state = {skills: []}
	}

	componentDidMount() {
		(async () => {
			console.log(1222)
			const response = await fetch('./skills.json')
			const json = await response.json()
			console.log(json)
			this.setState(json)
		})()
	}

	render () {
		var items = this.state.skills.map((item) => <Skill key={item.name}  name={item.name} src={item.logo} />)
		return (
			<div className="skills">
				<h3>Skills</h3>
				{items}
			</div>
		)
	}
}