// Bonus: Created Show page so this will accept data for one place at a time.
const React = require("react");
const Def = require("../default");

function Show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
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
                        <p>Currently unrated</p>

                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                      </div>
                 </div>
             </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" value="Delete" className="btn btn-danger">
                    Delete
                    </button>
                </form>    
            </main>
        </Def>
    )
}

module.exports = Show;




































function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              ...
            </div>
            <hr />
            <h2>Comments</h2>
            {comments}
          </main>
        </Def>
    )
}

module.exports = show

