---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: true
---

{% assign categories_list = site.categories | sort %}

{% for category in categories_list %}
  {% assign current_category = category[0] %}
  <h2>{{ current_category }}</h2>
  {% include posts-category.html taxonomy=current_category %}
{% endfor %}
