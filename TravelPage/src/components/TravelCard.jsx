export default function TravelCard(props) {

    return (
        <div className="card">

            <img
                src={props.place.image}
                alt={props.place.title}
            />

            <div className="content">

                <p className="location">
                    📍 {props.place.location}
                </p>

                <a
                    href={props.place.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Google Maps
                </a>

                <h2>
                
                 {/* {props.place.title === "Queenstown" ? "Queen": props.place.title} */}
                 {props.place.title}

                </h2>

                <p>
                    {props.place.description}
                </p>

            </div>

        </div>

    );
}