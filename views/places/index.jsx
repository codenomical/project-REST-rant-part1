// Create a index function with react and default componenents under /views/places.
const React = require("react");
// Noticed that the path listed for const Def = require('./default') was not listing the relative path correctly. Changed it to '..' to connect the the route controller correctly.
const Def = require("../default")

// Update: Passing data as a parameter and placing in the block code let placesFormatted which will pass the data from places.js. function index does not have items hard-coded.
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6" key={place.name}>
                <h2>
                    <a href={`/places/${place._id}`} >
                {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index;