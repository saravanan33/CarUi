<template>
    <div  class="" style="width: 500px;
  border: 5px solid green;
  padding: 50px;
  margin: 20px;"> 
        <div class=" col-md-6">
            <div>
                <label style=" forced-color-adjust: aliceblue;font-size: 13px;">Product Name</label>
            </div>
            <input class="" style=" background-color: beige;
    border-radius: 2px;" v-model="product_name" placeholder="Product Name"></input>
        </div>

        <div class=" col-md-6">
            <label style=" forced-color-adjust: aliceblue;font-size: 13px;">Product Price</label>
            <input class="" type="number" style=" background-color: beige;
    border-radius: 2px;" v-model="product_price" placeholder="Product Price"></input>
        </div>
        <div  >
            <label style=" forced-color-adjust: aliceblue;font-size: 13px;">Product Category</label>
            <multiselect class=" col-md-6" style=" background-color: blue;
    border-radius: 2px;" v-model="currency_code" :options="currency_name_list" :searchable="true" :show-labels="false" track-by="value" label="label" placeholder="Product Category"></multiselect>
        </div>
        <div class=" col-md-6">
            <label style=" forced-color-adjust: aliceblue;font-size: 13px;">Product Description</label>
            <textarea class="" style=" background-color: beige;
    border-radius: 2px;" v-model="product_description" placeholder="Product Description"></textarea>
        </div>
        <div  >
            <label style=" forced-color-adjust: aliceblue;font-size: 13px;">Product Category</label>
            <multiselect class=" col-md-6" style=" background-color: blue;
    border-radius: 2px;" v-model="product_category_id" :options="product_category_list" :searchable="true" :show-labels="false" track-by="value" label="label" placeholder="Product Category"></multiselect>
        </div>
        <div v-if="error_msg!= ''">
            <span class="text-danger">
                {{ error_msg }}
            </span>
        </div>
        <div class="d-flex col-md-4">
            <button style="background-color: green;" @click="submitDate()">{{ 'SUBMIT' }}</button>
        </div>
        
    </div>


</template>
<script>
import Vue from 'vue'
import Multiselect from 'vue-multiselect';
Vue.component('multiselect', Multiselect)

export default{
    data:function(){
        return{
            product_name:"",
            product_category_id:"",
            product_description:"",
            product_price:0,
            product_category_list:[],
            error_msg:'',
            currency_code:'',
            currency_name_list:[],
            data:[]
        }
    },

    methods:{
        callIndexData(){
            fetch('http://localhost/blog/public/api/product/index',{
                headers:{
                    'Access-Control-Allow-Origin':'*',
                    'x-api-key':"56933A09-7F79-450F-96C6-34666A36DC21",
                    'expire-time':"3600"
                },
                method:'GET'
            })
            .then((response) => response.json())
            .then(data=>{if(data!=undefined){
                console.log(data)
                this.product_category_list = data.data.product_category_name
                this.currency_name_list= data.data.currency_name
            }})
            .catch(err=>{
                console.log(err)
            })
            console.log(this.data)
        },
        submitDate(){
            let Proprice = parseInt(this.product_price)
            
            console.log(typeof Proprice)
            console.log(Proprice != 'NaN')

            if(this.product_name == undefined || this.product_name =='' ){
                this.error_msg = 'Enter Valid Product Name'
                return false
            }
            if(this.product_description == undefined || this.product_description =='' ){
                this.error_msg = 'Enter Valid Product Description'
                return false
            }
            if(this.product_price == undefined ){
                this.error_msg = 'Enter Valid Product Price'
                return false
            }
            if(this.product_price <= 0 ){
                this.error_msg = 'Product Price Should greater than 0'
                return false
            }
            if(this.product_category_id == undefined || this.product_category_id =='' ){
                this.error_msg = 'Choose Valid Product Category'
                return false
            }
            if(this.currency_code == undefined || this.currency_code =='' ){
                this.error_msg = 'Choose Currency Code'
                return false
            }
            this.error_msg=''
            var postArray ={}
            postArray['product_name'] = this.product_name
            postArray['product_description'] = this.product_description
            postArray['product_price'] = this.product_price
            postArray['product_category_id'] = this.product_category_id.value
            postArray['currency_code']=this.currency_code
            console.log(JSON.stringify(postArray))
            fetch('http://localhost/blog/public/api/product/store',{
                method:'POST',
                headers:{
                    'Content-Type':"application/json",
                    'Access-Control-Allow-Origin':'*',
                    'x-api-key':"56933A09-7F79-450F-96C6-34666A36DC21",
                    'expire-time':"3600"
                },
                body:JSON.stringify(postArray)
            })
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
            })
        }
    },
    created(){
        this.callIndexData();
    }
}
</script>