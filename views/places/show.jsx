// Bonus: Created Show page so this will accept data for one place at a time.
const React = require("react");
const Def = require("../default");

console.log('Rendering show.jsx')
function show (data) {
    console.log(data.place.id)

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i =0; i < averageRating; i++) {
            stars += '⭐'
        } 
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border" key={c._id}>
                <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 🥰'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <strong>- {c.author}</strong>
                </h3>
                <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="container">
                    <h1>{ data.place.name }</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src={ data.place.pic } alt={ data.place.name } className="img-fluid" />
                        </div>
                    <div className="col-md-6">
                    <h3>
                        Located in { data.place.city }, { data.place.state }
                    </h3>  
                    <h2>
                        Description
                    </h2>
                    <h3>
                        { data.place.showEstablished() }
                    </h3>
                    <h4>
                        { data.place.cuisines }
                    </h4>
                        <h2>Rating</h2>
                        { rating }

                        <h2>Comments</h2>
                        { comments }
                      </div>
                    </div>
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>

                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author"></input>

                    <label htmlFor="content">content</label>
                    <textarea id="content" name="content"></textarea>

                    <label htmlFor="stars">Star Rating</label>
                    <input type="number" id="stars" name="stars" step="0.5"></input>

                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox" id="rant" name="rant"></input>

                    <input type="submit" value="Submit"></input>
                </form>

                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" value="Delete" className="btn btn-danger">
                    Delete
                    </button>
                </form>    
            </main>
        </Def>
    )
}

module.exports = show;


















  


























// Graveyard


