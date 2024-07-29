import { useEffect, useState } from 'react';
import './App.css';
import { getAllCards, getCard, addCard, updateCard, deleteCard } from './services/api';

function App() {
  const [allCards, setAllCards] = useState([]);
  const [card, setCard] = useState();
  const [question, setQuestion] = useState();
  const [hint, setHint] = useState();
  const [answer, setAnswer] = useState();

  const getAllCardsCall = async () => {
    try {
      const responseData = await getAllCards();
      setAllCards(responseData);
    } catch (error) {
      console.error('Error getting all cards:', error);
    }
  }

  const getCardCall = async () => {
    try {
      const responseData = await getCard(2);
      setCard(responseData);
    } catch (error) {
      console.error('Error getting card:', error);
    }
  }

  const addCardCall = async (data) => {
    try {
      await addCard(data);
      getAllCardsCall();
    } catch (error) {
      console.log('Error adding card:', error);
    }
  }

  const updateCardCall = async (id, data) => {
    try {
      await updateCard(id, data);
      getAllCardsCall();
    } catch (error) {
      console.log('Error updating card:', error);
    }
  }

  const deleteCardCall = async (id) => {
    try {
      await deleteCard(id);
      getAllCardsCall();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  }

  useEffect(() => {
    getAllCardsCall();
    // getCardCall();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {allCards.map((card) => (
            <div key={card.id}>
              <div>{`id: ${card.id}, question: ${card.question}, hint: ${card.hint}, answer: ${card.answer}`}</div>
              <button onClick={() => updateCardCall(card.id, {question, hint, answer})}>Update card</button>
              <button onClick={() => deleteCardCall(card.id)}>Delete card</button>
            </div>
          ))}
        </div>
        
        <div>
          Card: {card && card.question}
        </div>

        Question: <input value={question} onChange={(e) => setQuestion(e.target.value)}/>
        Hint: <input value={hint} onChange={(e) => setHint(e.target.value)}/>
        Answer: <input value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        <button onClick={() => addCardCall({question, hint, answer})}>Add card</button>
        
      </header>
    </div>
  );
}

export default App;
