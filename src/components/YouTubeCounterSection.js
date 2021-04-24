import React from 'react';
import _ from 'lodash';

import {toStyleObj, withPrefix, markdownify, Link, classNames} from '../utils';

export default class YouTubeCounterSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row youtubecounter__section" data-id={_.get(section, 'section_id', null)}>
                <div>
                    
                </div>
            </section>
        );
    }
}