import { auth } from "@/auth";
import { prismaDb } from "../db";

export async function getAllEvents() {
  try {
    const currUser = await auth();
    if (!currUser) {
      return [];
    }
    const events = prismaDb.event.findMany({
      where: {
        creatorId: currUser.user?.id,
      },
      include: {
        tickets: true,
        attendees: true,
        location: true,
      },
    });

    return events;
  } catch (e) {
    console.log("[QUERY_GETALLEVENTS]: ", e);
    return [];
  }
}

export async function getEvent({ id }: { id: string }) {
  try {
    const currUser = await auth();
    if (!currUser) {
      return null;
    }
    const event = await prismaDb.event.findUnique({
      where: {
        id,
      },
      include: {
        tickets: true,
        attendees: true,
        location: true,
        orders: true,
      },
    });

    return event;
  } catch (e) {
    console.log("[QUERY_GET_EVENT]: ", e);
    return null;
  }
}

export async function getAllVenues() {
  try {
    const currUser = await auth();
    if (!currUser) {
      return null;
    }
    const locations = await prismaDb.location.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        longitude: true,
        latitude: true,
        // TODO add events too so that no other event can be booked on same date
      },
    });

    return locations;
  } catch (e) {
    console.log("[QUERY_GE_ALL_LOCATIONS]: ", e);
    return [];
  }
}
