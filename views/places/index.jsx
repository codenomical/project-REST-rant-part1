// Create a index function with react and default componenents under /views/places.
const React = require("react");
// Noticed that the path listed for const Def = require('./default') was not listing the relative path correctly. Changed it to '..' to connect the the route controller correctly.
const Def = require("../default")

// Update: Passing data as a parameter and placing in the block code let placesFormatted which will pass the data from places.js. function index does not have items hard-coded.
function index (data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div className="col-sm-6">
                <h2>{places.name}</h2>
                <p className="text-center">
                    {places.cuisines}
                </p>
                <img src={places.pic} alt={places.name}></img>
                <p className="text-center">
                    Located in {places.city}, {places.state}
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