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

### Section 2 - Get Started with Vue

- Environment Setup
    - Extension - Vue & Live Server (added within Visual Studio Code)
    - Framework- Use Bootstrap (CDN via jsDelivr)
    - Library - [vue.global.min.js](https://cdn.jsdelivr.net/npm/vue@3.5.12/dist/vue.global.min.js) (CDN via jsDelivr)
    - Note - Benefit through CND via jsDelivr: Users may already have these codes within the cache from their browser so that these documents do not need to be downloaded again.
- Example - Vue Example
    - data - > holding variables
        
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
        
    - components → reusable components
        
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
        
    - Some general ideas
        - `.mount(#id)` → Tells Vue take controls of this section
        - `v-model` - bind to a data object
        - `v-on={eventname}` - defines the action
            - i.e. `v-on=click="incrementCounter"`
        - `v-bind`: = `:`
            - i.e. `v-bind:type="type"` = `:type="type"`
        - to Use these components, remember to lowercase the Uppercase letter and add a hyphen at front
        - LifeCycle
            - Some generic functions that can be used
                - mounted()
                - updated()
                - created
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/fedb93fa-c9fd-4725-91dd-b6d23e2f57c9/858c32aa-07fc-420c-8283-94537ae0cdea/image.png)