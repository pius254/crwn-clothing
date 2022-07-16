import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "../assets/imgs/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "../assets/imgs/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "../assets/imgs/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "../assets/imgs/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "../assets/imgs/men.png",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
