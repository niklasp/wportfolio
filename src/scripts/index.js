import mediumZoom from 'medium-zoom';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

mediumZoom('img');
