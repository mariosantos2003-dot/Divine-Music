import {db, FALSE,LiveD} from 'astro:db';



export default async function(){
    await db.insert(LiveD).values([
        {id: 1, city:'Barcelona', ticketsavailable:'200', isSouldOut:FALSE},
        {id: 2, city:'Madrid', ticketsavailable:'300', isSouldOut:FALSE},
        {id: 1, city:'Aldeanueva',  ticketsavailable:'2000', isSouldOut:FALSE}
    ])
}