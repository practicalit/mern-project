import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function MemberDetail() {
  let location = useLocation();
  
  //useParams -reading
  return (
    
    <Card>
      <div className="card">
      <Card.Img variant="top"style= {{ height: "400px" }} src='https://media.istockphoto.com/vectors/teamwork-icon-business-concept-team-work-union-logo-on-white-vector-id961742626?k=20&m=961742626&s=612x612&w=0&h=WU1b9UVXZy8G4WGmZ0dOf38kfeHZGHZrp7CSHX2Tc_Y='/>
    <h1 className="card-header">Member Detail</h1>
    <div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">FirstName: {location.state.eventObject.firstName}</h6>
    <h6 className="card-subtitle mb-2 text-muted">LastName: {location.state.eventObject.lastName}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Email: {location.state.eventObject.email}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Country: {location.state.eventObject.country}</h6>
    <h6 className="card-subtitle mb-2 text-muted">City: {location.state.eventObject.city}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Gender: {location.state.eventObject.gender}</h6>

  </div>
</div> 
</Card>
    
  );
}

export default MemberDetail;
