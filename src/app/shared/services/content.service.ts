import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  // create object of pages
  pages: Object = {
    'home': {
      title: 'Home',
      subtitle: 'Welcome Home!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus tristique, ultrices ipsum non, porta nulla. Vivamus a arcu mi. Mauris ornare erat vitae ultricies ullamcorper. Nunc in dapibus augue, eget tincidunt neque. Morbi gravida ut velit vitae semper. Integer fermentum risus sed lobortis ullamcorper. In laoreet condimentum massa quis commodo. Suspendisse id venenatis diam. Nullam sodales nibh velit.',
      image: 'cactus1'
    },
    'about': {
      title: 'About',
      subtitle: 'About subtitle',
      content: 'Duis vel dictum mauris. Mauris varius ante ultricies, mollis ante id, interdum justo. Integer dignissim mauris lorem, imperdiet tincidunt nulla volutpat quis. Quisque eget eleifend metus. Nam eu erat non elit tincidunt condimentum. Donec posuere ornare justo in molestie. Maecenas turpis augue, sollicitudin ut luctus bibendum, laoreet nec enim. Donec maximus malesuada porta. Nunc a turpis ultricies, vehicula lacus vehicula, sodales enim.',
      image: 'cactus2'
    },
    'our-work': {
      title: 'Our Work',
      subtitle: 'Here is our work',
      content: 'Nulla quis varius nisi. Nulla iaculis velit et urna consectetur, a auctor enim dignissim. Phasellus sed ante eget est rhoncus sagittis. Mauris elementum feugiat neque eu elementum. Praesent lacus lacus, fermentum eget ipsum id, convallis vehicula dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet leo a dolor imperdiet tempor. Aliquam ac dolor ut eros fringilla pretium nec a orci.',
      image: 'cactus3'
    },
    'contact': {
      title: 'Contact',
      subtitle: 'Contact subtitle',
      content: 'Quisque et nulla augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis ante ac sapien aliquam consequat id ac eros. Donec suscipit, nisi ut pulvinar commodo, mauris purus placerat ante, faucibus dictum tortor ligula id lacus. Integer facilisis lacinia volutpat. Donec cursus molestie orci, sit amet pellentesque purus hendrerit id. Nunc in rutrum velit. Vivamus velit augue, sollicitudin ac viverra ut, faucibus nec dui. Suspendisse volutpat massa at nisl malesuada, eu tincidunt lectus dapibus. In non sollicitudin lacus.',
      image: 'flower'
    }
  };

  constructor() { }

}
