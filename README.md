# @scripty/react-examples

# Description

react-examples component.

# Usage
```bash
npm install -s @scripty/react-examples
```

##### Client: Example.jsx

```javascript
import React, { Fragment } from 'react';
import { Examples } from '@scripty/react-examples';

import { Description, Code } from '@scripty/react-examples';

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
}
```
