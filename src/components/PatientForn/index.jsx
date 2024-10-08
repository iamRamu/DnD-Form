import Diagnosis from '../Daignosis'
import RXOrders from '../RXOrders'
import VisitCode from '../VisitCode'
import './index.css'
const PatientForm = () => {
    return (
        <div className="patient-form-bg-container" >
            <div className="fixed-block">
                Fixed Block
            </div>
            <div className="fixed-block">
                Block 2
            </div>
            <div className="test-containers">
                <div className="visit-code-container">
                    <VisitCode />
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
            <div><span style={{fontWeight:"bold"}}>WRITTEN CONSENT: </span><span> I was seen by the provider & understand the purpose, risks and benefits of all the  procedure(s). We discussed alternatives. I acknowledge that no guarantees or promises have been made to me concerning the results of this procedure or any treatment that may be required because of this procedure. This procedure has been explained to me in language that I understand. I have been given the opportunity to ask questions which have been answered to my satisfaction. I consent to the performance of the procedure (s) as described above.</span>
            </div>
            <div className="footer-container">
                <h3>PROCEDURE:</h3>
                <input type="checkbox" id="HysteroscopyBiopsy"/>
                <label htmlFor="HysteroscopyBiopsy">Hysteroscopy + Biopsy</label> 
                <input type="checkbox" id="Cystoscopy"/>
                <label htmlFor="Cystoscopy">Cystoscopy</label> 
                <hr className="hr-line"/>
                <label> PATIENT SIGNATURE</label> 
                <hr className="hr-line"/>
            </div>
        </div>
    )
}
export default PatientForm