import React, { Fragment, Component } from 'react'

class Dashboard extends Component {


    render() {
        return (
            <Fragment>
                <section className='dashboard'> 
                    <button className='' onClick={this.props.hitBall}>Ball</button>
                    <button className='' onClick={this.props.hitStrike}>Strike</button>
                    <button className='' onClick={this.props.hitFoul}>Foul</button>
                    <button className='' onClick={this.props.hitHit}>Hit</button>
                </section>
                
            </Fragment>
        );
    }
}

export default Dashboard


