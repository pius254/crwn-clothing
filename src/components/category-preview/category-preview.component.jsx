import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewComponent,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewComponent>
      <h2>
        <Title to={title}> {title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewComponent>
  );
};

export default CategoryPreview;
