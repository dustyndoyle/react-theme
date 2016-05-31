import React from 'react'
import API from '../api'

module.exports = React.createClass({

    render : function() {
        
        var page = API.request( 'pages', 4, )
        console.log('Hello');
        return(
            <div className="content">
                <h1>This is the page title</h1>
                <p>This is some content</p>
            </div>
        );
    }
})