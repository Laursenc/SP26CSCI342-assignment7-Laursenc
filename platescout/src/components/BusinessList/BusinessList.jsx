import './BusinessList.css';
import Business from '../Business/Business.jsx';

//takes in an array of businesses
function BusinessList({businesses}) {
    return(
        <div className='BusinessList'>{

        /*for every item in businesses return a Business with the list item
        stored and the list index stored as well*/
        businesses.map((business, key) => {
            
            return <Business business = {business} key ={key}></Business>
        })}
        
        </div>
    );
}

export default BusinessList;