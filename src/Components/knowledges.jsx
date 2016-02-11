import React, {Component} from 'react'

export class Knowledge extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return <div>{this.props.skill}</div>
	}
}

export class Knowledges extends Component {
	constructor (props) {
		super(props)
		this.state = {items: this.props.skills }
	}
	componentDidMount () {
		
	}
	render () {
		let lang = this.props.lang
		let items = this.props.skills.map((obj) => <Knowledge key={obj} skill={obj}/> )

		return (
			<div className={lang}>
				<h1>{lang}</h1>
				{items}
			</div>
		)
	}
}
