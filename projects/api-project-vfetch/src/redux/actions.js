
//////// ACTION TYPES

// clicking add favorite button should change the "isFavorite" state to 'true
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// these three actions will handle the API call for venue info
export const GET_VENUES = "GET_VENUES";
export const RECEIVE_VENUES = "RECEIVE_VENUES";

// when search is submitted, replace the default venues (from SHOW_VENUES) with search results
export const UPDATE_VENUES = "UPDATE_VENUES";

export const VIEW_PROFILE = "VIEW_PROFILE"

////// ACTION CREATORS

export const addFavorite = id => {
    return {
        type: ADD_FAVORITE,
        id
    }
}

export const viewProfile = venue => {
    return {
        type: "VIEW_PROFILE",
        venue
    }
}

function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (location) {
        callback(location.coords.latitude + ',' + location.coords.longitude)
    })
}

export const getVenues = function (query) {
    // create shorthand way to setState
    return function (dispatch) {
        // get base URL for API calls
        const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

        getLocation(function (latlong) {
            // add these paramaters to the URL (only works in Chrome 51+ I guess)
            const params = {
                client_id: '40APDXCU1MODOC2T1VBC0ERTKUQ0SIDZC3FJSB4FUR2FKMHJ',
                client_secret: 'YBVJG3DXNSJPAUVDDT3FNO14BQFSXE4AQ44B33HMHWDYGQFR',
                limit: 4,
                query: query, // set this param to the query argument of getVenues
                v: '20180716',
                ll: latlong // set the location to the user's location using latlong parameters from the function we're in
                //ll: 34.082575, -118.272938   // Silverlake Los Angeles
            }

            ////// The actual process of receiving and processing API request. How do i do this with axios?

            fetch(venuesEndpoint + new URLSearchParams(params), {
                method: 'GET'
            }).then(response => response.json()).then(response => {
                //Set the component's state to show the foursquare API respnose
                // dispatch the action
                dispatch({ type: RECEIVE_VENUES, venues: response.response.groups[0].items }); // the let setVenueState is where we created this shorthand
            });
        })
    };
}







