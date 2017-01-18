import React, { PropTypes, Component } from 'react'
import AdInlist from './AdInlist.jsx';

import Masonry from 'react-masonry-component';

export default class AsdList extends Component {

    render() {
        return (
            <div className='ads-list'>
                {
                    this.props.listAds.item_list.map((ad, index) =>
                        <AdInlist
                            key={index}
                            title={ad.title}
                            category={ad.category}
                            age={ad.age}
                            gender={ad.gender}
                            findGender={ad.findGender}
                            locationName={ad.locationName}
                            createdAd={ad.createdAt}
                            visible={ad.visble}
                            email={ad.email}
                        >
                            {ad.text}
                        </AdInlist>
                    )
                }
            </div>
        );
    }
}

// AsdList.propTypes = {
//     ads: PropTypes.array.isRequired
// }

