<template>
  <header id="header" class="fixed-top">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            src="@/assets/logo.png"
            width="70"
            height="70"
            alt="АНО АСП ПО РБ"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#work">Деятельность</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#management">Руководство</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#contact">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  a {
    color: #e56b6f;
    font-size: 20px;
    &:hover {
      color: #ec242a;
    }
  }
}
</style>
