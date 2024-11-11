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
- 

### Section 4 - Routing with the Vue Router

- Environment
    - Version - Vue Router 4 → This is for Vue 3
        - `npm install vue-router@4`
    - Vue Router 3 - This is for Vue 2
- Sample File  - Index.js (for our router file)
    
    ```jsx
    import { createRouter, createWebHistory } from "vue-router";
    import AppBody from "./../components/AppBody.vue";
    import AppLogin from "../components/AppLogin.vue";
    
    const routes = [
      {
        path: "/",
        name: "Home",
        component: AppBody,
      },
      {
        path: "/login",
        name: "Login",
        component: AppLogin,
      },
    ];
    
    const router = createRouter({ history: createWebHistory(), routes });
    export default router;
    
    ```
    
    - Within your app.vue, add `<router-view> </router-view>`
    - Within the component where you’ll need to use the router, add `router-link` tags
        
        ```jsx
        <router-link class="nav-link active" aria-current="page" to="/">
        	Home
        </router-link>
        ```
        
    - Within your Vue Application Start file, remember to user router - usually in main.js file
        
        ```jsx
        import { createApp } from 'vue'
        // Import bootstrap into my project
        import App from './App.vue'
        import router from './router'
        
        createApp(App).use(router).mount('#app')
        ```
        
- Slot Tag - `<slot></slot>`
    - Allows developers to specify a place in any tags with some undetermined content to show up.
    - Example
        
        ```jsx
          // Within this Form-Tag.vue file, I know that we need some dynamic input fields in between of two form tags
          <form
            autocomplete="off"
            :method="method"
            :action="action"
            class="needs-valudidation"
            novalidate
          >
            <slot></slot>
          </form>
          
          // How form is used within other vue files
        <form-tag>
          <text-input
            label="Email"
            type="email"
            name="email"
            required="true"
          ></text-input>
        
          <text-input
            label="Password"
            type="password"
            name="password"
            required="true"
          ></text-input>
          <hr />
          <input type="submit" class="btn btn-primary" value="submit" />
        </form-tag>
        ```
        
- `v-on:myevent = "xxx"` =  `@myevent = "xxx"`

### Section 5 - Building a Go REST back end

- Data payload Format - Json
    - Read Json into my type - use `json.Unmarshal`
        - - omitempty → if this tag does not exist within the json, then skip it
        
        ```go
        // You can edit this code!
        // Click here and start typing.
        package main
        
        import (
        	"encoding/json"
        	"fmt"
        	"os"
        )
        
        type Person struct {
        	ID        int64  `json:"id"`
        	FirstName string `json:"first_name,omitempty"`
        	LastName  string `json:"last_name,omitempty"`
        }
        
        func main() {
        	jsonBytes := []byte(`
        		{
        			"id": 1,
        			"first_name": "Trevor"
        		}`)
        
        	var me Person
        
        	err := json.Unmarshal(jsonBytes, &me)
        	if err != nil {
        		fmt.Println(err)
        		os.Exit(1)
        	}
        
        	fmt.Println("Hello", me.FirstName)
        }
        ```
        
    - Parse my type into Json - use `json.MarshalIndent`
        
        ```go
        // You can edit this code!
        // Click here and start typing.
        package main
        
        import (
        	"encoding/json"
        	"fmt"
        )
        
        type Dogs struct {
        	DogName string `json:"name"`
        }
        
        type Person struct {
        	ID        int64  `json:"id"`
        	FirstName string `json:"first_name,omitempty"`
        	LastName  string `json:"last_name,omitempty"`
        	HasDogs   bool
        	Dogs      []Dogs `json:"dogs"`
        	HasCats   bool   `json:"-"`
        }
        
        func main() {
        	var me Person
        	me.ID = 1
        	me.FirstName = "Trevor"
        	me.HasDogs = true
        	me.Dogs = []Dogs{{DogName: "Samson"}, {DogName: "Cassie"}}
        
        	out, _ := json.MarshalIndent(me, "", "\t")
        
        	fmt.Println(string(out))
        }
        ```
        
