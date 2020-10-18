import React from 'react';
import { Description, Code } from '../../src';
import { Properties } from '../../src/Properties';
import { Component } from '../../src/Component';

export const Example = () => {

    const code = `import { Description, Code } from '@scripty/react-examples';

export const MyComponent = () => {

     const propertiesData = [
        {
            property: 'title',
            description: 'Title of your example component',
            type: 'string',
            default: 'none'
        }
    ]

    return (
        <Description title={'Simple Description Component'}>
            <Component>
                Your Component goes here
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
}`;

    const propertiesData = [
        {
            property: 'title',
            description: 'Title of your example component',
            type: 'string',
            default: 'none'
        }
    ]

    return (
        <Description title={'Simple Description Component'}>
            <Component>
                Your Component goes here
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};
