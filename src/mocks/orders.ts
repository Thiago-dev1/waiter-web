import { Order } from "../types/Order";


export const orders: Order[] = [
  {
    id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    request: {
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: 'data:image/jpeg;base64,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',
            price: 40,
          },
          id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXNtJ1alkaTqudw5CJKiQnO2YTfmrVSSOi6HW51zhg0NINTOzRkzVUauf6j5-6blzvoldMmT9YBQ&usqp=CAc',
            price: 7,
          },
          id: '6372e48cbcd195b0d3d0f7f5'
        }
      ],
      quantity: [3, 2]
    }
  },
  {
    id: 'b372e48cbcd195b0d3d0f7f0',
    table: '010',
    status: 'DONE',
    request: {
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 30,
          },
          id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 20,
          },
          id: '6372e48cbcd195b0d3d0f7f5'
        }
      ],
      quantity: [8, 4]
    }
  }
];