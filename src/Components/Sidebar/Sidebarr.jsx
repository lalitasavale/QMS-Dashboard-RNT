import React from 'react'
import '../Sidebar/Sidebarr.css'

function Sidebarr() {
  return (
    <div className='sidebarcont'>
      <div className='tab-title-cont'>
        <div>MyMeetings</div>
        <div>MeetingsSummary</div>
        <div>CalenderIntegration</div>
      </div>
      <div className='tags-title-cont'>
        <h3>Tags</h3>
        <div className='tabs-sub-div'>
          <div className='hrcolorbox'></div> <div  className='tags-text'>Hr</div>
        </div>
        <div className='tabs-sub-div'>
          <div className='grcolorbox'></div> <div  className='tags-text' >Governance</div>
        </div>
        <div className='tabs-sub-div'>
          <div className='itcolorbox'></div> <div  className='tags-text'>IT</div>
        </div> 
        <div className='tabs-sub-div'>
          <div className='ftcolorbox'></div> <div className='tags-text'>Facillity</div>
        </div>

      </div>
    </div>
  )
}

export default Sidebarr