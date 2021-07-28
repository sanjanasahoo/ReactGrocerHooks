
import PropTypes from 'prop-types'

const Header = ({title}) => {

    return (
       <header>
            <h1 style={HeaderStyle}> {title} </h1>

        </header>
    )
}
Header.defaultProps = {
    title: "Grocery App"
}
Header.propTypes ={
    title : PropTypes.string.isRequired
}
const HeaderStyle = {color:'red'}
export default Header
