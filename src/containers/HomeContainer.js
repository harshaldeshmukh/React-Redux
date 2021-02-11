import {connect} from 'react-redux';
import Home from "../components/Home";
import { addToCard ,removeToCard } from '../Services/Actions/action';

const mapStateToProps=state=>({
    cardData:state.cardItems

})
const mapDispachToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCard(data)),
    removeToCartHandler:data=>dispatch(removeToCard())

})

export default connect(mapStateToProps,mapDispachToProps)(Home)




//export default Home;
