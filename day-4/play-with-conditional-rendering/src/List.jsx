import PropTypes from 'prop-types';

function List(props) {
    const items = props.items
    const category = props.category

    return (
        <div className="list">
            <h2>{category}</h2>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>{item.name} - {item.calories} calories</li>
                )}
            </ul>
        </div>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired,
    category: PropTypes.string.isRequired
}

export default List;