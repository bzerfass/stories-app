import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Header, QuestionnaireList, Result} from '../components'
import { mapStateToProps, mapDispatchToProps } from '../functions/map'


/**
 * App container
 * props: none
 * components: Header, QuestionnaireList, Result
 */
class App extends Component {
    render() {

        return (
            <div className="app-container">
                <Header/>
                <QuestionnaireList {...this.props}/>
                <Result {...this.props}/>
            </div>
        )
    }
}

App.propTypes = {
    questions: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    results: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
