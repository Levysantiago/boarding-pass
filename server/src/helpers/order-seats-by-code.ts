import { Seat } from '@app/entities/seat';

export function orderSeatsByCode(seats: Seat[]): Seat[] {
  return seats.sort((a: Seat, b: Seat) => {
    const _numberA = parseInt(a.code.substring(0, a.code.length - 1));
    const _letterA = a.code[a.code.length - 1];
    const _numberB = parseInt(b.code.substring(0, b.code.length - 1));
    const _letterB = b.code[b.code.length - 1];

    return (
      _letterA.charCodeAt(0) - _letterB.charCodeAt(0) || _numberA - _numberB
    );
  });
}