- Dummy API
    - Why direct value for config but pointer for application?
        - config - The `config` struct stores simple, unchanging settings (like the port number), so it’s safe and efficient to pass it by value
            - **Side Note - In Go, when you pass a struct by value, any changes you make to the struct within a function apply only to the copy, not the original instance.**
        - application - The `application` struct contains elements that might be modified or accessed frequently, such as loggers. Passing it by reference (`&application{}`) allows the `serve()` method and other functions to **access the same instance without copying the struct each time**, which is efficient and keeps state consistent across multiple function calls.
        
        ```go
        package main
        
        import (
        	"encoding/json"
        	"fmt"
        	"log"
        	"net/http"
        	"os"
        )
        
        // PORT OF THE APPLICATION
        type config struct {
        	port int
        }
        
        // SOME GENERAL ITEMS THAT WILL BE USED WITHIN THE APPLICATION
        type application struct {
        	config   config
        	infoLog  *log.Logger
        	errorLog *log.Logger
        }
        
        func main() {
        	var cfg config
        	// BACKEND LISTEN AT PORT 8081 WHEN FRONTEND LISTEN AT PORT 8080
        	cfg.port = 8081
        
        	// LOGS SETUP
        	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
        	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
        
        	// WHY POINTER? SEE COMMENTS ABOVE
        	app := &application{
        		config:   cfg,
        		infoLog:  infoLog,
        		errorLog: errorLog,
        	}
        
        	err := app.serve()
        	if err != nil {
        		log.Fatal(err)
        	}
        }
        
        func (app *application) serve() error {
        	// ROOT ENDPOINT - MAPS TO AN INLINE FUNCTION
        	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        		var payload struct {
        			Okay    bool   `json:"ok"`
        			Message string `json:"message"`
        		}
        		payload.Okay = true
        		payload.Message = "Hello, world"
        
        		out, err := json.MarshalIndent(payload, "", "\t")
        		if err != nil {
        			app.errorLog.Println(err)
        		}
        
        		w.Header().Set("Content-Type", "application/json")
        		w.WriteHeader(http.StatusOK)
        		w.Write(out)
        	})
        	app.infoLog.Println("API listening on port", app.config.port)
        	return http.ListenAndServe(fmt.Sprintf(":%d", app.config.port), nil)
        }
        
        ```
        
    - Refactor - DO NOT use inline function
        
        ```go
        // ... SAME THINGS BEFORE
        // Separate function to handle the root endpoint
        func (app *application) homeHandler(w http.ResponseWriter, r *http.Request) {
        	var payload struct {
        		Okay    bool   `json:"ok"`
        		Message string `json:"message"`
        	}
        	payload.Okay = true
        	payload.Message = "Hello, world"
        
        	out, err := json.MarshalIndent(payload, "", "\t")
        	if err != nil {
        		app.errorLog.Println(err)
        		return
        	}
        
        	w.Header().Set("Content-Type", "application/json")
        	w.WriteHeader(http.StatusOK)
        	w.Write(out)
        }
        
        func (app *application) serve() error {
        	// Use the homeHandler function as the handler for the root endpoint
        	http.HandleFunc("/", app.homeHandler)
        
        	app.infoLog.Println("API listening on port", app.config.port)
        	return http.ListenAndServe(fmt.Sprintf(":%d", app.config.port), nil)
        }
        ```
        
