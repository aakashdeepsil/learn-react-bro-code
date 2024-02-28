import PropTypes from 'prop-types';

function List(props) {
    const fruitList = props.fruits

    return (
        <ul className="fruit-list">
            {fruitList.map((fruit, index) => (
                <li key={index}>{fruit.name} - {fruit.calories} calories</li>
            ))}
        </ul>
    )
}

List.propTypes = {
    fruits: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
}

export default List;