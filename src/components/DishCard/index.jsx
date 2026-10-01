import {
  Card,
  DishImage,
  DishTitle,
  DishDescription,
  BuyButton
} from './styles'

const DishCard = ({ dish, onBuy }) => (
  <Card>
    <DishImage src={dish.foto} alt={dish.nome} />
    <DishTitle>{dish.nome}</DishTitle>
    <DishDescription>{dish.descricao}</DishDescription>

    <BuyButton type="button" onClick={() => onBuy(dish)}>
      Comprar produto
    </BuyButton>
  </Card>
)

export default DishCard
