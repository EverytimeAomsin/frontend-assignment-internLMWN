import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import './App.css';
import './css/input.css'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


function App() {

  useEffect(() => {
    document.title = "เที่ยวไหนดี";
    keyword();

  }, []);

  const [trips, gettrips] = useState([]);
  const [query, setQuery] = useState("");

  const keyword = () => {
    axios.get(`http://localhost:8000/api/trips?keyword=${query}`).then((res) => {
      if (res.status === 200) {
        gettrips(res.data);
        console.log(res.data);
      }
    })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="MT80">
      <MDBRow>
        <MDBCol md='2' className=''>
        </MDBCol>
        <MDBCol md='8' className=''>
          <h1 className='fw-bolder text-center text-info header FS400'>เที่ยวไหนดี</h1>
          <div className="MT80">
            <Router>
              <div className="form__group field ">

                  {/* ช่องค้นหา */}

                <input type="input"
                  type="keyword"
                  placeholder="หาที่เที่ยวแล้วไปกัน..."
                  onKeyPress={keyword}
                  onChange={(event) => { setQuery(event.target.value); }}
                  value={query}
                  className="form__field" placeholder="keyword" name="keyword" id='keyword' />
                <label for="keyword" className="form__label Kanit300">หาที่เที่ยวแล้วไปกัน</label>

                {/* ช่องค้นหา */}
              </div>
            </Router>
          </div>

          <div>
            {trips.map((trip, index) => (
              <div className="MT50">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md='4' className=''>
                      <img src={trip.photos[0]} className='img-fluid  mhm ' ></img>
                    </MDBCol>
                    <MDBCol md='7' className=''>
                       <h4 className='fw-bolder Kanit700 MTT'><a className="link-dark FS23" href={trip.url}>{trip.title}</a></h4> {/* ชื่อเรื่อง */}
                      <MDBTypography className='lead mb-0 Kanit300' style={{ fontSize: '15px' }}>
                        <span className="line-clamp-description ">{trip.description}</span>
                        <span> <a href={trip.url} className="text-decoration-underline">อ่านต่อ</a></span>
                      </MDBTypography>

                      <div className="d-flex align-items-start"><p>หมวด - {/* Tag */}
                        {trip.tags.map((tag, idTag) =>
                          <Router>
                            <Link onMouseDown={() => setQuery(trips[index].tags[idTag])} onClick={keyword}><span >{" " + tag + ","}</span></Link>
                          </Router>
                        )}</p></div>   {/* Tag */}

                      <div className="d-flex align-items-start">
                       
                          <div className="p-2"><img src={trip.photos[1]} className='img-fluid  rounded mhs' alt='...' /></div>
                          <div className="p-2"><img src={trip.photos[2]} className='img-fluid  rounded mhs' alt='...' /></div>
                          <div className="p-2"><img src={trip.photos[3]} className='img-fluid  rounded mhs' alt='...' /></div>
                       

                      </div>

                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            ))}
          </div>
        </MDBCol>
        <MDBCol md='2' >
        </MDBCol>
      </MDBRow>
    </div>
  );
}




export default App;


