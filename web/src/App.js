import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import './App.css';
import './css/input.css'

import {
  BrowserRouter as Router,
  Switch, Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  const [trips, settrips] = useState([]);
  const [photo, setphoto] = useState([]);
  useEffect(() => {
    document.title = "เที่ยวไหนดี";
    loadtrips();
  }, []);

  const loadtrips = async () => {
    const result = await axios.get("http://localhost:9000/trips" + "?q=" + text);
    settrips(result.data.reverse());
    setphoto(result.data.reverse());
  };
  let url = '';
  let id = url;
  const [text, settext] = useState("");
  console.log(text)
  return (
    <div style={{ marginTop: '80px' }} className="">
      <MDBRow>
        <MDBCol md='2' className=''>
        </MDBCol>
        <MDBCol md='8' className=''>
          <h1 style={{ fontSize: '400%' }} className='fw-bolder text-center text-info header'>เที่ยวไหนดี</h1>
          <div style={{ marginTop: '80px' }}>

            <div class="form__group field ">
              <input type="input" class="form__field" placeholder="Name" name="name" id='name' />
              <label for="name" class="form__label Kanit300">หาที่เทียวแล้วไปกัน</label>
            </div>
          </div>
          <div>

            {trips.map((trip) => (
              <div style={{ marginTop: '50px' }}>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md='4' className=''>
                      <img src={trip.photos[0]} className='img-fluid rounded mhm ' ></img>
                    </MDBCol>
                    <MDBCol md='7' className=''>
                      <h4 className='fw-bolder Kanit700' style={{ fontSize: '23px' }}><a className="link-dark " href={trip.url}>{trip.title}</a></h4>
                      <MDBTypography className='lead mb-0  ' style={{ fontSize: '15px' }}>
                        <span className="line-clamp-description">{trip.description}</span>  <a href={trip.url} className="text-decoration-underline">อ่านต่อ</a>
                      </MDBTypography>
                      <div className="d-flex align-items-start"><p>หมวด -
                        {trip.tags.map((tag) =>
                          <Router>
                            <Link to="คาเฟ่" onClick={() => settext(tag)}><span >{" " + tag + ","}</span></Link>

                          </Router>
                        )}</p></div>
                      <div className="d-flex align-items-start">
                        {trip.photos.map((photo) =>
                          <div className="p-2"><img src={photo} className='img-fluid  rounded mhs' alt='...' /></div>
                        )}

                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            ))}

          </div>

        </MDBCol>
        <MDBCol md='2' className='col-example'>
        </MDBCol>
      </MDBRow>

      <Router>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>

      </Router>
      <h3>คำค้นหา : {text}</h3>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
     
    </div>
  );
}

export default App;


