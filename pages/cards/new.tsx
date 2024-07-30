import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { addCard } from '../../utils/api';
import { CardType } from '../../utils/type';

const Page = () => {
  const router = useRouter();

  const emptyCard = {
    id: '',
    question: '',
    hint: '',
    answer: ''
  }

  const [card, setCard] = useState<CardType>(emptyCard);

  const onClickAddCard = async (card) => {
    try {
      await addCard(card);
      router.push('/cards');
    } catch (error) {
      console.error('Error getting card:', error);
    }
  }

  return (
    <div>
      <h1>Add Card</h1>
      <div>Question: <input value={card.question} onChange={(e) => setCard((prev) => ({...prev, question: e.target.value}))} /></div>
      <div>Hint: <input value={card.hint} onChange={(e) => setCard((prev) => ({...prev, hint: e.target.value}))} /></div>
      <div>Answer: <input value={card.answer} onChange={(e) => setCard((prev) => ({...prev, answer: e.target.value}))} /></div>
      <button onClick={() => onClickAddCard(card)}>Add</button>
    </div>
  );
}

export default Page;