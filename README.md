# Next-Image-Opt-Test
checking out the nextjs Image component to see how much optimisation it does for images. 

Images were loaded using unsplash API 
## To run project
- `git clone` this repo
- create a `.env` file in the project root and make the following entry inside the empty file
```
ACCESS_KEY=<provide your actual access key>
``` 
Sorry, I won't be sharing my access key with you. So, you'll have to setup an account with unsplash to obtain your own access key ;)
- `npm install` to install dependencies
- `npm run dev` to run dev server
- navigate to `http://localhost:3000`
- open your dev tools and navigate to network tab. You can set the value of `mode` to `raw` to render the images using regular html `<img />` or to `optimised` to render with nextjs' `<Image />` component. Then, observe the image sizes and the lazy-loading feature this awesome component provides
