<template>
  <div id="editor">
    <label>
      <textarea v-model="input" @input="update"></textarea>
    </label>
    <div v-html="compiledMarkdown"></div>
    <button v-on:click="save">Save</button>
    <button v-on:click="load">Load</button>
    <label>
      <input v-model="name"/>
    </label>

    <ul>
      <li v-for="file in files" v-on:click="open(file)">
        {{file.name}}
      </li>
    </ul>
  </div>
</template>

<script>

  import * as marked from "marked";

  export default {
    name: 'editor',
    data: function() {
      return {
        input: '# hello',
        name: '',
        _id: null,
        files:[]
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    },
    methods: {
      update: function (e) {
        this.input = e.target.value
      },
      save: function (e) {
        let body = {
          name:this.name,
          input:this.input
        };
        if(this._id) body._id = this._id;
        console.log(this._id, body);
        fetch('http://localhost:3000',{
          method:'POST',
          headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(body)
        }).then(()=> console.log('saved!'));
      },
      load: function () {
        fetch('http://localhost:3000').then(res => res.json())
          .then((files)=>{
          this.files = files;
        })
      },
      open: function (file) {
        this.input = file.input;
        this.name = file.name;
        this._id = file._id;
      }
    }
  }

</script>


<style>
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 50%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
