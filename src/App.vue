<template>
  <div id="app">
    <header
      class="site-header sh-onScroll-shrink sh-onScroll-bg-white sh-onScroll-text-dark sh-onScroll-navbar-toggler-dark fixed-top"
    >
      <nav class="site-nav container">
        <div class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html">
            <img
              class="site-logo-default"
              src="assets/img/logo/logo-white.png"
              alt="Site Logo"
            />
            <img
              class="site-logo-inverse"
              src="assets/img/logo/logo-pink.png"
              alt="Site Logo"
            />
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#IDtoggleNavigation"
            aria-controls="IDtoggleNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="hamburger hamburger--spin js-hamburger">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </button>
          <div class="navbar-collapse collapse" id="IDtoggleNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/chart-index"
                  id="navbarDropdownMenuLink"
                  role="button"
                >
                  My Chart
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/anxiety-themes"
                  id="navbarDropdownMenuLink"
                  role="button"
                >
                  Anxiety Themes
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="docs/alerts.html">Components</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="docs/index.html">Documentation</a>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-primary-gradient btn-sm"
                  href="https://wrapbootstrap.com/theme/fury-multipurpose-landing-solutions-WB059347H?ref=echotheme"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- <div id="nav"> -->

    <!-- <router-link v-if="isLoggedIn() === true" to="/chart-index"
        >My Chart |</router-link
      >

      <router-link v-if="isLoggedIn() === false" to="/signup"
        >Signup
      </router-link>

      <router-link v-if="isLoggedIn() === false" to="/login"
        >| Login</router-link
      >

      <router-link v-if="isLoggedIn() === true" to="/logout"
        >Logout</router-link
      >
    </div>
    </div> -->
    <router-view />
    <footer>
      <div class="container text-center p-4">
        <p class="mb-0">
          Made with
          <i class="far fa-heart text-primary"></i>
          love for you.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
