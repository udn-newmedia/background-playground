
var app = new Vue({
    el: '#app',
    data: {
        image: ''
    },
    methods: {
        test: function(e, b){
            var files = e.target.files || e.dataTransfer.files;

            if(!files.length) {
                return
            }
            this.createImage(files[0])
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
      
            reader.onload = (e) => {
              vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
    }
})

console.log(5)