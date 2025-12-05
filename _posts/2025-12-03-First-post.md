---
title: "001. 기록에 관해"
categories: blog
layout: fullscreen
sidebar: false
footer: false
masthead: false
background-color: "#EFECE3"  # 여기서 포스트별 배경색 변경 가능
---

<!-- 🎬 전체 래퍼 -->
<section class="auto-scrolly">

  <!-- 🔥 좌측 고정 이미지 -->
  <div class="fixed-image">
    <img id="auto-img" src="/assets/images/post/1.기록에관해/1. github.png">
  </div>

  <!-- 🔥 우측 스크롤 본문 -->
  <div class="scrolly-text">

    <div class="step" data-img="1. github.png" data-text="Github 블로그를 시작하게 된 이유
사실 그렇게 큰 이유가 있지는 않습니다.
이번 학기 온라인 저널리즘이라는 강의를 수강하게 되었고, 그 과정에서 포트폴리오를 만들게 되었습니다.
개인 웹호스팅 서비스를 여러모로 찾아보았으나, 저의 필요에 적합한 서비스를 찾을 수 없었습니다.
그러다 우연히 개발자들이 많이 사용하고 있는 github가 생각났고, 이에 여러 튜토리얼을 보고 시작하게 되었습니다."></div>

    <div class="step" data-img="2. fountain pen.jpg" data-text="블로그는 삶의 기록이다
교수님께서 강의 중 늘 강조하셨던 이야기 중 하나가 바로 블로그입니다.
특히나 커뮤니케이션을 전공하는 학부생이라면 안하는 것이 범죄라 하셨는데요.
이는 어떻게 보면 자신을 어필하는 요소이자 특히나 마케팅분야로 많이 진출하는 학과의 특성상 당연한 이야기였습니다.
이에 이전 사회에 글과 사진으로만 남겨졌던 단편적 기록을 더욱 입체적으로 발전시킬 수 있는 블로그를 더욱더 시작해야겠노라 다짐하게 되었습니다."></div>

    <div class="step" data-img="3. css coding.jpg" data-text="Github는 무엇인가?
github는 마이크로소프트 산하의 서비스입니다.
git이라는 형상 관리 도구 중 하나로, 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템을 활용합니다.
이런 github는 개발자들 상호간 소스코드를 직접 공유하지 않고도, git을 통해 하나의 프로젝트, 같은 파일에 대해 여려명이 동시에 작업을 할 수 있도록 도와줍니다.
사실 개발자 친화적인 정책들로 매우 인기가 있는데, 생각보다 많은 분들이 개인 블로그로 활용을 하고 계시기에 저도 선택하게 되었습니다 :)
컴퓨터를 좋아하는가에 대해 묻는다면 개인적으로 그렇다고 대답하지만, 개발이나 코딩을 잘 아는가라고 묻는다면 절대 단호하게 아니라고 대답하는 사람이기에 처음엔 조금 겁이 났습니다.
그러나 블로그 제작을 돕는 기본 코드들을 배포하고 있었으며, 생각보다 그 과정 또한 어렵지 않아서 쉽게 할 수 있었던 것 같습니다.
다만 단점이자 장점이 있다면 마크다운이라는 경량 마크업 언어를 사용한다는 점이 처음 사용하는 사람에게는 조금 난이도를 높이는 요소가 될 수 있을 것 같았습니다."></div>

    <div class="step" data-img="2. fountain pen.jpg" data-text="앞으로 여러 작업물이 생겨나는데로 업로드해보겠습니다.
다들 늘 이유없는 성실함이 주변을 에워싸길 기원합니다."></div>

  </div>
</section>

<!-- 🎨 STYLE -->
<style>
/* 전체 배경색 */
body {
  background-color: {{ page.background-color }};
  font-family: "MyHeaderFont", sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* 좌측 고정 이미지 */
.fixed-image {
  position: fixed;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 35%;
  max-width: 400px;
  z-index: 5;
}
.fixed-image img {
  width: 100%;
  opacity: 1;
  transition: opacity 0.7s ease-in-out;
}

/* 본문 */
.scrolly-text {
  width: 55%;
  margin-left: 45%;
  padding-top: 10vh; /* 상단 여유 */
}

.step {
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  margin: 120px 0;
  font-size: 1.2rem;
  line-height: 1.7;
  white-space: pre-line;
}
.step.active {
  opacity: 1;
}
</style>

<!-- 🎬 스크립트 -->
<script>
document.addEventListener("scroll", function () {
  const steps = document.querySelectorAll(".step");
  const img = document.getElementById("auto-img");

  let index = 0;

  steps.forEach((step, i) => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.45) index = i;
  });

  const active = steps[index];

  // 텍스트 페이드
  steps.forEach(step => step.classList.remove("active"));
  active.classList.add("active");

  // 이미지 페이드
  const newImg = active.dataset.img;
  if (img.dataset.current !== newImg) {
    img.dataset.current = newImg;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = `/assets/images/post/1.기록에관해/${newImg}`;
      img.style.opacity = 1;
    }, 300);
  }
});
</script>
