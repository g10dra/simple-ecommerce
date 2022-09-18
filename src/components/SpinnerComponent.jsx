import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const SpinnerComponent = () => {
    const { loading } = useSelector((state) => state.loadingReducer);
    return (loading &&
        <div id="spinner">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
export default SpinnerComponent;