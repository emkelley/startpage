<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: radial-gradient(#162431, hsl(209, 38%, 10%));
  min-height: 100vh;
}
// Import Bulma's core
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #ff682c;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$secondary: hsl(209, 38%, 10%);
$secondary-light: findLightColor($secondary);
$secondary-dark: findDarkColor($secondary);
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$input-color: ghostwhite;
$input-background-color: hsl(209, 38%, 10%);
$input-border-color: hsl(208, 34%, 14%);
$input-placeholder-color: rgba(248, 248, 255, 0.25);
// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
  (
    "white": (
      $white,
      $black,
    ),
    "black": (
      $black,
      $white,
    ),
    "light": (
      $light,
      $light-invert,
    ),
    "dark": (
      $dark,
      $dark-invert,
    ),
    "primary": (
      $primary,
      $primary-invert,
      $primary-light,
      $primary-dark,
    ),
    "secondary": (
      $secondary,
      $secondary-invert,
      $secondary-light,
      $secondary-dark,
    ),
    "link": (
      $link,
      $link-invert,
      $link-light,
      $link-dark,
    ),
    "info": (
      $info,
      $info-invert,
      $info-light,
      $info-dark,
    ),
    "success": (
      $success,
      $success-invert,
      $success-light,
      $success-dark,
    ),
    "warning": (
      $warning,
      $warning-invert,
      $warning-light,
      $warning-dark,
    ),
    "danger": (
      $danger,
      $danger-invert,
      $danger-light,
      $danger-dark,
    ),
  ),
  $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
