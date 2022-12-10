# Other Components

### `Welcome`

```jsx
import React from 'react';

const Welcome = () => {
    return (
        <div>
            <h1>MERN Authentication</h1>
            <p>Welcome to my app.</p>
        </div>
    )
}

export default Welcome;
```

### `About`

```jsx
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is about us...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?
            </p>
        </div>
    )
}

export default About;
```

### `Footer`

```jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container text-center">
                <span className="text-muted">@2021 Built by SEI 802</span>
            </div>
        </footer>
    )
}

export default Footer;
```