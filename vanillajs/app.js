const Events = (function(){
    var topics = {}
    var hOP = topics.hasOwnProperty
  
    return {
      on: function(topic, listener) {
        if(!hOP.call(topics, topic)) topics[topic] = []
        topics[topic].push(listener)
      },
      emit: function(topic, info) {
        if(!hOP.call(topics, topic)) return
        topics[topic].forEach(function(item) {
          item(info != undefined ? info : {})
        })
      }
    }
  })()
  
  Events.on('add-todo', todo => {
    Todos.add(todo)
    Render.notifyAll()
  })
  
  const Render = (() => {
    let data = []
    
    return {
      suscribe: observer => data.push(observer),
      notifyAll: () => data.forEach(x => x())
    }
  })()
  
  const Todos = (() => {
    let data = []
  
    return {
      add: x => data.push(x),
      get: () => data,
    }
  })()
  
  Render.suscribe(() => {
    const todoList = Todos.get()
    const todosTemplate = document.getElementById('todo-list')
    const template = todoList.reduce((acc, el) =>
      `${acc}<li>${el.title}</li>`, '')
    todosTemplate.innerHTML = template
  })
  
  
  window.onload = () => {
    const button = document.getElementById('todo-submit')
    button.onclick = () => {
      const todoInput = document.getElementById('todo-input')
      const todoValue = todoInput.value
      todoInput.value = ''
      const todo = {
        id: Math.random().toString(36) + Math.random().toString(36),
        title: todoValue,
      }
      Events.emit('add-todo', todo)
    }
  }