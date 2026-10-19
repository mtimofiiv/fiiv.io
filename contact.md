---
layout: page
title: Contact
permalink: /contact/
lede: Have a project, a role or just a question? I'd love to hear from you.
---

<ul class="contact-list">
  {% for link in site.contact %}
    <li>
      <a href="{{ link.url }}"{% unless link.url contains 'mailto:' %} rel="me noopener" target="_blank"{% endunless %}>
        <span class="contact-title">{{ link.title }}</span>
        <span class="contact-handle">{{ link.handle }}</span>
        <span class="contact-arrow" aria-hidden="true">&rarr;</span>
      </a>
    </li>
  {% endfor %}
</ul>
