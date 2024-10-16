import './index.css'; 

const rxOrdersList = [
  { id: '1', name: 'Gabapentin' },
  { id: '2', name: 'Tramadol' },
  { id: '3', name: 'Provera' },
  { id: '4', name: 'T-Acid' },
  { id: '5', name: 'Levofloxacin' },
  { id: '6', name: 'Diflucan X3' },
  { id: '7', name: 'OCP: OLO/SLYD' },
  { id: '8', name: 'Flagyl' },
  { id: '9', name: 'Ditropan' },
  { id: '10', name: 'Metformin' },
  { id: '11', name: 'Letrozole' },
  { id: '12', name: 'Effexor' }
];

const Labs = [
  { id: '1', name: 'CBC & CMP' },
  { id: '2', name: 'Hormonal Panel' },
  { id: '3', name: 'CA125, CEA' },
  { id: '4', name: 'SPA' },
  { id: '5', name: 'URO' },
  { id: '6', name: 'GI' },
  { id: '7', name: 'Mamo' },
  { id: '8', name: 'CT' },
  { id: '9', name: 'MRI' },
  { id: '10', name: 'Primary Care' },
  { id: '11', name: 'Vascular/UFE' }
];

const RXOrders = () => {
  return (
<div className='check-box-area'>
      <h3 className='visitcode-title'>RX Orders</h3>
      <div>
        {rxOrdersList.map((medication) => (
          <div key={medication.id} className='check-box-area-in'>
            <input type="checkbox" id={medication.id} />
            <label htmlFor={medication.id}>{medication.name}</label>
          </div>
        ))}
      </div>
      <h3 className='visitcode-title'>Labs</h3>
      <div>
        {Labs.map((lab) => (
          <div key={lab.id} className='check-box-area-in'>
            <input type="checkbox" id={lab.id} />
            <label htmlFor={lab.id}>{lab.name}</label>
          </div>
        ))}
      </div>
      <div style={{height:"30px"}}>

      </div>
      <span className="span-element">HT_________</span>
      <span className="span-element">WT_________</span>
    </div>
  );
}

export default RXOrders;
