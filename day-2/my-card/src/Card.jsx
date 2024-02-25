import PropTypes from 'prop-types';

function Card({ name, description }) {
    return (
        <div className="card">
            <img className="card-image" src={`https://source.unsplash.com/200x200/?${name}`} alt={name} />
            <h1 className="card-title">{name}</h1>
            <p className="card-description">{description}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card