import {
  Card,
  Image,
  Title,
  Description,
  Button
} from './styles'

const DishCard = ({ dish, onBuy }) => (
  <Card>
    <Image src={dish.foto} alt={dish.nome} />
    <Title>{dish.nome}</Title>
    <Description>{dish.descricao}</Description>

    <Button type="button" onClick={() => onBuy(dish)}>
      Comprar produto
    </Button>
  </Card>
)

export default DishCard
