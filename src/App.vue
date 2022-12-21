<template>
  <MyHeader></MyHeader>
  <MySection class="section__main main">
    <div class="container-fluid h-100 d-flex justify-content-center">
      <div class="row align-items-center">
        <div class="col-lg-6 main__text text-center">
          <h2 class="title">
            Автономная некоммерческая организация <br />
            «Академия спортивного права по Республике Башкортостан»
          </h2>
          <a class="btn btn__down mt-3" href="#work"
            >Просмотреть
            <unicon
              name="arrow-down"
              width="25"
              height="25"
              fill="white"
            ></unicon
          ></a>
        </div>
        <div class="col-lg-6">
          <img
            src="@/assets/bg-header.png"
            class="main__img"
            alt="АНО АСП ПО РБ"
          />
        </div>
      </div>
    </div>
  </MySection>
  <MySection id="work" class="section__work work"> </MySection>
  <MySection id="management" class="section__management management">
  </MySection>
  <MySection id="contact" class="section__contact contact"> </MySection>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MySection from "@/components/MySection.vue";
export default {
  components: {
    MyHeader,
    MySection,
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  .title {
    font-size: 35px;
    color: #e56b6f;
  }
  .btn__down {
    color: #fff;
    background-color: #e56b6f;
    &:hover,
    &:active {
      color: #fff !important;
      background-color: #b56576 !important;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    object-fit: contain;
  }
}
</style>
