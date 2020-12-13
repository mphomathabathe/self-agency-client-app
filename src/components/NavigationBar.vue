<template>
  <div class="navigation navbar navbar-light justify-content-center py-xl-7">
    <a href="/" class="d-none d-xl-block mb-6">
      <img
        src="assets/images/Logo.png"
        class="mx-auto fill-primary"
        data-inject-svg=""
        alt=""
        style="height: 46px;"
      />
    </a>
    <ul
      class="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0"
      role="tablist"
    >
      <li class="nav-item d-none d-xl-block invisible flex-xl-grow-1">
        <a class="nav-link position-relative p-0 py-xl-3" href="#" title="">
          <i class="icon-lg fe-x"></i>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link position-relative p-0 py-xl-3"
          data-toggle="tab"
          href="#tab-content-home"
          title="Home"
          role="tab"
        >
          <i class="icon-lg fe-home"></i>
        </a>
      </li>

      <li class="nav-item mt-xl-9">
        <a
          class="nav-link position-relative p-0 py-xl-3"
          data-toggle="tab"
          href="#tab-content-rewards"
          title="Rewards"
          role="tab"
        >
          <i class="icon-lg fe-gift"></i>
        </a>
      </li>

      <li class="nav-item mt-xl-9">
        <a
          class="nav-link position-relative p-0 py-xl-3"
          data-toggle="tab"
          href="#tab-content-friends"
          title="Friends"
          role="tab"
        >
          <i class="icon-lg fe-users"></i>
        </a>
      </li>

      <!-- Profile -->
      <li class="nav-item mt-xl-9">
        <a
          class="nav-link position-relative p-0 py-xl-3"
          data-toggle="tab"
          href="#tab-content-user"
          title="User"
          role="tab"
        >
          <i class="icon-lg fe-user"></i>
        </a>
      </li>
      <li class="nav-item mt-xl-9">
        <a
          class="nav-link position-relative p-0 py-xl-3"
          data-toggle="tab"
          href="#tab-content-analytics"
          title="Analytics"
          role="tab"
        >
          <i class="icon-lg fe-pie-chart"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
