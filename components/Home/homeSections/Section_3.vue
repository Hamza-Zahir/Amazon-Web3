<template>
  <div class="Section_3">
    <SemplCard :card="card_1" />
    <CardGroup :card="card_2" />
    <CardGroup :card="card_3" />
    <div class="d-flex d-md-none d-lg-flex">
      <SemplCard :card="card_4" />
    </div>
  </div>
</template>
<script>
import Products from "~/json/Products.json";
import CardGroup from "../../cards/CardGroup.vue";
import SemplCard from "../../cards/SemplCard.vue";
const card_1 = {
  title: "Shop activity trackers and smartwatches",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
  link: "See more",
  page: "Show_prodacts/smart_watches",
};
const card_2 = {
  title: "Gaming merchandise",
  item1_img: Products.gaming.apparel[0].img,
  item1_title: "Apparel",
  productType1: "gaming+apparel",
  item2_img: Products.gaming.hats[7].img,
  item2_title: "Hats",
  productType2: "gaming+hats",
  item3_img: Products.gaming.mugs[8].img,
  productType3: "gaming+mugs",
  item3_title: "Mugs",
  item4_img: Products.gaming.action_figures[8].img,
  item4_title: "Action Figures",
  productType4: "gaming+action_figures",
  link: "See more",
  page: "Gaming_accessories",
};
const card_3 = {
  title: "Home & kitchen essentials",
  item1_img: Products.kitchen[2].img,
  item2_img: Products.kitchen[0].img,
  item3_img: Products.kitchen[24].img,
  item4_img: Products.kitchen[15].img,
  productType1: "kitchen",
  productType2: "kitchen",
  productType3: "kitchen",
  productType4: "kitchen",
  item1_title: "Cast Iron Skillet",
  item2_title: "Pyrex Glass",
  item3_title: "Peeler Set",
  item4_title: "Nonstick Pans Set",
  link: "Shop now",
  center_text: "text-center",
  page: "Show_prodacts/kitchen",
};



const card_4 = {
  title: "For your Fitness Needs",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
  link: "Shop now",
  page: "Show_prodacts/fitness",
};


export default {
  components: {
    CardGroup,
    SemplCard,
  },
  data() {
    return {
      Products,
      card_1,
      card_2,
      card_3,
      card_4,
    };
  },
};
</script>
<style lang="scss" scoped>

.Section_3 {
  z-index: 99;
  position: static;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  padding: 15px 0 0 0;

  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    padding: 15px 15px 0 15px;

    gap: 15px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 20px 0 20px;
    gap: 20px;
  }

  .center_text {
    text-align: center;
  }

  .CardGroup {
    img {
      max-height: 100px;
    }
  }
}
</style>
