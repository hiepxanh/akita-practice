import { guid, ID } from "@datorama/akita";

export type Person = {
    id: ID;
    name: string;
    attending: boolean;
    guests: number;
}

export type ViewPeople = {
    invited: number;
    invitees: Person[];
    RSVPed: number;
    totalWithGuests: number;
}

export function createPerson(name: string): Person {
    return {
        id: guid(),
        name,
        guests: 0,
        attending: false
    }
}