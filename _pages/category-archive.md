---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: true
---

{% comment %}
  모든 카테고리에 대해 posts-category.html include
{% endcomment %}

{% for category in site.categories %}
  <h2>{{ category[0] }}</h2>
  {% include posts-category.html taxonomy=category[0] %}
{% endfor %}
