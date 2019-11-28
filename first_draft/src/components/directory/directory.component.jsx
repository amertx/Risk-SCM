import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Manafacturer',
          imageUrl: 'https://vertassets.blob.core.windows.net/image/ccb716de/ccb716de-4c19-41ab-a94e-f9c7775785e8/patheon_pills_manufacturing_line.png',
          size: 'large',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'Distributor',
          imageUrl: 'https://s.yimg.com/uu/api/res/1.2/0ciplKIaX_kM7tHqwWKlMw--~B/aD0xMjk5O3c9MjMwOTtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/motleyfool.com/1a3efebb058b3d4a09f35dc69e23a605',
          size: 'large',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'hospitals',
          imageUrl: 'https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg',
          size: 'large',
          id: 3,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
