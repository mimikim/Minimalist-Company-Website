import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  // create object of pages
  pages: Object = {
    'home': {
      title: 'Home',
      subtitle: 'Welcome Home!',
      content: 'Some home content',
      image: 'cactus1'
    },
    'about': {
      title: 'About',
      subtitle: 'About subtitle',
      content: 'About page content',
      image: 'cactus2'
    },
    'our-work': {
      title: 'Our Work',
      subtitle: 'Here is our work',
      content: 'our work content below',
      image: 'cactus3'
    },
    'contact': {
      title: 'Contact',
      subtitle: 'Contact subtitle',
      content: 'Contact page content',
      image: 'flower'
    }
  };

  constructor() { }

}
