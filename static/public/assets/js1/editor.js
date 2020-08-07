//import Base64UploadAdapter from '../vendors/@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'

    ClassicEditor
    .create( document.querySelector( '#content' ), {
      //plugins: [ Base64UploadAdapter],
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'alignment',
          'indent',
          'outdent',
          '|',
          'imageUpload',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'undo',
          'redo',
          'CKFinder',
          'code',
          'codeBlock',
          'highlight',
          'fontFamily',
          'fontColor',
          'fontSize',
          'fontBackgroundColor',
          'Base64UploadAdapter'
        ]
      },
      language: 'zh-cn',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
        ]
      },
      licenseKey: '',
      
    } )
    .then( editor => {
      window.editor = editor;
  
      
      
      
    } )
    .catch( error => {
      console.error( 'Oops, something gone wrong!' );
      console.error( 'Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:' );
      console.warn( 'Build id: eifc23l7tdvu-f1kflulek2u0' );
      console.error( error );
    } );