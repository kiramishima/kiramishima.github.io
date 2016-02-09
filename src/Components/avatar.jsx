import React from 'react'
import '../../sass/avatar.scss'

export default class Avatar extends React.Component {
	constructor (props) {
    	super(props)
    	this.state = {
			username: 'Paul Arizpe',
			github: {}
		}
    }

	componentDidMount () {
		(async () => {
			console.log(1222)
			const response = await fetch(this.props.source)
			const json = await response.json()
			this.setState(json)
		})()
	}

	render () {
		var className = 'github-profile'
		return (
		<div className={className}>
			<div className="github-profile__avatar">
	          <img alt={this.state.name} src={this.state.avatar_url} />
	        </div>
	    </div>
		)
	}
}