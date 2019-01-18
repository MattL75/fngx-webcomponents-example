# Fundamental-ngx Web Component Example

This repository is intended as a guide to people looking to convert Fundamental-ngx components to Web Components. It transforms the Badge, Label and Datepicker components. A step-by-step guide follows in this file. A working example is in the dist folder. Open the index.html file to see it.

### Initial Steps

1. Make sure your components are inside your application.
2. Add your components to the entryComponents in the root module.
3. Define the web components in the constructor of the AppModule, as shown in the `app.module.ts` file.

### Preparing the Files

1. `main.ts` should be overwritten with the contents of the one in this app.
2. While it is possible to use the artifacts created by Angular to import the components, it is easier to compile them into one script. This project uses Gulp, but a Node script would work just as well.
3. The command `npm run package` will create elements.js and elements.css, which can then be used inside any HTML application.

### Inside the HTML

There are a number of bugs or sketchy aspects of Angular Elements which may frustrate you in your conversion attempts. Two of these can be solved by adding the following scripts to the body tag.

`<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.3/custom-elements-es5-adapter.js"></script>`

`<script type="text/javascript" src="https://unpkg.com/zone.js"></script>`

The first script solves an issue that causes the component to fail when compiled with es5 as a target. The second script imports Zone.js, which may or may not be required for your component so I suggest you try it yourself.


**Please post any questions/concerns/requests to the Fundamental-ngx issues.**
