<template>
  <div class="container">
    <div class="left-side">
      <h1>About Me</h1>
      <p>
        Computers have been a passion for me since the days I was pecking away
        at a Commodore VIC 20. A lifelong learner, I am currently attempting to
        get a Bacheleor's in Computer Science. In the meantime, I'd like to
        showcase what skills I have and possibly find employment.
      </p>
      <p>
        Fairly new to JavaScript and TypeScript, and although I'm familiar with
        React, I'm more experienced with Vue. I have also picked up Python on
        the way. I have strong writing skills, including technical writing, and
        am comfortable with GNU/Linux (Gentoo and Ubuntu) and MacOS, with enough
        knowledge of cloud computing to figure anything out.
      </p>
      <p>
        Personality-wise, I like to think of myself as an "information sponge."
        I like to learn new things, and I always seem to find something
        fascinating wherever I go. I enjoy tabletop games, knitting, and curling
        up with my cat Bo while listening to podcasts.
      </p>
    </div>
    <div class="center">
      <img
        src="/img/ornament.svg"
        class="divider"
        alt="A Victorian Scroll Divider"
      />
    </div>
    <div class="right-side">
      <h1>About This Site</h1>
      <p>
        The site is a Nuxt application. All elements except for images (cards,
        buttons, CSS, etc.) were designed by me using Storybook as a way to
        assist in their creation. I decided against using a framework such as
        Ionic or Quasar, since I wanted to showcase my original work.
      </p>
      <p>
        The backend is Firebase, with a small side project of a Flask server
        that I wrote to show off backend API programming using Cloud Run.
      </p>
      <p>
        Images have been taken from
        <NuxtLink to="https://www.freepik.com/">Freepik</NuxtLink> and
        <NuxtLink to="http://www.pexels.com/">Pexels</NuxtLink>. Attempts have
        been made to attribute correctly. You can find attributions at the
        bottom of the page. For icons, Font Awesome was used.
      </p>
      <p>
        The header font is "Alata", while the body text is "Source Code Pro".
        The design is minimal with as little color as possible. The idea was to
        not distract from the screenshots in the gallery. I had to set "Source
        Code Pro" to 900 (or "Black") in order to have it stand out.
      </p>
      <p>
        For color scheme, I decided to stick with black and white for as much of
        the site as possible, with a nice blue color for links and hovers.
      </p>
      <p>
        The components have been designed with the "Atomic Design" principle
        which can be found
        <a href="https://bradfrost.com/blog/post/atomic-web-design/">here</a>.
        The smallest components are "atoms", which are then grouped into
        "molecules", until finally you have "organisms" which are multiple
        molecules grouped together. I have found that the difference between
        molecules and organisims can be difficult at times, however my rule of
        thumb has been that if it's a complete component that can stand on its
        own, it's an organism. Furthermore, each portfolio project has had the
        components subdivided by project, so if there's a specific project that
        you want to know more about, run the following command:
        <p><code>npm run storybook</code></p>
      </p>
      <p>This will run Storybook, which will give you a nice interface for browsing the components.</p>
    </div>
    <div class="bottom">
      <p>
        <sup
          >Image by
          <NuxtLink
            to="https://www.freepik.com/free-vector/ornaments-collection-vintage-style_2484981.htm"
            >Freepik</NuxtLink
          ></sup
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 100px repeat(10, 1fr) 100px;
  grid-template-rows:  repeat(5, 400px);
  align-items: center;
}

.left-side {
  align-self: start;
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 1;
}

.center {
  grid-column-start: 5;
  grid-row-start: 3;
  filter: grayscale();
}

.right-side {
  align-self: start;
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 3;
}

.bottom {
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 4;
}
</style>
