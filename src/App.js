import Directory from "./components/directory/directory.component";

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

  return <Directory categories={categories} />;
};

export default App;
