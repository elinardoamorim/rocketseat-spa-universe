export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event

    event.preventDefault()

    windows.history.pushState({}, "", event.target.href)
    
    this.handle()
  }

  handle(){
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })

    if(pathname == '/universo') {
      document.body.style.backgroundImage = 'url(../assets/mountains-universe-2.png)'
      document.querySelector("#btnHome").classList.remove("active")
      document.querySelector("#btnUniverso").classList.add("active")
      document.querySelector("#btnExploracao").classList.remove("active")
    } else if(pathname == '/exploracao') {
      document.body.style.backgroundImage = 'url(../assets/mountains-universe-3.png)'
      document.querySelector("#btnHome").classList.remove("active")
      document.querySelector("#btnUniverso").classList.remove("active")
      document.querySelector("#btnExploracao").classList.add("active")
    } else if(pathname == '/'){
      document.body.style.backgroundImage = 'url(../assets/mountains-universe-1.png)'
      document.querySelector("#btnHome").classList.add("active")
      document.querySelector("#btnUniverso").classList.remove("active")
      document.querySelector("#btnExploracao").classList.remove("active")
    } else {
      document.body.style.backgroundImage = 'url(../assets/mountains-universe-1.png)'
      document.querySelector("#btnHome").classList.remove("active")
      document.querySelector("#btnUniverso").classList.remove("active")
      document.querySelector("#btnExploracao").classList.remove("active")
    }
  }
}

