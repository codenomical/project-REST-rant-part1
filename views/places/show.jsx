// Bonus: Created Show page so this will accept data for one place at a time.
const React = require('react');
const Def = require('./default');

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
            </main>
        </Def>
    )
}

module.exports = show;