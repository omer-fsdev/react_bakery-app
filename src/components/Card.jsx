import data from "../data";
import CardStyle from "./styles/CardStyle";
import ImageStyle from "./styles/ImageStyle";

const Card = () => {
  return (
    <div>
      {data.map((i) => (
        <CardStyle key={i.id} reverse={i.id % 2 === 1 && "row-reverse"}>
          <div>
            <h2>{i.title}</h2>
            <p>{i.body}</p>
          </div>
          <ImageStyle src={`./images/${i.image}`} alt="brochure"></ImageStyle>
        </CardStyle>
      ))}
    </div>
  );
};

export default Card;
