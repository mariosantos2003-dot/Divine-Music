import {db, FALSE,LiveD} from 'astro:db';



export default async function(){
    await db.insert(LiveD).values([
        {id: 1, city:'Barcelona', fecha:'22-05-2024', ticketsavailable:'200', isSouldOut:FALSE},
        {id: 2, city:'Madrid', fecha:'23-05-2024', ticketsavailable:'300', isSouldOut:FALSE},
        {id: 1, city:'Aldeanueva', fecha:'29-08-2024', ticketsavailable:'2000', isSouldOut:FALSE}
    ])
}