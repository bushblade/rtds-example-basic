import "./App.css";
import Slider from "react-touch-drag-slider";

function App() {
  const images = [
    {
      url: "https://res.cloudinary.com/bushblade/image/upload/ar_16:9,c_fill,w_800/v1/bushbladedotdev/random-number-generation-in-js.avif",
      title: "imageOne",
    },
    {
      url: "https://res.cloudinary.com/bushblade/image/upload/ar_16:9,c_fill,w_800/v1/bushbladedotdev/javascript-closures.avif",
      title: "imageTwo",
    },
    {
      url: "https://res.cloudinary.com/bushblade/image/upload/ar_16:9,c_fill,w_800/v1/bushbladedotdev/my-first-browser-extension.avif",
      title: "imageThree",
    },
    {
      url: "https://res.cloudinary.com/bushblade/image/upload/ar_16:9,c_fill,w_800/v1/bushbladedotdev/add-eslint-to-vite.avif",
      title: "imageFour",
    },
    {
      url: "https://res.cloudinary.com/bushblade/image/upload/ar_16:9,c_fill,w_800/v1/bushbladedotdev/bad-response-with-fetch.avif",
      title: "imageFive",
    },
  ];
  return (
    <main>
      <Slider>
        {images.map(({ url, title }, index) => (
          <img key={index} src={url} alt={title} />
        ))}
      </Slider>
    </main>
  );
}

export default App;
