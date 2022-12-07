export interface Order {
    id: string,
    table: string,
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE',
    request: {
            id: string,
            product: {
                name: string,
                imagePath: string,
                price: number
        },
        quantity: number
    }[]
}