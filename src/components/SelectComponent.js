import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section class="container ">
                <div class="row position-absolute top-50 start-50 translate-middle">
                    <div class="col-sm-6 mt-5">
                        <div class="card bg-secondary text-white t-10">
                        <div class="card-body">
                            <h5 class="card-title">Groups</h5>
                            <p class="card-text">With supporting text below as a natura.</p>
                            <a href="/groups" class="btn btn-primary">Go groups</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5">
                        <div class="card bg-secondary text-white">
                        <div class="card-body">
                            <h5 class="card-title">Students</h5>
                            <p class="card-text">With supporting text below as a natura.</p>
                            <a href="/students" class="btn btn-primary">Go students</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FooterComponent