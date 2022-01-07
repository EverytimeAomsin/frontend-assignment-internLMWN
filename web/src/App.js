import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './App.css';

function App() {
  const [trips, setMenu] = useState([]);
  const [photo, setphoto] = useState([]);
  useEffect(() => {
    document.title = "เที่ยวที่ไหนดี";
    loadMenus();
  }, []);

  const loadMenus = async () => {
    const result = await axios.get("http://localhost:9000/trips");
    setMenu(result.data.reverse());
    setphoto(result.data.reverse());
  };
  return (
    <div style={{ marginTop: '60px' }} className="">
      <MDBRow>
        <MDBCol md='3' className='col-example'>
        </MDBCol>
        <MDBCol md='6' className='col-example'>
          <h1 style={{ fontSize: '400%' }} className='fw-bolder text-center text-info '>เทียวที่ไหนดี</h1>
          <div style={{ marginTop: '40px' }}>
            <MDBInput label='หาที่เที่ยวกัน' id='form1' type='text' />
          </div>
          <div>
            {trips.map((trip) => (
              <div style={{ marginTop: '40px' }}>
                <MDBRow>
                  <MDBCol md='4' className='col-example'>
                    <img src='https://cdn.discordapp.com/attachments/556546837247426635/929058679360221254/Illustration.jpg' className='img-fluid rounded' style={{ height: '100%' }}></img>
                  </MDBCol>
                  <MDBCol md='8' className='col-example'>
                    <h4 className='fw-bolder Kanit700'><a className="link-dark ms-2" href={trip.url}>{trip.title}</a></h4>
                    <p className="line-clamp-description">{trip.description}</p>
                    <p >ลงเครื่องที่ สนามบินเถาหยวน เวลา... <a href={trip.url} className="text-decoration-underline">อ่านต่อ</a><p style={{ fontSize: '13px' }}>หมวด - กรุ๊ปกิน ทริปต่างประเทศ และ ทริปเอเชีย</p></p>
                    <div >
                      <div className="d-flex flex-row  mb-3">
                        <div className="p-2"><img src='https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg' className='img-fluid  rounded' alt='...' /></div>
                        <div className="p-2"><img src='https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg' className='img-fluid  rounded' alt='...' /></div>
                        <div className="p-2"><img src='https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg' className='img-fluid  rounded' alt='...' /></div>
                        {trips.map((photo) => (

                          <div className="p-2"><img src={photo.photos} className='img-fluid  rounded' alt='...' /></div>
                        ))}
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            ))}
          </div>
          {/* แถว 1 */}

          {/* แถว 1 */}


        </MDBCol>
        <MDBCol md='3' className='col-example'>
        </MDBCol>
      </MDBRow>



    </div>
  );
}

export default App;
