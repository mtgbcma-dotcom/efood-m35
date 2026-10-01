import { Card,DishImage,DishTitle,DishDescription,DishPrice,AddButton } from './styles'
const formatPrice=(price)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(price)
export default function MenuCard({dish}){return <Card><DishImage src={dish.imagem} alt={dish.nome}/><DishTitle>{dish.nome}</DishTitle><DishDescription>{dish.descricao}</DishDescription><DishPrice>{formatPrice(dish.preco)}</DishPrice><AddButton type="button">Adicionar ao carrinho</AddButton></Card>}
