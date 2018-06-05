import React from "react";

const Listings = (props) => {

  const jobs = props.jobs.map(job => {
      return (  <li>
                  <h4>{job.title}</h4>
                  <small>{job.pay}</small>
                  <p>{job.description}</p>
                  <small>{job.interested.length} dinos are interested in this job</small>
                </li>
              ) 
      })
  
    return (
      <section>
          <h2>Job Listings</h2>
          <ul id="job-listings">
            {jobs.reverse()}
          </ul>
      </section>
    )
};

export default Listings;
