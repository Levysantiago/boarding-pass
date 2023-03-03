import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();
async function main() {
  await prisma.passenger.deleteMany();
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

  const airport_BSB_id = randomUUID();
  await prisma.airport.create({
    data: {
      id: airport_BSB_id,
      city: 'BSB',
      state: 'DF',
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
      code: 'LD195',
      firstSeat: '1A',
      lastSeat: '11F',
    },
  });

  await prisma.aircraft.create({
    data: {
      id: randomUUID(),
      code: 'BW235',
      firstSeat: '1A',
      lastSeat: '11F',
    },
  });

  // ROUTES
  const route_IOS_GRU_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_IOS_GRU_id,
      airportFromId: airport_IOS_id,
      airportToId: airport_GRU_id,
      duration: '2 h 20 min',
    },
  });

  const route_GRU_IOS_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_GRU_IOS_id,
      airportFromId: airport_GRU_id,
      airportToId: airport_IOS_id,
      duration: '2 h 20 min',
    },
  });

  const route_IOS_BSB_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_IOS_BSB_id,
      airportFromId: airport_IOS_id,
      airportToId: airport_BSB_id,
      duration: '1 h 45 min',
    },
  });

  const route_BSB_IOS_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_BSB_IOS_id,
      airportFromId: airport_BSB_id,
      airportToId: airport_IOS_id,
      duration: '1 h 45 min',
    },
  });

  const route_GRU_BSB_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_GRU_BSB_id,
      airportFromId: airport_GRU_id,
      airportToId: airport_BSB_id,
      duration: '1 h 35 min',
    },
  });

  const route_BSB_GRU_id = randomUUID();
  await prisma.route.create({
    data: {
      id: route_BSB_GRU_id,
      airportFromId: airport_BSB_id,
      airportToId: airport_GRU_id,
      duration: '1 h 35 min',
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
      flightPrice: '1800.00',
      finishBookingTime: new Date('2023-06-29T09:15:00.107Z'),
      boardingEndingTime: new Date('2023-06-29T09:15:00.107Z'),
      boardingTime: new Date('2023-06-29T08:30:00.107Z'),
      flightTime: new Date('2023-06-29T09:30:00.107Z'),
      arrivalTime: new Date('2023-06-29T11:50:00.107Z'),
      aircraftCode: 'RS995',
    },
  });

  const flight_IOS_GRU_id2 = randomUUID();
  await prisma.flight.create({
    data: {
      id: flight_IOS_GRU_id2,
      routeId: route_IOS_GRU_id,
      terminal: '1',
      gate: '1',
      flightPrice: '1500.00',
      finishBookingTime: new Date('2023-06-29T15:15:00.107Z'),
      boardingEndingTime: new Date('2023-06-29T15:15:00.107Z'),
      boardingTime: new Date('2023-06-29T14:30:00.107Z'),
      flightTime: new Date('2023-06-29T15:30:00.107Z'),
      arrivalTime: new Date('2023-06-29T17:50:00.107Z'),
      aircraftCode: 'LD195',
    },
  });

  const flight_GRU_IOS_id = randomUUID();
  await prisma.flight.create({
    data: {
      id: flight_GRU_IOS_id,
      routeId: route_GRU_IOS_id,
      terminal: '2',
      gate: '3',
      flightPrice: '2000.00',
      finishBookingTime: new Date('2023-07-01T09:15:00.107Z'),
      boardingEndingTime: new Date('2023-07-01T09:15:00.107Z'),
      boardingTime: new Date('2023-07-01T08:30:00.107Z'),
      flightTime: new Date('2023-07-01T09:30:00.107Z'),
      arrivalTime: new Date('2023-07-01T11:50:00.107Z'),
      aircraftCode: 'RS995',
    },
  });

  const flight_GRU_IOS_id2 = randomUUID();
  await prisma.flight.create({
    data: {
      id: flight_GRU_IOS_id2,
      routeId: route_GRU_IOS_id,
      terminal: '2',
      gate: '3',
      flightPrice: '1700.00',
      finishBookingTime: new Date('2023-07-01T13:15:00.107Z'),
      boardingEndingTime: new Date('2023-07-01T13:15:00.107Z'),
      boardingTime: new Date('2023-07-01T12:30:00.107Z'),
      flightTime: new Date('2023-07-01T13:30:00.107Z'),
      arrivalTime: new Date('2023-07-01T15:50:00.107Z'),
      aircraftCode: 'LD195',
    },
  });

  // SEAT TYPES
  const seatTypeDefaultId = randomUUID();

  await prisma.seatType.create({
    data: {
      id: seatTypeDefaultId,
      name: 'Default',
      price: '30.00',
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
  const side = {
    A: 'window',
    B: 'middle',
    C: 'corridor',
    D: 'corridor',
    E: 'middle',
    F: 'window',
  };
  const confortSeats = ['1A', '1B', '1C', '1D', '1E', '1F'];
  numbers.map(async (n) => {
    letters.map(async (l) => {
      await prisma.seat.create({
        data: {
          id: randomUUID(),
          code: `${n}${l}`,
          side: side[l],
          seatTypeId: confortSeats.includes(`${n}${l}`)
            ? seatTypeConfortId
            : seatTypeDefaultId,
          flightId: flight_IOS_GRU_id,
        },
      });

      await prisma.seat.create({
        data: {
          id: randomUUID(),
          code: `${n}${l}`,
          side: side[l],
          seatTypeId: confortSeats.includes(`${n}${l}`)
            ? seatTypeConfortId
            : seatTypeDefaultId,
          flightId: flight_GRU_IOS_id2,
        },
      });

      await prisma.seat.create({
        data: {
          id: randomUUID(),
          code: `${n}${l}`,
          side: side[l],
          seatTypeId: confortSeats.includes(`${n}${l}`)
            ? seatTypeConfortId
            : seatTypeDefaultId,
          flightId: flight_GRU_IOS_id,
        },
      });

      await prisma.seat.create({
        data: {
          id: randomUUID(),
          code: `${n}${l}`,
          side: side[l],
          seatTypeId: confortSeats.includes(`${n}${l}`)
            ? seatTypeConfortId
            : seatTypeDefaultId,
          flightId: flight_GRU_IOS_id2,
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
