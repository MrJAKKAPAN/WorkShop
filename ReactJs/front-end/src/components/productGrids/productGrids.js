import React, { Component } from 'react'
import { connect } from 'react-redux'

export class productGrids extends Component {
    render() {
        return (
            <div>
                productGrids
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(productGrids)
