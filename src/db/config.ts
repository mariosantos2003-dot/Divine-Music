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
        merchid : column.number({primaryKey: true}),
        nameM : column.text(),
        price : column.number(),
        isAvailable : column.boolean()
    }
})

export default defineDb({
    tables : {LiveD},
})

export { LiveD };
