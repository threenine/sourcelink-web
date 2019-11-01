[![Sourcelink](https://sourcelink.co.uk/img/logo.36d686d7.png)](https://sourcelink.co.uk)

 Sourcelink is a  Real Time Application based on a series of tutorials developed 
 to help learn and teach the concepts involved in developing Real-Time applications using
 Google Firebase.
 
 This is the Web Application aspect which has been developed using Vue.JS.
 
 
 
 The following are the links to the specific tutorials each explaining features as we build them
 
 * [How to start a new project using Vue.js](https://garywoodfine.com/how-to-start-a-new-project-using-vue-js/)
 * [How to use a Material Design Component Framework with Vue](https://garywoodfine.com/material-component-framework-vue/)
 * [How to Install Firebase with Vue.JS](https://garywoodfine.com/how-to-install-firebase-with-vue-js/)
 * [How to Use Vuex and Vue-Router in a Vue.JS Project](https://garywoodfine.com/using-vuex-and-vue-router-in-a-vue-project/)
 * [How to implement Navigation Guards Vue](https://garywoodfine.com/how-to-implement-navigation-guards-vue/)
 * [How to Use Firebase Cloud Functions](https://garywoodfine.com/how-to-use-firebase-cloud-functions/)
 * [How to split Vuex Store into modules](https://garywoodfine.com/how-to-split-vuex-store-into-modules/)
 * [How to update Firebase Authentication Profile](https://garywoodfine.com/how-to-update-firebase-authentication-profile/)
 * [Calling GraphQL API with Vue.JS](https://garywoodfine.com/calling-graphql-api-with-vue-js/) 
 * [How to use Vue.js Components](https://garywoodfine.com/how-to-use-vue-js-components/)
 
 # What is Sourcelink
The concept behind  [SourceLink](https://sourcelink.co.uk) is to become a developer only focused 
Community and Job Board, for developers and developed by developers.

## Project setup

Before running NPM Install ensure you create a .env file and provide the MDB Vue PRo ID. We use the pro version
in this development stack. 

Kicking off the project, I have only purchased a single developer license for MDB Vue Pro, basically because this is
more than a side project at this stage. Therefore to be able to host this code in a public repo for everyone to view
I had to come up with work around to enable using the MBD Vue Pro.

If you are downloading the project for the first time and have not previously done a `npm install` 
install the dependencies, you will need to carry out the following steps to get the project to work locally for you.

### Purchase a MBD Vue Pro license

You will need to purchase an MDB Vue Pro License, we make use of Pro Only available components in the project. 
So unfortunately the Free license will not be able to be used.

MDB Vue Pro is a 
[Material Design Component Framework for Vue](https://mdbootstrap.com/products/vue-ui-kit/?utm_ref_id=47167) which
enables developers create great looking web & mobile applications really quickly and easily. 

For more information checkout [How to use a Material Design Component Framework with Vue](https://garywoodfine.com/material-component-framework-vue/)


[Buy MDB Vue Pro](https://mdbootstrap.com/products/vue-ui-kit/?utm_ref_id=47167)
 
 ### Initial NPM Install
 
The initial workaround for this I was exploring how to use PreInstall and PostInstall tasks to inject the license code
. This is probably not the most optimal solution to solve this problem and involve some initial manual configrution to 
get started on a fresh clone.

I have previously posted about 
[How to use a Material Design Component Framework with Vue](https://garywoodfine.com/material-component-framework-vue/),
so would urge you to read this post to understand what I have done here

 




There are two additional `preisntall` and `postinstall` tasks to handle inserting and removing 
of the ID during install.

example of .env file should look like

```dotenv
MDB_VUE_PRO_ID='i5_gWisAtoP1We4KNOWw'  #this is ID just a sample and will not work
```


```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Run your tests
```
npm run test
```
### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

[![threenine logo](http://static.threenine.co.uk/img/github_footer.png)](https://threenine.co.uk/)


