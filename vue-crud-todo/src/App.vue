<template>
  <div id="app">
    <b-container>
      <b-nav tabs
      >
        <b-nav-item exact to="/todos">Listado de Todo</b-nav-item>
        <b-nav-item exact to="/todos/create">Formulario de alta de Todo</b-nav-item>
      </b-nav>
       <router-view/>
    </b-container>
   
  </div>
</template>
