import jQuery from 'jquery'

module.exports = {

    apiUrl : rest_data.api_url,

    request : function( post_type, post_id, callback ) {

        var getData = jQuery.ajax({
            type: 'GET',
            url: apiUrl + '/wp/v2/' + post_type + '/' + post_id,
            dataType: json,
            success: (data) => {
                if( !callback ) {

                    return;
                }
                callback( data, null, xhr.getAllResponseHeaders() );
            },
            beforeSend: (jqxhr) => {
                jqxhr.setRequestHeader( 'X-WP-Nonce', rest_data.nonoce )
            }
        });

        getData.fail( err => {
            if (getData.status === 0) {
                if (getData.statusText === 'abort') {
                    // Has been aborted
                    return;
                } else {
                    // Offline mode
                }
            }

            if ( err.responseJSON && err.responseJSON[0] ) {
                this.lastRequest.data = err.responseJSON[0]
                if ( ! callback ) {
                    return;
                }
                callback( null, err.responseJSON[0] );
            } else {
                alert( err.statusText );
            }
        });

        return getData;
    }
}