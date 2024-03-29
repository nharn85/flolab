Drupal.behaviors.accordion = {
  attach: function (context, settings) {

    'use strict';

    // Set 'document' to 'context' if Drupal
    var accordionItem = document.querySelectorAll('.accordion-item__term');
    var accordionDef = document.querySelectorAll('.accordion-item__def');

    // If javascript, hide accordion definition on load
    function jsCheck() {
      for (var i = 0; i < accordionDef.length; i++) {
        if (accordionDef[i].classList) {
          accordionDef[i].classList.add('active');
          accordionDef[0].previousElementSibling.classList.add('is-active');
        }
        else {
          accordionDef[i].className += ' active';
          accordionDef[0].previousElementSibling.classList.add('is-active');
        }
      }
    }

    jsCheck();

    // Accordion Toggle
    // Mobile Click Menu Transition
    for (var i = 0; i < accordionItem.length; i++) {
      accordionItem[i].addEventListener('click', function (e) {
        var className = 'is-active';
        // Add is-active class
        if (this.classList) {
          this.classList.toggle(className);
        }
        else {
          var classes = this.className.split(' ');
          var existingIndex = classes.indexOf(className);

          if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
          }
          else {
            classes.push(className);
          }
          this.className = classes.join(' ');
        }
        e.preventDefault();
      });
    }
  }
};
