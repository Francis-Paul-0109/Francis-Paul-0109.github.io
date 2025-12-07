---
layout: archive
title: "Posts by Category"
permalink: /categories/
author_profile: true
---

{% comment %}
  첫 번째 카테고리를 변수로 할당 후 include에 전달
  Jekyll 3.x / GitHub Pages 호환
{% endcomment %}

{% if page.categories and page.categories[0] %}
  {% assign cat_name = page.categories[0] %}
  {% include posts-category.html taxonomy=cat_name %}
{% endif %}
