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
              <li class="nav-item dropdown-megamenu">
                <a
                  class="nav-link dropdown-toggle"
                  href="html/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div class="dropdown-menu left-auto" style="max-width: 450px">
                  <div class="container-fluid">
                    <div class="row no-gutters">
                      <div class="col-md-6 p-lg-4">
                        <h6 class="text-dark mb-2">Creative</h6>
                        <ul class="list-unstyled font-size-14">
                          <li>
                            <a href="html/index-creative-agency.html">Agency</a>
                          </li>
                          <li>
                            <a href="html/index-creative-portfolio.html"
                              >Portfolio</a
                            >
                          </li>
                          <li>
                            <a href="html/index-sass.html">SASS App</a>
                          </li>
                          <li>
                            <a href="html/index-software.html">Software</a>
                          </li>
                          <li>
                            <a href="html/index-seo.html">SEO</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 p-lg-4">
                        <h6 class="text-dark mb-2">Landing</h6>
                        <ul class="list-unstyled font-size-14">
                          <li>
                            <a href="html/index-app.html">Mobile App</a>
                          </li>
                          <li>
                            <a href="html/index-event.html">Event</a>
                          </li>
                          <li>
                            <a href="html/index-product.html">Product Launch</a>
                          </li>
                          <li>
                            <a href="html/index-startup.html">Startup</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="html/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <ul class="list-unstyled">
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/about.html"
                        >About</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/how-it-work.html"
                        >How it work</a
                      >
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="dropdown-menu-link dropdown-toggle"
                        href="html/#"
                      >
                        Portfolio
                      </a>
                      <div class="dropdown-menu">
                        <ul class="list-unstyled">
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/portfolios.html"
                              >Portfolios</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/portfolio-details.html"
                              >Portfolio details</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="dropdown-menu-link dropdown-toggle"
                        href="html/#"
                      >
                        Jobs
                      </a>
                      <div class="dropdown-menu">
                        <ul class="list-unstyled">
                          <li class="nav-item">
                            <a class="dropdown-menu-link" href="html/jobs.html"
                              >Open Jobs</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/jobs-details.html"
                              >Jobs details</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="dropdown-menu-link dropdown-toggle"
                        href="html/#"
                      >
                        Blog
                      </a>
                      <div class="dropdown-menu">
                        <ul class="list-unstyled">
                          <li class="nav-item">
                            <a class="dropdown-menu-link" href="html/blog.html"
                              >Blogs</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/blog-details.html"
                              >Blog details</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="dropdown-menu-link dropdown-toggle"
                        href="html/#"
                      >
                        User
                      </a>
                      <div class="dropdown-menu">
                        <ul class="list-unstyled">
                          <li class="nav-item">
                            <a class="dropdown-menu-link" href="html/login.html"
                              >Login</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/signup.html"
                              >Sign up</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/profile.html"
                              >User profile</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="dropdown-menu-link"
                              href="html/recover.html"
                              >Reset password</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        class="dropdown-menu-link"
                        href="html/terms-and-privacy-policy.html"
                        >Privacy Policy</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/faq.html"
                        >FAQs</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/404.html">404</a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/contact.html"
                        >Contact</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-menu-link" href="html/coming-soon.html"
                        >Coming Soon</a
                      >
                    </li>
                  </ul>
                </div>
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
                  >Buy Now</a
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
