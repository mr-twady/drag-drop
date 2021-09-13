import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import logo from './logo.svg';
import './App.css';

function App() {
  const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: logo
    },
    {
      id: 'Mary',
      name: 'Dele Lasana',
      thumb: logo
    },
    {
      id: 'Sary',
      name: 'Kochen Moodie',
      thumb: logo
    }
  ];

  const [characters, updateCharacters] = useState(finalSpaceCharacters);


  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
const [reorderedItem] = items.splice(result.source.index, 1);
items.splice(result.destination.index, 0, reorderedItem);

updateCharacters(items);

console.log('Debounce here for like 2 secs, and then make API call')
  }
  
  return (
    <div className="App">
      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="chsdaracters">
        {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {characters.map(({id, name, thumb}, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                 {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className="characters-thumb">
                  <img src={thumb} alt={`${name} Thumb`} height="50" />
                </div>
                <p>
                  { name }
                </p>
              </li>
              )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
         )}
        </Droppable>

      </DragDropContext>
      
    </div>
  );
}

export default App;
