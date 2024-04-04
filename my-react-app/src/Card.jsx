import profilePicture from "./assets/image.png";
import PropTypes from "prop-types"
function Card(prop){

    return (
        <main className='card'>
            <div>
                <img alt={prop.name + "'s Profile Picture"} src={profilePicture} className="card-picture"></img>
            </div>
            <div className="card-name">
                {prop.name}
            </div>
            <div className="card-description">
                The 'sus' Corgi
            </div>
        </main>
    );
}

// debugging purposes, expected data types of props
Card.propTypes = {
    name: PropTypes.string
}

// default props
Card.defaultProps = {
    name: "Guest"
}

export default Card;