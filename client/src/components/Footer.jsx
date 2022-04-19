import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <>
      <div>
      <div className="panel-footer " id="main-footer">
          <div className="container-fluid ">
              <div className="row ">
            
                <section className="col-sm-4" id="sec1">
                    <span>Timings :</span><br />
                    11 AM - 10 PM (Mon-Sun except Friday) <br />
                    2PM-10PM on Fridays
                    
                </section>
                <section className="col-sm-4" id="sec2">
                    <span>Address</span> <br />
                    
                        102, Bund Garden Rd, Agarkar Nagar, Pune, Maharashtra <br/>
                        Pune - 411001
                    
                </section>
                <section className="col-sm-4" id="sec3">
                    <span>Reviews</span>
                    <p>
                        <q><i> One of the best Biryani and starters!!</i></q> <br/>
                        <q><i>Great Food!!! </i></q>
                    </p>
                </section>
            </div>
            </div>
            </div>
      </div>;
    </>
  );
}
