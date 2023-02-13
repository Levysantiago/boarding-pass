import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();
async function main() {
  await prisma.seat.deleteMany();
  await prisma.seatType.deleteMany();
  await prisma.flight.deleteMany();
  await prisma.aircraft.deleteMany();
  await prisma.route.deleteMany();
  await prisma.airport.deleteMany();

  // AIRPORT
  const airport_GRU_id = randomUUID();
  await prisma.airport.create({
    data: {
      id: airport_GRU_id,
      city: 'GRU',
      state: 'São Paulo',
      country: 'Brasil',
    },
  });

  const airport_IOS_id = randomUUID();
  await prisma.airport.create({
    data: {
      id: airport_IOS_id,
      city: 'IOS',
      state: 'Bahia',
      country: 'Brasil',
    },
  });

  // AIRCRAFTS
  await prisma.aircraft.create({
    data: {
      id: randomUUID(),
      code: 'RS995',
      firstSeat: '1A',
      lastSeat: '11F',
    },
  });

  await prisma.aircraft.create({
    data: {
      id: randomUUID(),
      code: 'RS195',
      firstSeat: '1A',
      lastSeat: '11F',
    },
  });

  await prisma.aircraft.create({
    data: {
      id: randomUUID(),
      code: 'RS235',
      firstSeat: '1A',
      lastSeat: '11F',
    },
  });

  // ROUTES
  const route_IOS_GRU_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_IOS_GRU_id,
      airportIdFrom: airport_IOS_id,
      airportIdTo: airport_GRU_id,
      duration: '1h',
    },
  });

  // FLIGHTS
  const flight_IOS_GRU_id = randomUUID();
  await prisma.flight.create({
    data: {
      id: flight_IOS_GRU_id,
      routeId: route_IOS_GRU_id,
      terminal: '1',
      gate: '1',
      finishBookingTime: new Date('10/13/23'),
      boardingEndingTime: new Date('10/13/23'),
      boardingTime: new Date('04/13/23'),
      flightTime: new Date('04/13/23'),
      aircraftCode: 'RS995',
    },
  });

  // SEAT TYPES
  const seatTypeDefaultId = randomUUID();

  await prisma.seatType.create({
    data: {
      id: seatTypeDefaultId,
      name: 'Default',
      price: '70.00',
    },
  });

  const seatTypeConfortId = randomUUID();

  await prisma.seatType.create({
    data: {
      id: seatTypeConfortId,
      name: 'Confort',
      price: '70.00',
    },
  });

  // SEATS
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  numbers.map(async (n) => {
    letters.map(async (l) => {
      await prisma.seat.create({
        data: {
          id: randomUUID(),
          code: `${n}${l}`,
          side: 'window',
          seatTypeId: seatTypeDefaultId,
          flightId: flight_IOS_GRU_id,
        },
      });
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