- Golang Router
    - Install Chi v5- `go get -u [github.com/go-chi/chi/v5](http://github.com/go-chi/chi/v5)`
    - File routes.go - This file helps define a multiplexer that helps route request to correct api handlers
        
        ```go
        package main
        
        import (
        	"net/http"
        
        	"github.com/go-chi/chi/v5"
        	"github.com/go-chi/chi/v5/middleware"
        )
        
        func (app *application) routes() http.Handler {
        	mux := chi.NewRouter()
        	mux.Use(middleware.Recoverer)
        
        	mux.Get("/users/login", app.Login)
        	mux.Post("/users/login", app.Login)
        
        	return mux
        }
        
        ```
        
    - File handler.go - This file is similar to a service+serviceImplementation files in Java which includes specific logic
        
        ```go
        package main
        
        import (
        	"encoding/json"
        	"net/http"
        )
        
        type jsonResponse struct {
        	Error   bool   `json:"error"`
        	Message string `json:"message"`
        }
        
        func (app *application) Login(w http.ResponseWriter, r *http.Request) {
        	type credentials struct {
        		UserName string `json:"email"`
        		Password string `json:"password"`
        	}
        
        	var creds credentials
        	var payload jsonResponse
        
        	err := json.NewDecoder(r.Body).Decode(&creds)
        	if err != nil {
        		app.errorLog.Println("Invalid json")
        		payload.Error = true
        		payload.Message = "Invalid json"
        
        		out, err := json.MarshalIndent(payload, "", "\t")
        		if err != nil {
        			app.errorLog.Println(err)
        		}
        
        		w.Header().Set("Content-Type", "application/json")
        		w.WriteHeader(http.StatusOK)
        		w.Write(out)
        		return
        	}
        
        	app.infoLog.Println(creds.UserName, creds.Password)
        
        	payload.Error = false
        	payload.Message = "Signed in"
        	out, err := json.MarshalIndent(payload, "", "\t")
        	if err != nil {
        		app.errorLog.Println(err)
        	}
        
        	w.Header().Set("Content-Type", "application/json")
        	w.WriteHeader(http.StatusOK)
        	w.Write(out)
        }
        
        ```
        
    - File main.go - similar to what we had before. However, we tell go that route is now handled by chi.
        
        ```go
        func (app *application) serve() error {
        	app.infoLog.Println("API listening on port", app.config.port)
        	srv := &http.Server{
        		Addr:    fmt.Sprintf(":%d", app.config.port),
        		Handler: app.routes(),
        	}
        	return srv.ListenAndServe()
        }
        ```
        
    - File AppLogin.vue - Front end connect to the backend
        
        ```jsx
        <script>
        import TextInput from "./form/TextInput.vue";
        import FormTag from "./form/MyForm.vue";
        export default {
          name: "AppLogin",
          components: {
            TextInput,
            FormTag,
          },
          data() {
            return {
              email: "",
              password: "",
            };
          },
          methods: {
            **submitHandler() {
              console.log("submitHandler called - success!");
        
              const payload = {
                email: this.email,
                password: this.password,
              };
        
              const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
              };
              fetch("http://localhost:8081/users/login", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                  if (data.error) {
                    console.log("Error: ", data.message);
                  } else {
                    console.log(data);
                  }
                });
            },**
          },
        };
        </script>
        ```
        
    - Resolve the cross-origin issue
        - Installation chi/corz - `go get [github.com/go-chi/cors](http://github.com/go-chi/cors)`
        - Code - File routes.go
            
            ```jsx
            package main
            
            import (
            	"net/http"
            
            	"github.com/go-chi/chi/v5"
            	"github.com/go-chi/chi/v5/middleware"
            	"github.com/go-chi/cors"
            )
            
            func (app *application) routes() http.Handler {
            	mux := chi.NewRouter()
            	mux.Use(middleware.Recoverer)
            	**mux.Use(cors.Handler(cors.Options{
            		AllowedOrigins:   []string{"https://*", "http://*"},
            		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
            		AllowedHeaders:   []string{"Accpet", "Authorization", "Content-Type", "X-CSRF-Token"},
            		ExposedHeaders:   []string{"Link"},
            		AllowCredentials: true,
            		MaxAge:           300,
            	}))**
            
            	mux.Get("/users/login", app.Login)
            	mux.Post("/users/login", app.Login)
            
            	return mux
            }
            
            ```