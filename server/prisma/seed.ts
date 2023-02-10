import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();
async function main() {
  await prisma.airport.create({
    data: {
      id: randomUUID(),
      city: 'São Paulo',
      state: 'São Paulo',
      country: 'Brasil',
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
