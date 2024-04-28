import { db, FALSE, LiveD } from 'astro:db';

export default async function(){
    await db.insert(LiveD).values([
        {id: 1, city:'Barcelona', fecha: new Date('2024-05-25T21:00:00'), ticketsavailable: 200, isSouldOut: FALSE},
        {id: 2, city:'Madrid', fecha: new Date('2024-05-27T21:00:00'), ticketsavailable: 300, isSouldOut: FALSE},
        {id: 3, city:'Aldeanueva', fecha: new Date('2024-08-15T21:00:00'), ticketsavailable: 2000, isSouldOut: FALSE}
    ])
}
