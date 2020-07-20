<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <!-- <button v-on:click="getContent">查看内容</button> -->
        <div v-if="isShowBtn">
          <el-divider></el-divider>
          <el-button type="primary" v-on:click="get" >显示原博客内容</el-button>
        </div>
        
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
      name: 'editor',
      model: {
        prop: "editorContent",
        event: "change"
      },
      props: {
        /* editorContent: { required: true }, */
        value: {
          type: String,
          default: ''
        },
        contxt: {
          type: String,
          default: ''
        },
        isShowBtn:{
          type:Boolean,
          default:false
        }
      },
      watch:{
        value: function(value) {
        if (value !== this.editor.txt.html()) {
          this.editor.txt.html(this.value)
        }
      }
      },
      data () {
        return {
          /* editorContent: '', */
          /* editorOthers:'<p>asdasdasdasdas</p><blockquote>dasdasdasdasdasdasdasdasdasdda</blockquote><p>asdasdasdasd</p><h1>asdasdasdasdasdasdasd</h1>' */
          editor:{}
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        },
        get(){
          this.editor.txt.html(this.contxt);
        }
      },
      mounted() {
        this.editor = new E(this.$refs.editor)
        this.editor.customConfig.uploadImgShowBase64 = true
        this.editor.customConfig.zIndex = 9
        this.editor.customConfig.colors = [
        '#000000',
        '#eeece0',
        '#1c487f',
        '#4d80bf',
        '#c24f4a',
        '#8baa4a',
        '#7b5ba1',
        '#46acc8',
        '#f9963b',
        '#ffffff'
    ]
        this.editor.customConfig.onchange = (html) => {
          /* this.editorContent = html */
          this.$emit("change", html);
        }
        
        this.editor.create()
        this.editor.txt.html(this.contxt);
        
      }
    }
    
</script>

<style scoped>
</style>
