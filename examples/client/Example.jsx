import React from 'react';
import { Description, Code, Properties, Component } from '../../src';

export const Example = () => {

    const code = `import { Description, Code } from '@scripty/react-examples';

export const MyComponent = () => {

     const code = \`Your Component goes here\`;

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
