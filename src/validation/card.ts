import * as cardRegex from './rules/card';
import { regexValidation, createError, rejectIfNull } from './helpers';
import { CardType } from '../interfaces/entities/card-type';
import { Card } from '../interfaces/entities/card';

export function validateNumber(number: number) {
  return regexValidation(
    number,
    cardRegex.NumberRegex,
    'The card must have a valid number [1-54]'
  );
}

export async function validateType(type: CardType) {
  const validType = type in CardType;
  if (!validType) {
    const err = createError('Invalid card type');
    throw err;
  }
  return type;
}

export async function validate(card: Card) {
  try {
    await rejectIfNull(card, 'Card is null or undefined');
    await validateNumber(card.number);
    await validateType(card.type);
  } catch (err) {
    err.message = 'Invalid card: ' + err.message;
    throw err;
  }
  return card;
}
