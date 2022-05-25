import React from 'react';
import ReactDOM from 'react-dom';

export default class Test extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
	}

	componentWillMount()
	{
		alert("componentWillMount()");
	}

	componentDidMount()
	{
		alert("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Geek!" });
	}

	render()
	{
		return (
			<div>
			<h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
			<h2>
			<a onClick={this.changeState.bind(this)}>Press Here!</a>
			</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		alert("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate()
	{
		alert("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		alert("componentDidUpdate()");
	}
}

