import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/actions/productActions';

const Search = () => {

    const dispatch = useDispatch();


    return (
        <div className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                onChange={e=>dispatch(searchProduct(e.target.value))}
            /> 
        </div>
    )

}

export default Search;
