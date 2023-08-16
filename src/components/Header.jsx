import ButtonStyle from "./styles/ButtonStyle";
import DisplayStyle from "./styles/DisplayStyle";
import ImageStyle, { LogoStyle } from "./styles/ImageStyle";

const Header = () => {
  return (
    <div>
      <DisplayStyle>
        <LogoStyle src="./images/logo.png" alt="logo"></LogoStyle>

        <div>
          <ButtonStyle colorSecond="#091973">Order</ButtonStyle>
          <ButtonStyle bgSecond="#0A6AA6">Contact</ButtonStyle>
        </div>
      </DisplayStyle>
      <DisplayStyle>
        <div>
          <h1>Welcome to the sweet world of Sweet Treat!</h1>
          <p>
            Indulge in a world of sweetness at Sweet Treat Bakery. Our passion
            for creating delectable baked goods is matched only by our
            dedication to quality and taste. With every bite, we aim to delight
            your senses and bring smiles to your faces.
          </p>
          <ButtonStyle bgSecond="#0A6AA6">Explore Our Delights</ButtonStyle>
        </div>
        <ImageStyle src="./images/drink.jpg"></ImageStyle>
      </DisplayStyle>
    </div>
  );
};

export default Header;
