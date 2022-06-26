import CategoryItem from "./components/category-item/category-tem.component";
import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "../assets/imgs/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "../assets/imgs/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "../assets/imgs/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "../assets/imgs/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "../assets/imgs/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
