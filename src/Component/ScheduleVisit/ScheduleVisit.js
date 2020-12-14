import React from 'react'
import './ScheduleVisit.scss'

export default function ScheduleVisit() {
    return (
        <div className='visit-container'>
            <form className='visit-form'>
                <h1 className='schedule-heading'>SCHEDULE A VISIT</h1>
                <div class="grid-container">

                    <div class="item1">
                        <div className="form-group">
                            <label className='form-label'>Name</label><br />
                            <input type='text' className='form-input'></input><br />
                        </div>
                    </div>

                    <div class="item2">
                        <div className="form-group">
                            <label className='form-label'>Date</label><br />
                            <input type='text' className='form-input'></input><br />
                        </div>
                    </div>

                    <div class="item3">
                        <div className="form-group">
                            <label className='form-label'>Phone</label><br />
                            <input type='text' className='form-input'></input><br />
                        </div>
                    </div>

                    <div class="item4">
                        <div className="form-group">
                            <label className='form-label'>Service Provided</label><br />
                            <input type='text' className='form-input'></input><br />
                        </div>
                    </div>

                    <div class="item5">
                        <div className="form-group">
                            <label className='form-label'>Feedback</label><br />
                            <textarea className='form-input' name="myTextBox" cols="5" rows="5" ></textarea>
                        </div>
                    </div>

                    <div class="item6">
                        <button type='submit' className='btn btn-light badge-pill visit-btn' style={{ borderRadius: '30px', color: '#277E82', fontFamily: 'Si-ui-bold', fontSize: 'large', fontWeight: 'bold', padding: '10px' }}>Submit</button>
                    </div>

                    <div class="item7">
                        <button type='submit' className='btn btn-light badge-pill visit-btn' style={{ borderRadius: '30px', color: '#277E82', fontFamily: 'Si-ui-bold', fontSize: 'large', fontWeight: 'bold', padding: '10px' }}>Call Us</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
