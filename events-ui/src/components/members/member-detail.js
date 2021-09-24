import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function MemberDetail() {
  let location = useLocation();
  //useParams -reading
  return (
    <Card>
      <div className="card">
        <h5 className="card-header">Member Detail</h5>
        <div className="card-body">
          <p className="card-subtitle mb-2 text-muted">
            FirstName: {location.state.eventObject.firstName}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            LastName: {location.state.eventObject.lastName}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            E-mail: {location.state.eventObject.email}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            Country: {location.state.eventObject.country}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            City: {location.state.eventObject.city}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            Gender: {location.state.eventObject.gender}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default MemberDetail;
