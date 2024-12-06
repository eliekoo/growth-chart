<template>
    <fwb-navbar solid>
      <template #logo>
        <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
            Growth Tracker
        </fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link is-active link="/">
            Home
          </fwb-navbar-link>
          <fwb-navbar-link link="/fetal">
            Fetal
          </fwb-navbar-link>
          <fwb-navbar-link link="/infant">
            Infant (0-2 Years)
          </fwb-navbar-link>
          <fwb-navbar-link link="/kid">
            Kid
          </fwb-navbar-link>
          <fwb-navbar-link link="/blog">
            Blog
          </fwb-navbar-link>
          <fwb-navbar-link link="/contact">
            Contact
          </fwb-navbar-link>
          <template #right-side>
              <fwb-button>
                Get started
            </fwb-button>
        </template>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>
  
  <script setup>
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
  } from 'flowbite-vue'
  </script>
  