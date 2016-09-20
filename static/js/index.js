(function(){
    var uitl = (function(){
        //todo 工具类
        var getAgentData = function(){
            Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
        }
        re
    })();
})()
var vue = new Vue({
    el: "#v-angent",
    data: {
        agentData: [
            {
                ID: 20,
                name: "周经桂",
                kc: 100,
                postPercent: '90%',
                postTimes: 10,
                rechargePercent: '50%'
            },
            {
                ID: 1,
                name: "胡八一",
                kc: 100,
                postPercent: '90%',
                postTimes: 10,
                rechargePercent: '50%'
            },
            {
                ID: 20,
                name: "周经桂",
                kc: 100,
                postPercent: '90%',
                postTimes: 10,
                rechargePercent: '50%'
            },
            
        ]
    },
    methods: {
        addAgent: function(item){
            this.data.agentData.push(item);
        },
        updateAgent: function(){
            var that = this
            that.$http.get('/someUrl', [options]).then(
                function(data){
                    
                }, function(err){

                }
            );
        }
    }
})