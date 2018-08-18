1. Create a new site. gatsby new gatsby-site
2. cd gatsby-site
3. gatsby develop
4. Shut down server
5 . Install contentful plugin npm i -s gatsby-source-contentful
6. npm install --save-dev dotenv
create .env file at root of project 
add the CF_SPACE and api keys into the .env file
Next, make sure to tell Git to ignore that .env file from your repository by adding it to the .gitignore file:
7. add contentful plugin to gatsby-config.js
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || '',
        accessToken: process.env.CF_TOKEN || ''
      }
    }

8. git init at root
9. create repo gatsby-site on github 
10. git remote add origin https://github.com/tanyasweet1933/gatsby-site.git
11.git push -u origin master
12. create netlify , authorize github and add cf tokens to continous deployment build variables
13.