import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
                <div class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a  href="/" class="navbar-brand">Management App</a>
                        <span class=" border-0">
                            <a  href="/students" class="navbar-brand navbar-text">Students</a>
                            <a  href="/groups" class="navbar-brand navbar-text">Group</a>
                        </span>
                    </div>
                </div>
        )
    }
}

export default HeaderComponent