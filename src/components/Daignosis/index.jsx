import './index.css'; 

const diagnosisList = [
  { id: '1', name: 'Adenomyosis (N80.0)' },
  { id: '2', name: 'Amenorrhea (N91.2)' },
  { id: '3', name: 'Pregnancy (Z32.9)' },
  { id: '4', name: 'AUB (N93.9)' },
  { id: '5', name: 'Cystocele (N81.10)' },
  { id: '6', name: 'Prolapse (N81.4)' },
  { id: '7', name: 'Dysplasia (N89.3)' },
  { id: '8', name: 'Endometriosis (N80.9)' },
  { id: '9', name: 'Endo Cancer (C54.1)' },
  { id: '10', name: 'Fibroids (D25.9)' },
  { id: '11', name: 'Vag Discharge (N89.8)' },
  { id: '12', name: 'Fluid in endo/ thicken (N85.9/ R93.89)' },
  { id: '13', name: 'Hematuria (R31.9)' },
  { id: '14', name: 'Dysmenorrhea (N94.6)' },
  { id: '15', name: 'Incontinence (R32)' },
  { id: '16', name: 'Menopause (Z78.0)' },
  { id: '17', name: 'Ovarian cyst (N83.2)' },
  { id: '18', name: 'PCOS (N83.209)' },
  { id: '19', name: 'Pelvic Mass (R19.07)' },
  { id: '20', name: 'Pelvic Pain (R10.2)' },
  { id: '21', name: 'PMB (N95.0)' },
  { id: '22', name: 'Acute cystitis (UTI)' }
];

const CoMorbidDiagnosis = [
  { id: '1', name: 'Anemia' },
  { id: '2', name: 'Obesity' },
  { id: '3', name: 'HTN (110)' },
  { id: '4', name: 'GERD' },
  { id: '5', name: 'Smoker' },
  { id: '6', name: 'DM (E13.638)' },
  { id: '7', name: 'Endo Cancer' },
  { id: '8', name: 'High Risk' }
];

const Diagnosis = () => {
  return (
    <div>
      <h3 className='visitcode-title'>Diagnosis</h3>
      <div className='check-box-area'>
        {diagnosisList.map((diagnosis) => (
          <div key={diagnosis.id} className='check-box-area-in'>
            <input type="checkbox" id={diagnosis.id} />
            <label htmlFor={diagnosis.id} >{diagnosis.name}</label>
          </div>
        ))}
      </div>
      <h3 className='visitcode-title'>Co-Morbid Diagnosis</h3>
      <div className='check-box-area'>
        {CoMorbidDiagnosis.map((item) => (
          <div key={item.id}  className='check-box-area-in'>
            <input type="checkbox" id={item.id} />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
      </div>
      <div className='check-box-area'>
      <h3 className='visitcode-title'>Follow Up</h3>
<div className='check-box-area-in'>
  <input type="checkbox" id="2weeks" />
  <label htmlFor="2weeks">2 Weeks</label>
</div>
<div className='check-box-area-in'>
  <input type="checkbox" id="3months" />
  <label htmlFor="3months">3 Months</label>
</div>
<div className='check-box-area-in'>
  <input type="checkbox" id="6months" />
  <label htmlFor="6months">6 Months</label>
</div>
</div>
    </div>
  );
}

export default Diagnosis;

{/* <div className='check-box-area'>
<div key={item.id} className='check-box-area-in'>
  <input type="checkbox" id="2weeks" />
  <label htmlFor="2weeks">2 Weeks</label>
</div>
<div key={item.id} className='check-box-area-in'>
  <input type="checkbox" id="3months" />
  <label htmlFor="3months">3 Months</label>
</div>
<div key={item.id} className='check-box-area-in'>
  <input type="checkbox" id="6months" />
  <label htmlFor="6months">6 Months</label>
</div>
</div> */}