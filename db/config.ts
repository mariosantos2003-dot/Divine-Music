import { defineDb , defineTable, column} from 'astro:db';


 const LiveD = defineTable({
    columns:{
        liveid :column.number({primaryKey: true}),
        city : column.text(),
        fecha : column.date(),
        ticketsavailable : column.number(),
        isSouldOut : column.boolean()

    }
})

const MerchAv = defineTable({
    columns:{
        id : column.number({primaryKey: true}),
        nameM : column.text(),
        price : column.number(),
        isAvailable : column.boolean()
    }
})



const Cart = defineTable({
    columns:{
        id: column.number({primaryKey: true}),
        merchid: column.number({references: () => MerchAv.columns.id}),
        quantity: column.number(),
        userId: column.number(), // Si quieres rastrear el carrito del usuario, necesitarás una columna para identificar al usuario
        status: column.text() // Podrías usar esto para el estado del carrito, por ejemplo: 'active', 'completed', 'abandoned', etc.
    }
});

export default defineDb({
    tables : {LiveD,Cart,MerchAv},
})


