---
title: "001. 기록에 관해"
categories: blog
layout: single
sidebar: false
---

<!-- 🎬 전체 래퍼 -->
<section class="auto-scrolly">

  <!-- 🔥 좌측 고정 이미지 -->
  <div class="fixed-image">
    <img id="auto-img" src="/assets/images/post/1.기록에관해/1. github.png">
  </div>

  <!-- 🔥 우측 스크롤 텍스트 -->
  <div class="scrolly-text">

    <!-- STEP 1 -->
    <div class="step" data-img="1. github.png">
      <strong>Github 블로그를 시작하게 된 이유</strong>
      <p>
        사실 그렇게 큰 이유가 있지는 않습니다.
        이번 학기 온라인 저널리즘이라는 강의를 수강하게 되었고, 그 과정에서 포트폴리오를 만들게 되었습니다.
        개인 웹호스팅 서비스를 여러모로 찾아보았으나, 저의 필요에 적합한 서비스를 찾을 수 없었습니다.
        그러다 우연히 개발자들이 많이 사용하고 있는 github가 생각났고, 이에 여러 튜토리얼을 보고 시작하게 되었습니다.
      </p>
    </div>

    <!-- STEP 2 -->
    <div class="step" data-img="2. fountain pen.jpg">
      <strong>블로그는 입체적인 삶의 기록이다</strong>
      <p>
        교수님께서 강의 중 늘 강조하셨던 이야기 중 하나가 바로 블로그입니다.
        특히나 커뮤니케이션을 전공하는 학부생이라면 안하는 것이 범죄(다소 매우 엄청난 의역)이라 하셨는데요.
        이는 자신을 어필하는 요소이자, 특히 마케팅 분야로 많이 진출하는 학과의 특성상 당연한 이야기였습니다.
        이전 사회에서 글과 사진으로만 남겨졌던 단편적 기록을 입체적으로 발전시킬 수 있는 블로그를 더욱 시작해야겠다고 다짐하게 되었습니다.
      </p>
    </div>

    <!-- STEP 3 -->
    <div class="step" data-img="3. css coding.jpg">
      <strong>Github는 무엇인가?</strong>
      <p>
        github는 마이크로소프트 산하의 서비스입니다.
        git이라는 형상 관리 도구 중 하나로, 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템을 활용합니다.
        github는 개발자들이 서로 소스코드를 직접 공유하지 않고도, git을 통해 하나의 프로젝트에서 여러 명이 동시에 작업할 수 있도록 도와줍니다.
        개발자 친화적인 정책들로 매우 인기가 있으며, 개인 블로그로 활용하는 사람들도 많아 저도 선택하게 되었습니다.
        컴퓨터를 좋아하긴 하지만, 코딩을 잘 아는 편은 아니어서 처음엔 조금 겁이 났습니다. 그러나 배포된 블로그 템플릿 덕분에 쉽게 시작할 수 있었습니다.
        단점이자 장점이라면, 마크다운이라는 경량 마크업 언어를 사용해야 한다는 점입니다.
      </p>
    </div>

    <!-- STEP 4 -->
    <div class="step" data-img="2. fountain pen.jpg">
      <strong>마무리</strong>
      <p>
        앞으로 여러 작업물이 생겨나는 대로 업로드해보겠습니다.
        다들 늘 이유 없는 성실함이 주변을 에워싸길 기원합니다.
      </p>
    </div>

  </div>
</section>

<!-- 🎨 STYLE -->
<style>
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
  transition: opacity 0.6s ease-in-out;
}

.scrolly-text {
  width: 50%;
  margin-left: 45%;
  padding-top: 50px;
}

.step {
  margin: 80px 0;
  opacity: 0.2;
  min-height: 60vh;
  font-size: 1.15rem;
  line-height: 1.7;
  white-space: pre-line;
  transition: opacity 0.4s ease;
}
.step strong {
  display: block;
  font-size: 1.3rem;
  margin-bottom: 10px;
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
    if (rect.top < window.innerHeight * 0.55) index = i;
  });

  const active = steps[index];

  // 텍스트 활성화
  steps.forEach(step => step.classList.remove("active"));
  active.classList.add("active");

  // 이미지 변경
  const newImg = active.dataset.img;
  if (img.dataset.current !== newImg) {
    img.dataset.current = newImg;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = `/assets/images/post/1.기록에관해/${newImg}`;
      img.style.opacity = 1;
    }, 300);
  }

  // 텍스트 타이핑 (속도 느리게)
  if (!active.dataset.done) {
    const textNodes = Array.from(active.querySelectorAll("p"));
    textNodes.forEach(node => node.innerHTML = "");
    active.dataset.done = "true";

    textNodes.forEach(node => {
      const fullText = node.dataset.fullText || node.textContent;
      node.dataset.fullText = fullText;
      let i = 0;

      function type() {
        if (i < fullText.length) {
          node.innerHTML += fullText[i];
          i++;
          setTimeout(type, 40); // 타이핑 속도 조절 (40ms)
        }
      }
      type();
    });
  }
});
</script>
