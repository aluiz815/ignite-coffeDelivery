import { createContext, ReactNode, useEffect, useState } from 'react'


import americanoImg from '../assets/americano.svg'
import expressoImg from '../assets/Expresso.svg'
import arabeImg from '../assets/arabe.svg'
import capucinoImg from '../assets/Capuccino.svg'
import coffeWithMilkImg from '../assets/coffeWithMilk.svg'
import cubanoImg from '../assets/Cubano.svg'
import expressoCremosoImg from '../assets/ExpressoCremoso.svg'
import havaianoImg from '../assets/Havaiano.svg'
import mochaccinoCoffeeImg from '../assets/Mochaccino.svg'
import hotChocolateImg from '../assets/hotChocolate.svg'
import iceCoffeeImg from '../assets/IceCoffe.svg'
import latteImg from '../assets/Latte.svg'
import irlandImg from '../assets/Irland.svg'
import macchiatoImg from '../assets/Macchiato.svg'
export interface ProductProps {
  name: string
  qty: number
  description: string
  type: string
  price: string
  imageUrl:string
  id:string
}
interface OrderProps {
  cep: string
  street: string
  number: string
  complement:string
  bairro: string
  city: string
  uf: string,
  creditType:string
}

interface CartContextProps {
  products: ProductProps[],
  cart: ProductProps[],
  total:number,
  order:OrderProps,
  increaseQuantityProductToCart: (data:string) => void
  decreaseQuantityProductFromCart: (data:string) => void
  addProductToCart: (data:ProductProps) => void
  removeProductFromCart: (data:string) => void
  createOrder: (data:OrderProps) => void
}

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


let productsDb: ProductProps[] = [{
    name: 'Expresso Tradicional',
    qty: 1,
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${expressoImg}`,
    id: generateUUID()
},
{
    name: 'Expresso Americano',
    qty: 1,
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${americanoImg}`,
    id: generateUUID()
},
{
    name: 'Árabe',
    qty: 1,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${arabeImg}`,
    id: generateUUID()
},
{
    name: 'Capuccino',
    qty: 1,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${capucinoImg}`,
    id: generateUUID()
},
{
    name: 'Café com Leite',
    qty: 1,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${coffeWithMilkImg}`,
    id: generateUUID()
},
{
    name: 'Cubano',
    qty: 1,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${cubanoImg}`,
    id: generateUUID()
},
{
    name: 'Expresso Cremoso',
    qty: 1,
    description: 'Café expresso tradicional com espuma cremosa',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${expressoCremosoImg}`,
    id: generateUUID()
},
{
    name: 'Havaiano',
    qty: 1,
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${havaianoImg}`,
    id: generateUUID()
},
{
    name: 'Mocaccino',
    qty: 1,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${mochaccinoCoffeeImg}`,
    id: generateUUID()
},
{
    name: 'Chocolate Quente',
    qty: 1,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${hotChocolateImg}`,
    id: generateUUID()
},
{
    name: 'Latte',
    qty: 1,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${latteImg}`,
    id: generateUUID()
},
{
    name: 'Irlandês',
    qty: 1,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${irlandImg}`,
    id: generateUUID()
},
{
    name: 'Expresso Gelado',
    qty: 1,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${iceCoffeeImg}`,
    id: generateUUID()
},
{
    name: 'Macchiato',
    qty: 1,
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    type: 'Tradicional',
    price: '19.90',
    imageUrl:`${macchiatoImg}`,
    id: generateUUID()
},
]

export const CartContext = createContext({} as CartContextProps)

interface CardContextProviderProps {
  children: ReactNode
}



export function CardContextProvider({ children }: CardContextProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [cart, setCart] = useState<ProductProps[]>([])
  const [order, setOrder] = useState<OrderProps>()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let productsToBeAdd: ProductProps[] = []
    productsDb.map((product) => productsToBeAdd.push(product))
    setProducts(productsToBeAdd)
  }, [])

  function increaseQuantityProductToCart(data:string) {
    let pathName = window.location.pathname
    const newCart = [...cart]
    if(pathName === '/checkout') {
      let product = cart.find(product => product.id === data)
      let productPrice = products.find(product => product.id === data)
      
      product.qty += 1
      product.price = parseFloat(productPrice.price) * product.qty
      setCart(newCart)
      if(cart.length >0) {
        let total = 0
        newCart.map(product => {
          total += parseFloat(product.price)
        })
        setTotal(total)
      }
    }else {
      const newProducts = [...products]
      let product = newProducts.find(product => product.id === data)
      product.qty += 1
      setProducts(newProducts)
    }
  }

  function decreaseQuantityProductFromCart(data:string) {
    let pathName = window.location.pathname
    const newCart = [...cart]
    if(pathName === '/checkout') {
      let product = newCart.find(product => product.id === data)
      let productPrice = products.find(product => product.id === data)
      if(product.qty > 0) {
        product.qty -= 1
        product.price = parseFloat(product.price) - productPrice.price
      }else {
        product.qty = product.qty
      }
      setCart(newCart)
      if(cart.length >0) {
        let oldTotal = 0
        let newTotal = 0
        newCart.map(product => {
          oldTotal += parseFloat(product.price)
          newTotal = parseFloat(oldTotal) - parseFloat(product.price)
        })
        setTotal(oldTotal)
      }
    }else {
      const newProducts = [...products]
      let product = newProducts.find(product => product.id === data)
      if(product.qty > 0) {
        product.qty -= 1
        product.price = product.price
      }else {
        product.qty = product.qty
      }
      setProducts(newProducts)
    }
  }

  function addProductToCart(data:ProductProps) {
    if(cart.length >0) {
      let myCart = [...cart]
      let total = 0
      myCart.map(product => {
        total += parseFloat(product.price)
      })
      setTotal(total)
    }else {
      setTotal(data.price * data.qty)
    }
    setCart(state => [...state,data])
  }

  function removeProductFromCart(data:string) {

    const cartWithoutDeletedOne = cart.filter(product => {
      return product.id != data;
  })
    setCart(cartWithoutDeletedOne)
  }

  function createOrder(data:OrderProps) {
    setOrder(data)
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        total,
        order,
        increaseQuantityProductToCart,
        decreaseQuantityProductFromCart,
        addProductToCart,
        removeProductFromCart,
        createOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
