import { Route } from '@app/entities/route';
import { Prisma, Route as RawRoute } from '@prisma/client';
import { RouteRepository } from '@app/repositories/route-repository';
import { Injectable } from '@nestjs/common';
import { PrismaRouteMapper } from '../mappers/prisma-route-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRouteRepository implements RouteRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(routeId: string): Promise<Route | null> {
    const raw = await this.prismaService.route.findUnique({
      where: { id: routeId },
    });

    return raw ? PrismaRouteMapper.fromPrisma(raw) : null;
  }

  async findByAirports(query: {
    airportFromId: string;
    airportToId: string;
  }): Promise<Route | null> {
    const raw = await this.prismaService.route.findFirst({
      include: {
        flights: {
          include: {
            // Instead of taking 1, it could be a query that selects
            // by the lowest set type price
            seats: { take: 1, include: { seatType: true } },
          },
        },
      },
      where: query,
    });

    return raw ? PrismaRouteMapper.fromPrisma(raw) : null;
  }

  async save(route: Route): Promise<void> {
    const raw = PrismaRouteMapper.toPrisma(route);

    await this.prismaService.route.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findAll(): Promise<Route[]> {
    const routes = await this.prismaService.route.findMany({
      include: { flights: true },
    });
    return routes.map(PrismaRouteMapper.fromPrisma);
  }
}
