import React,{useState} from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'
// import JobDetails from './JobDetails';

const JobCard = ({job}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return ( 
        
    <Card className="mb-4">
      <Card.Body>
      <div className="d-flex justify-content-between">
          <div>
            <Card.Title className="mb-2 cardt">
              {job.name} - <span className="cardd font-weight-light">{job.company.name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-4 cards">
             Location: {job.locations[0] && job.locations[0].name}
            </Card.Subtitle>
            <Card.Subtitle className=" mb-3">
             Post : {job.levels[0] && job.levels[0].name}
            </Card.Subtitle>
           
           </div> 
           <div>
           <Card.Subtitle className="text-muted mb-4 mt-2">
            Date Posted: {new Date(job.publication_date).toLocaleDateString()}
            </Card.Subtitle>
          <Button href={job.refs.landing_page} variant="secondary" className="cardb" >
            Job Link
          </Button>
          </div>
        </div>

        <Card.Text>
          <Button
             onClick={toggle} variant="primary">
             {isOpen ? 'Hide Details' : 'View Details'}
         </Button>   
         <Collapse in={isOpen}>
         <div>{job.contents}</div>
          {/* {isOpen==true && <JobDetails job={job}/>} */}
        </Collapse> 
        </Card.Text> 
         

       </Card.Body>
     </Card>
     );
}
 
export default JobCard;