// import './index.css'; 

// const codesList = [
//   { id: '1', name: 'UA (81002)' },
//   { id: '2', name: 'TAS (76856)' },
//   { id: '3', name: 'PAP (Q0091)' },
//   { id: '4', name: 'Ablation (58563)' },
//   { id: '5', name: 'SHG (76831)' },
//   { id: '6', name: 'Cystoscopy (52000)' },
//   { id: '7', name: 'Urosure (51725 + 51736)' },
//   { id: '8', name: 'Hysteroscopy + BX (58558)' },
//   { id: '9', name: 'COLPO vulva/vagina (56820)' },
//   { id: '10', name: 'Biopsy CERVIX (57500)' },
//   { id: '11', name: 'VULVA (56605)' },
//   { id: '12', name: 'UPT (81025)' },
//   { id: '13', name: 'TVUS (76830)' },
//   { id: '14', name: 'COLPO' },
//   { id: '15', name: 'Cervix' },
//   { id: '16', name: 'Shot J code' },
//   { id: '17', name: 'ECC' },
//   { id: '18', name: 'Other_____________' }
// ];

// const VisitCode = () => {
//   return (
//     <div>
//       <h3>Visit Code</h3>
//       <input type="checkbox" id="99205"/>
//       <label htmlFor="99205">99205</label>
//       <input type="checkbox" id="99204"/>
//       <label htmlFor="99204">99204</label>
//       <h3>CPT</h3>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//         {codesList.map((code) => (
//           <div key={code.id}>
//             <input type="checkbox" id={code.id} />
//             <label htmlFor={code.id} className="labelName">{code.name}</label>
//           </div>
//         ))}
//       </div>
//       <h3>Exam</h3>
//       <p>Abdomen:</p>
//       <div></div>
//       <p>Pelvic:</p>
//     </div>
//   );
// }

// export default VisitCode;

import { useState } from 'react';
import { DndContext, useDroppable, useDraggable, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './index.css';

// Initial list of codes
const initialCodesList = [
  { id: '1', name: 'UA (81002)' },
  { id: '2', name: 'TAS (76856)' },
  { id: '3', name: 'PAP (Q0091)' },
  { id: '4', name: 'UA (81002)' },
  { id: '5', name: 'TAS (76856)' },
  { id: '6', name: 'PAP (Q0091)' },
  { id: '7', name: 'UA (81002)' },
  { id: '8', name: 'TAS (76856)' },
  { id: '9', name: 'PAP (Q0091)' },
  { id: '10', name: 'UA (81002)' },
  { id: '11', name: 'TAS TAS TAS TAS (76856) ' },
  { id: '12', name: 'PAP (Q0091)' },
  { id: '13', name: 'UA (81002)' },
  { id: '14', name: 'TAS (76856)' },
  { id: '15', name: 'PAP (Q0091)' },
  { id: '16', name: 'hi' },
];

const DraggableItem = ({ id, name }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="draggable-item" {...attributes} {...listeners}>
      <input type='checkbox' id={id}/> <label htmlFor={id}>{name}</label>
    </div>
  );
};

const VisitCode = () => {
  const [codesList, setCodesList] = useState(initialCodesList);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeIndex = codesList.findIndex((code) => code.id === active.id);
      const overIndex = codesList.findIndex((code) => code.id === over.id);

      const newCodesList = [...codesList];
      newCodesList.splice(activeIndex, 1);
      newCodesList.splice(overIndex, 0, codesList[activeIndex]);

      setCodesList(newCodesList);
    }
  };

  const { setNodeRef } = useDroppable({ id: 'visitCode' });

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={codesList.map((code) => code.id)} strategy={rectSortingStrategy}>
        <h3 className='title'>Visit Code</h3>
        <div ref={setNodeRef} className="visit-code-grid">
          {codesList.map((code) => (
           <div className='item'> <DraggableItem key={code.id} id={code.id} name={code.name} /></div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default VisitCode;
