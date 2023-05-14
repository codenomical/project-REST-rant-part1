// Bonus: Created New Page for creating a new form with new restaurant information. 
const React = require('react');
const Def = require('../default');

function new_form (data) {
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                 { data.message }
                </h4>
            )
        }
    let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
        <h3>
        {Math.round(averageRating)} stars
        </h3>
    )
    return (
        <Def>
            <main>
                <h1> Add a New Place </h1>
                <div>
                { message }
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form method="POST" action="/places">
                                <div className="form-group col-sm-6">
                                
                                    <label htmlFor="name">Place Name</label>
                                    <input className="form-control" id="name" name="name" required />
                                    
                            </div>
                            <div className="form-group col-sm-6">
                                
                                    <label htmlFor="pic">Place Picture</label>
                                    <input className="form-control" id="pic" name="pic" />
                                    
                            </div>
                            <div className="form-group col-sm-6">
                                
                                    <label htmlFor="city">City</label>
                                    <input className="form-control" id="city" name="city" />
                                
                            </div>
                            <div className="form-group col-sm-6">
                                
                                    <label htmlFor="state">State</label>
                                    <input className="form-control" id="state" name="state" />
                                    
                            </div>
                            <div className="form-group col-sm-6">
                                
                                    <label htmlFor="cuisines">Cuisines</label>
                                    <input className="form-control" id="cuisines" name="cuisines" required />
                        
                            </div>
                            <div className="form-group">
                                <label htmlFor="founded">Founded Year</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="founded" 
                                name="founded" 
                                defaultValue={new Date().getFullYear()} />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Place" />
                            </form>
                        </div>    
                    </div>        
                </div>
                <p></p>
            </main>
        </Def>
    )
}

module.exports = new_form;