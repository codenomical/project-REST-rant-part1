// Bonus: Created Show page so this will accept data for one place at a time.
const React = require("react");
const Def = require("../default");

function show (data) {
    return (
        <Def>
            <main>
                <div className="container">
                    <h1>{ data.place.name }</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={ data.place.pic } alt={ data.place.name } className="img-fluid" />
                        </div>
                    <div className="col-md-6">
                        <p>{ data.place.city }, { data.place.state }</p>
                        <p>{ data.place.cuisines }</p>

                        <h2>Rating</h2>
                        <p>Currently unrated</p>

                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                      </div>
                 </div>
             </div>
                <a href="" className="btn btn-warning">Edit</a>
                <form method="POST" action="">
                    <button type="submit" className="btn btn-danger">
                    Delete
                    </button>
                </form>    
            </main>
        </Def>
    )
}

module.exports = show;