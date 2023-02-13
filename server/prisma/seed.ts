import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();
async function main() {
  await prisma.airport.deleteMany();
  await prisma.aircraft.deleteMany();

  // AIRPORT
  await prisma.airport.create({
    data: {
      id: randomUUID(),
      city: 'GRU',
      state: 'São Paulo',
      country: 'Brasil',
    },
  });

  await prisma.airport.create({
    data: {
      id: randomUUID(),
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
