import { useState } from 'react'
import Diagnosis from '../Daignosis'
import RXOrders from '../RXOrders'
import VisitCode from '../VisitCode'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

const initialCodesList = [
    { id: '1', name: 'UA (81002)', isChecked: false },
    { id: '2', name: 'TAS (76856)', isChecked: false },
    { id: '3', name: 'PAP (Q0091)', isChecked: false },
    { id: '4', name: 'UA (81002)', isChecked: false },
    { id: '5', name: 'TAS (76856)', isChecked: false },
    { id: '6', name: 'PAP (Q0091)', isChecked: false },
    { id: '7', name: 'UA (81002)', isChecked: false },
    { id: '8', name: 'TAS (76856)', isChecked: false },
    { id: '9', name: 'PAP (Q0091)', isChecked: false },
    { id: '10', name: 'UA (81002)', isChecked: false },
    { id: '11', name: 'TAS TAS TAS TAS (76856) ', isChecked: false },
    { id: '12', name: 'PAP (Q0091)', isChecked: false },
    { id: '13', name: 'UA (81002)', isChecked: false },
    { id: '14', name: 'TAS (76856)', isChecked: false },
    { id: '15', name: 'PAP (Q0091)', isChecked: false },
    { id: '16', name: 'hi', isChecked: false },
];

const PatientForm = () => {
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false)
    const [testType, setTestType] = useState('VisitCode')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [testName, setTestName] = useState('')
    const [visitCodeTests, setVisitCodeTests] = useState(initialCodesList)
    const handleAddTest = e => {
        e.preventDefault()
        const newTest = {
            id: uuidv4(),
            name: testName,
            isChecked: false
        }
        setVisitCodeTests(prev => [...prev,newTest])
        setTestName('')
        setIsSubmitted(false)
    }

    const handleTestCheck = (e, code) => {
        console.log("code", code)
        setVisitCodeTests(prev => prev.map(each => each.id === code.id ? { ...each, isChecked: !each.isChecked } : each))
    }
    
    return (
        <div className="patient-form-bg-container" >
            <div className='edit-form-container'>
                <div className='add-button-container'>
                    <button onClick={() => setIsAddButtonClicked(true)} className='add-button'>Add</button>
                </div>
                {isAddButtonClicked &&
                    <div>
                        <select onChange={(e) => setTestType(e.target.value)} value={testType} className='drop-down'>
                            <option>VisitCode</option>
                            <option>Daignosis</option>
                            <option>RXorders</option>
                        </select>
                        <button onClick={() => setIsSubmitted(true)} className='add-test-button'>ADD </button>
                        {isSubmitted &&
                            <form onSubmit={handleAddTest} className='form'>
                                <input maxLength={15} className='form-input' placeholder='Enter Test Name' onChange={(e) => setTestName(e.target.value)} required />
                                <button type='submit' className='test' >Add Test</button>
                            </form>
                        }

                    </div>
                }
                <div>
                    <div>
                        <h3>VisitCode</h3>
                        {visitCodeTests.map(eachVisitCode => <div key={eachVisitCode.id}>
                            <input type='checkbox' id={eachVisitCode.id} checked={eachVisitCode.isChecked} onChange={(e) => handleTestCheck(e, eachVisitCode)} />
                            <label htmlFor={eachVisitCode.id}>{eachVisitCode.name}</label>
                        </div>)}
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className='preview-container'>
                <div className="fixed-block">
                    Fixed Block
                </div>
                <div className="fixed-block">
                    Block 2
                </div>
                <div className="test-containers">
                    <div className="visit-code-container">
                        <VisitCode tests={visitCodeTests.filter(each => each.isChecked)} />
                    </div>
                    <div className="daignosis-container">
                        <Diagnosis />
                    </div>
                    <div className="rxorder-container">
                        <RXOrders />
                    </div>
                </div>
                <div className="bottom-container">

                </div>
                <div><span style={{ fontWeight: "bold" }}>WRITTEN CONSENT: </span><span> I was seen by the provider & understand the purpose, risks and benefits of all the  procedure(s). We discussed alternatives. I acknowledge that no guarantees or promises have been made to me concerning the results of this procedure or any treatment that may be required because of this procedure. This procedure has been explained to me in language that I understand. I have been given the opportunity to ask questions which have been answered to my satisfaction. I consent to the performance of the procedure (s) as described above.</span>
                </div>
                <div className="footer-container">
                    <h5>PROCEDURE:</h5>
                    <input type="checkbox" id="HysteroscopyBiopsy" />
                    <label htmlFor="HysteroscopyBiopsy" className='footer-text'>Hysteroscopy + Biopsy</label>
                    <input type="checkbox" id="Cystoscopy" />
                    <label htmlFor="Cystoscopy" className='footer-text'>Cystoscopy</label>
                    <hr className="hr-line" />
                    <label className='footer-text'> PATIENT SIGNATURE</label>
                    <hr className="hr-line" />
                </div>
            </div>
        </div>
    )
}
export default PatientForm


