import PropTypes from 'prop-types'

export function Botton({ text }) {
    return <button onClick={function() {
        console.log('hola mundo')
    }}>
        {text}
    </button>
}

Botton.propTypes = {
    text: PropTypes.string.isRequired
}