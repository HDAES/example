export const type ={
    NAME:'NAME'
}

export function setName(name){
    return {
        type:type.NAME,
        name
    }
}