// Create a home under /views/places
const React = require('react');
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home;