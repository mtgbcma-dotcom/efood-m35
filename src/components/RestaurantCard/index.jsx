import {
  Card,
  ImageArea,
  Image,
  Tags,
  Tag,
  Content,
  TitleRow,
  Title,
  Rating,
  Description,
  Button
} from './styles'

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <ImageArea>
      <Image src={restaurant.capa} alt={restaurant.titulo} />

      <Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </Tags>
    </ImageArea>

    <Content>
      <TitleRow>
        <Title>{restaurant.titulo}</Title>
        <Rating>{restaurant.avaliacao.toFixed(1)} ★</Rating>
      </TitleRow>

      <Description>{restaurant.descricao}</Description>

      <Button to={`/restaurante/${restaurant.id}`}>
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default RestaurantCard
