/**
 * Created by namvh on 24/07/2017.
 */
import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                he he
                <h2>{this.props.params.userName}</h2>
            </div>
        )
    }
})
