import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<nav className="navbar navbar-inverse">
			  	<div className="container-fluid">
			    	<div className="navbar-header">
			      		<a className="navbar-brand" href="#">
			        		<i className="fa fa-github-square fa-2x"></i>
			      		</a>
			    	</div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#settings" data-toggle="modal" data-target="#settingsModal" aria-labelled="Settings"><i className="fa fa-gear"> </i></a>
                        </li>
                    </ul>
			  	</div>
			</nav>
        );
    }
}

export default Header;
