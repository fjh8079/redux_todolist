import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterClick: (id) => {
            dispatch(setVisibilityFilter(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
