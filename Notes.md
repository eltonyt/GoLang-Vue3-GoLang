# Web Development w/ Google’s Go (golang) Programming Language
Instructor - Trevor Sawler - St. Thomas Associate Professor

### Section 1 - Introduction

- Language - Vue & Go
    - Vue - 3.0
        - Options API & Composition API in Vue
        - Data store in Vue & Vue Router
- Environment
    - Vue - 3.0
    - Go - go1.23.0 windows/386
    - IDE - Visual Studio Code
        - Extension - Go (for go)
        - Extension - **gotemplate-syntax** (for go)
        - Extension - vetur (for vue)
    - Make Extension
        - Chocolatey
        - `choco install make`

### Section 2 - Get Started with Vue (CND version of Vue instead of vue-cli)

- Environment Setup
    - Extension - Vue & Live Server (added within Visual Studio Code)
    - Framework- Use Bootstrap (CDN via jsDelivr)
    - Library - [vue.global.min.js](https://cdn.jsdelivr.net/npm/vue@3.5.12/dist/vue.global.min.js) (CDN via jsDelivr)
    - Note - Benefit through CND via jsDelivr: Users may already have these codes within the cache from their browser so that these documents do not need to be downloaded again.
- Vue - Some Notes
    - data(){} - > holding variables&data
        
        ```jsx
        const vm = Vue.createApp({
        	// ......
          data() {
            return data;
          },
          // ......
        }).mount("#app")
        ```
        
    - methods → holding functions
        
        ```jsx
        const vm = Vue.createApp({
        		// ......
            methods: {
                incrementCounter() {
                    this.counter ++;
                },
                decrementCounter() {
                    this.counter --;
                },
            }
            // ......
        }).mount("#app")
        ```
        
    - components → any reusable components(instances)
        
        ```jsx
        <body>
        	<my-component></my-component>
        	
        	<script>
        	const MyComponent = {
        	    props: [],
        	    template: `
        	        <h1>My Component</h1>
        	    `,
        	}
        	const vm = Vue.createApp({
        			// ......
        	    components: {
        	        MyComponent,
        	    }
        			// ......
        	}).mount("#app")
        	</script>
        </body>
        ```
        
        - For components, we can define some properties that will be used within the template. Basically, we can have 2 things within components - props & templates. Templates are written in HTML while using the properties defined under this component.
    - Some general rules
        - `.mount(#id)` → Tells Vue take controls of this section
        - `v-model` - bind to a data object
        - `v-on={eventname}` - defines the action
            - i.e. `v-on:click="incrementCounter"`
        - `v-bind`: = `:`
            - i.e. `v-bind:type="type"` = `:type="type"`
        - to Use these components, remember to lowercase the Uppercase letter and add a hyphen at front
        - LifeCycle
            - Some generic functions that can be used
                - mounted()
                - updated()
                - created
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/fedb93fa-c9fd-4725-91dd-b6d23e2f57c9/858c32aa-07fc-420c-8283-94537ae0cdea/image.png)
            
- 1 file to several files (index.html to multiple files)
    - form.js → Contains the
        - TextInput component, SelectInput and the form template
    - registration-form.js → Contains specific form which uses form.js template
    - registration.html → actual html, which contains our vue app and registration form
    - **Side Note: If files have extension as .js and under the same directory, then no need to do the import. If the files have different extension names but under the same directory, then still need to import.**
- BootStrap Notes - These BootStrap HTML template can be used within Vue’s Component - Template section for specific component webpage rendering
    - Select Box
        
        ```jsx
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        ```
        
    - Check Box
        
        ```jsx
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        ```
        
    - Input Box
        
        ```jsx
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        ```
        

### Section 3 - Node js & vue-cli

- Introduction
    - Environment
        - node.js - v18.15.0
        - vue-clie - @vue/cli 5.0.8 (**Standard Tooling for Vue.js Development**)
    - Basic Workflow
        - `npm create xxxx` - create project
        - `cd $Your_project_dir`
        - `npm run serv` - Start your application
    - Project Structure
        - node_modules - This is needed for all vue applications. `npm install` helps install this if your project is not created through `vue-cli`
        - public
            - index.html - your start page
        - src
            - main.js -
            - App.vue - Top version of the vue
                - Style Tag - style sheet for this component and children components
                    - `<style scoped>` - limit CSS to this component only
            - components - Project Components
                - It would be the best if the component is always named with multi words.
            - assets - static items that will be used within the project
        - package.json
            - Dependencies
            - Browser supported
            - etc.