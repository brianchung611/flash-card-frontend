import React, { useState, useEffect } from 'react';
import { getAllCards } from '../../utils/api';
import { CardType } from '../../utils/type';
import { useRouter } from 'next/router';

const Index = () => {
	const router = useRouter();
	const [cards, setCards] = useState<Array<CardType>>([]);

  const fetchAllCards = async() => {
    try {
      const responseData = await getAllCards();
        setCards(responseData);
			} catch (error) {
				console.error('Error getting cards:', error);
      }
    }

    useEffect(() => {
      fetchAllCards();
    }, []);

    return (
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <div>{`id: ${card.id}, question: ${card.question}, hint: ${card.hint}, answer: ${card.answer}`}</div>
            <button onClick={() => router.push(`/cards/${card.id}`)}>Edit</button>
          </div>
        ))}
      </div>
    )
}

export default Index;