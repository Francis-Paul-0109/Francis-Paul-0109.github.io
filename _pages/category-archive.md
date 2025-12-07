---
layout: archive
title: "Posts by Category"
permalink: /categories/
author_profile: true
---

{% comment %}
  전체 카테고리 순회
  - posts-category.html include 사용
  - 각 카테고리별 글 목록 렌더링
{% endcomment %}

{% for category in site.categories %}
  {% assign cat_name = category[0] %}
  <h2>{{ cat_name | capitalize }}</h2>
  {% include posts-category.html taxonomy=cat_name %}
{% endfor %}
