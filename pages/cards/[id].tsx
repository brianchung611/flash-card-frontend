import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { getCard, updateCard, deleteCard } from '../../utils/api';
import { CardType } from '../../utils/type';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const emptyCard = {
    id: '',
    question: '',
    hint: '',
    answer: ''
  }

  const [card, setCard] = useState<CardType>(emptyCard);

  const fetchCard = async (id: string) => {
    try {
      const responseData = await getCard(id);
      setCard(responseData);
    } catch (error) {
      console.error('Error getting card:', error);
    }
  }

  const onClickUpdateCard = async (id: string, data: CardType) => {
    try {
      await updateCard(id, data);
      fetchCard(id);
    } catch (error) {
      console.error('Error updating card:', error);
    }
  }

  const onClickDeleteCard = async (id: string) => {
    try {
      await deleteCard(id);
      router.push('/cards');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  }

  useEffect(() => {
    if(id) {
      fetchCard(id as string);
    }
  }, [id]);

  if (card.id === '') {
    return <h1>record not found</h1>;
  }

  return (
    <div>
      <h1>Card {card?.id}</h1>
      <div>Question: <input value={card.question} onChange={(e) => setCard((prev) => ({...prev, question: e.target.value}))} /></div>
      <div>Hint: <input value={card.hint} onChange={(e) => setCard((prev) => ({...prev, hint: e.target.value}))} /></div>
      <div>Answer: <input value={card.answer} onChange={(e) => setCard((prev) => ({...prev, answer: e.target.value}))} /></div>
      <button onClick={() => onClickUpdateCard(id as string, card)}>Update</button>
      <button onClick={() => onClickDeleteCard(id as string)}>Delete</button>
    </div>
  );
}

export default Page;