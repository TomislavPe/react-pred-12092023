import PropTypes from "prop-types"

function FunctionKomponenta({title, ime, godine, children}) {
    return (
      <>
        <h1>Komponenta</h1>
        <h2>{title}</h2>
        <p>{ime} ce za 10 godina imati {godine + 10}</p>
        {children}
      </>
    )
}

FunctionKomponenta.propTypes = {
    title: PropTypes.string.isRequired,
    ime: PropTypes.string,
    godine: PropTypes.number,
    children: PropTypes.element
}

FunctionKomponenta.defaultProps = {
    godine: 30
}

export default FunctionKomponenta