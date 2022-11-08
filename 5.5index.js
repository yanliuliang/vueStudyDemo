var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone 7',
                price: 6188,
                count: 2
            },
            {
                id: 2,
                name: 'ipad pro',
                price: 5888,
                count: 3
            },
            {
                id: 3,
                name: 'maxbook pro',
                price: 21488,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var index = 0; index < this.list.length; index++) {
                var element = this.list[index];
                total += element.price * element.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        },
    },
    methods: {
        handleReduce:function(index){
            console.log(index)
            if(this.list[index].count === 1) return;
            this.list[index].count -- ;
        },
        handleAdd:function(index){
         
            this.list[index].count ++;
        },
        handleRemove:function(index){
            this.list.splice(index,1)
        }
    },
})