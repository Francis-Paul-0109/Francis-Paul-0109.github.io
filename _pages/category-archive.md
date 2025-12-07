---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: true
---

{% comment %}
  taxonomy를 posts-category.html에 전달하여 카테고리별 글 목록 표시
{% endcomment %}

{% assign categories_list = site.categories | sort %}

{% for category in categories_list %}
  <h2>{{ category[0] }}</h2>
  {% include posts-category.html taxonomy=category[0] %}
{% endfor %}
