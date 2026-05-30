const SEARCH_PATH = "/api/yelp/businesses/search";

async function searchBusinesses(term, location, sortBy){

    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    const res = await fetch(`${SEARCH_PATH}?${params}`);

    if (!res.ok){
        throw new Error(`Yelp request failed (${res.status})`);

    } else {
        //convert the response to json, the response is just a promise
        //converting it to a json actually gets the data
        const jsonRes = await res.json();

        //print out the response we get so we can see in the terminal 
        //the different .json categories of our response
        console.log(jsonRes);

        //we might get an okay response but things could change and maybe the 
        //resposnse no longer has a field of business, so we need to check to see if it does
        if(jsonRes.businesses !== undefined){
            return jsonRes.businesses.map((business) => ({
                //if it does then we need to take all the data in the .business
                //part of the response and match up all of our business properties with
                //the given properties from response
                //the response has snake case
                //left is business catergory right is the .json entry
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                category:business.categories[0].title, 
                rating: business.rating,
                reviewCount: business.review_count,
            }));
        }
    }
}

export default searchBusinesses;