<template>
  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(banner, index) in bannerList"
          :key="index"
          class="swiper-slide"
          style="background: #040B1B;"
        >
          <a :href="banner.linkUrl" target="_blank">
            <img :src="banner.imageUrl" :alt="banner.title" >
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white" />
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </div>
    <!-- 幻灯片 结束 -->
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul id="bna" class="of">
                <li v-for="(course, index) in hotCourseList" :key="index">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        :alt="course.title"
                        class="img-responsive"
                      >
                      <div class="cc-mask">
                        <a
                          href="#"
                          title="开始学习"
                          class="comm-btn c-btn-1"
                        >开始 学习</a
                        >
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a
                        :title="course.title"
                        href="#"
                        class="course-title fsize18 c-333"
                      >{{ course.title }}</a
                      >
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green">
                        <i
                          v-if="Number(course.price) === 0"
                          class="c-fff fsize12 f-fA"
                        >免费</i
                        >
                        <i v-else class="c-fff fsize12 f-fA">{{
                          course.price
                        }}</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{ course.buyCount }}人学习</i>
                        |
                        <i class="c-999 f-fA">{{ course.viewCount }}评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear" />
            </article>
            <section class="tac pt20">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="(teacher, index) in hotTeacherList" :key="index">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/' + teacher.id" :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar" >
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a
                        :href="'/teacher/' + teacher.id"
                        :title="teacher.name"
                        class="fsize18 c-666"
                      >{{ teacher.name }}</a
                      >
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{
                        teacher.level === 1 ? "高级讲师" : "首席讲师"
                      }}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">
                        {{ teacher.career }}
                      </p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear" />
            </article>
            <section class="tac pt20">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>
<script>
import banner from '@/api/banner'
import index from '@/api/index'
export default {
  data() {
    return {
      bannerList: [],
      hotCourseList: [],
      hotTeacherList: [],
      swiperOption: {
        // 配置分页
        pagination: {
          el: '.swiper-pagination' // 分页的dom节点
        },
        // 配置导航
        navigation: {
          nextEl: '.swiper-button-next', // 下一页dom节点
          prevEl: '.swiper-button-prev' // 前一页dom节点
        }
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      banner.getBannerList().then(res => {
        console.log(res)
        this.bannerList = res.data.data.data
      })
      index.getHotCourseAndTeacher().then(res => {
        console.log(res.data.data)
        this.hotCourseList = res.data.data.courseList
        this.hotTeacherList = res.data.data.teacherList
      })
    }
  }
}
</script>
