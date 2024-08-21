import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ViewProfile.css'; // Import the CSS file for styling

const ViewProfile = () => {
  return (
    <div className="profile-container">
      <div className='box'></div>
      <div className='patient'>
        <h4><ArrowBackIcon></ArrowBackIcon>View patient</h4>
        <hr></hr>
        <header className="profile-header" style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <h3 className="profile-name">S. Meena, F/23</h3>
        <p className="patient-id">Patient ID: 87 202007271153457</p>
      </div>
      <AccountCircleIcon style={{ marginLeft: 'auto', paddingRight:'20px', fontSize: '50px'}} />
    </header>
    <div className="goal-section">
      <h3>Goal reached</h3>
      <div className="goal-content">
        <div className="goal-meter">
          <div className="semi-circle"></div>
          <div className="goal-percentage">40%</div>
        </div>

        <div className="goal-metrics">
          <div className="metric">
            <div className="metric-graph emg"><p>EMG</p></div>
          </div>
          <div className="metric">
            <div className="metric-graph rom"><p>ROM</p></div>
          </div>
        </div>
      </div>
    </div>
    <div className="patient-details">
      <div className="contact-info">
        <p>Phone no. : 8022334455</p>
        <p>Mail ID: meenarabinsachin2@gmail.com</p>
      </div>
      <div className="medical-details">
        <p>Affected side: Bilateral</p>
        <p>Condition: Ortho</p>
        <p>Speciality: Osteoarthritis</p>
      </div>
    </div>
    </div>
    <hr></hr>
    <h4 className='patient'>Medical history: Hypertension, DM, Hypothyroidism</h4>
    <hr></hr>
    </div>
  );
};

export default ViewProfile;
