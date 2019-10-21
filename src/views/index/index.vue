<template>
  <div id="wbIndexWrapper">
    <div class="wb-first-screen">
      <header class="wb-index-header">
        <div><img src="~@/assets/images/icon_title.png" alt="程序员的自我修养"></div>
        <mt-button
          class="wb-index-header-download"
          type="danger"
        >Download Resume</mt-button>
        <div class="wb-index-header-avator">
          <img src="~@/assets/images/icon_avator.png" alt="前端程序猿">
        </div>
      </header>
      <nav class="wb-index-nav">
        <div>
          <router-link :to="{name: 'about'}" class="wb-index-nav-item">About</router-link>
          <router-link :to="{name: 'project'}" class="wb-index-nav-item">Project</router-link>
          <router-link :to="{name: 'advance'}" class="wb-index-nav-item">Advance</router-link>
        </div>
        <div>
          <router-link :to="{name: 'essay'}" class="wb-index-nav-item">Essay</router-link>
          <router-link :to="{name: 'contact'}" class="wb-index-nav-item">Contact</router-link>
        </div>
      </nav>
      <article class="wb-index-intro">
        Hello, I'm Chilly, a frontend developer from Hubei.
      </article>
      <section class="wb-index-divider"></section>
    </div>
    <div class="wb-second-screen">
      <h2 class="wb-skills-title">My Skills & Abilities</h2>
      <p class="wb-skills-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="80" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="80" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="80" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="60" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="20" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="70" :bar-height="10"></mt-progress>
      </div>
      <div class="wb-skills-item">
        <span>Adobe Photoshop - 10+ Years Experience</span>
        <mt-progress :value="100" :bar-height="10"></mt-progress>
      </div>
    </div>
    <div class="wb-third-screen">
      <h2 class="wb-abilities-title">How Can I Help You</h2>
      <p class="wb-abilities-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <section class="wb-abilities-items">
        <div class="wb-abilities-item">
          <img class="wb-abilities-item-img" src="~@/assets/images/icon_ability1.png" alt="技能">
          <span class="wb-abilities-item-desc">Web Designing</span>
          <p class="wb-abilities-item-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div class="wb-abilities-item">
          <img class="wb-abilities-item-img" src="~@/assets/images/icon_ability1.png" alt="技能">
          <span class="wb-abilities-item-desc">Web Designing</span>
          <p class="wb-abilities-item-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div class="wb-abilities-item">
          <img class="wb-abilities-item-img" src="~@/assets/images/icon_ability1.png" alt="技能">
          <span class="wb-abilities-item-desc">Web Designing</span>
          <p class="wb-abilities-item-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div class="wb-abilities-item">
          <img class="wb-abilities-item-img" src="~@/assets/images/icon_ability1.png" alt="技能">
          <span class="wb-abilities-item-desc">Web Designing</span>
          <p class="wb-abilities-item-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </section>
      <div class="wb-abilities-marks">
        <div class="wb-ablities-marks-line"></div>
      </div>
    </div>
    <div class="wb-forth-screen">
      <h2 class="wb-experience-title">How Can I Help You</h2>
      <p class="wb-experience-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <section class="wb-experience-items">
        <div class="wb-experience-item">
          <div class="wb-experience-item-mark"></div>
          <div class="wb-experience-item-content">
            <ul class="wb-experience-item-content-wrapper">
              <li>Developer @ NashareDeveloper @ NashareDeveloper @ NashareDeveloper @ NashareDeveloper @ Nashare</li>
              <li class="wb-experience-item-content-wrapper-addorn">Sep 2017 - Nox 2017</li>
            </ul>
          </div>
        </div>
        <div class="wb-experience-item">
          <div class="wb-experience-item-mark"></div>
          <div class="wb-experience-item-content">
            <ul class="wb-experience-item-content-wrapper">
              <li>Developer @ Nashare</li>
              <li class="wb-experience-item-content-wrapper-addorn">Sep 2017 - Nox 2017</li>
            </ul>
          </div>
        </div>
        <div class="wb-experience-item">
          <div class="wb-experience-item-mark"></div>
          <div class="wb-experience-item-content">
            <ul class="wb-experience-item-content-wrapper">
              <li>Developer @ Nashare</li>
              <li class="wb-experience-item-content-wrapper-addorn">Sep 2017 - Nox 2017</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="wb-fifth-screen">
      <baidu-map
        class="wb-bm-view"
        ak="GcDzaR7tkcB7wg3cELmwwAxQAzqGql7O"
        :center="data.center"
        :zoom="data.zoom"
        :scroll-wheel-zoom="data.scale"
        @ready="handler"
      >
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <bm-map-type
          :offset="0"
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-panorama>
        <bm-traffic :predictDate="data.traffic"></bm-traffic>
      </baidu-map>
      <div class="wb-contact-info" v-show="data.showContactForm">
        <div class="wb-contact-form">
          <h6 class="wb-contact-form-title">Get In Touch With Me</h6>
          <mt-field class="wb-contact-form-field" placeholder="Your Name"></mt-field>
          <mt-field class="wb-contact-form-field" placeholder="Your Email" type="email"></mt-field>
          <mt-field class="wb-contact-form-textarea" placeholder="Your Message" type="textarea" rows="4"></mt-field>
          <mt-button class="wb-contact-form-btn" type="danger" size="normal" @click="handleSubmit">SUBMIT</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
  @import './index.scss'
</style>

