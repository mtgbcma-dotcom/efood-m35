import {
  Card,
  ImageArea,
  RestaurantImage,
  Tags,
  Tag,
  Content,
  TitleRow,
  Title,
  Rating,
  Star,
  Description,
  DetailsButton
} from './styles'

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <ImageArea>
      <RestaurantImage src={restaurant.capa} alt={restaurant.titulo} />

      <Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </Tags>
    </ImageArea>

    <Content>
      <TitleRow>
        <Title>{restaurant.titulo}</Title>

        <Rating>
          {restaurant.avaliacao.toFixed(1)}
          <Star aria-hidden="true">★</Star>
        </Rating>
      </TitleRow>

      <Description>{restaurant.descricao}</Description>

      <DetailsButton to={`/restaurante/${restaurant.id}`}>
        Saiba mais
      </DetailsButton>
    </Content>
  </Card>
)

export default RestaurantCard
