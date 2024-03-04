import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought"; // CUSTOM DATA MODEL

// ==============================================================
const ProductDetailsPageView = props => {
  return <Container sx={{
    my: 4
  }}>
      {
      /* PRODUCT DETAILS INFO AREA */
    }
      <ProductIntro product={props.product} />

      {
      /* PRODUCT DESCRIPTION AND REVIEW */
    }
      <ProductTabs />

      {
      /* FREQUENTLY BOUGHT PRODUCTS AREA */
    }
      <FrequentlyBought products={props.frequentlyBought} />

      {
      /* AVAILABLE SHOPS AREA */
    }
      <AvailableShops />

      {
      /* RELATED PRODUCTS AREA */
    }
      <RelatedProducts products={props.relatedProducts} />
    </Container>;
};

export default ProductDetailsPageView;