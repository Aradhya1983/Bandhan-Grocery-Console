import React from 'react'
import { Formik, Form, Field } from "formik";
const Types = () => {
  return (
   
         <div>
      <Formik
        initialValues={{
          Products: {
          
            prod_code: "",
            prod_id: "",
            store_id: "",
             types:{
                price:'',
                qty:'',
                size:''
             }
          
          },
        }}
        onSubmit={(values) => {
          // same shape as initial values
         
         console.log(values);
        
        }}
      >
        <Form class="form-body">
          <div class="row">
            <div class="form-holder">
              <div class="form-items">
                <h3>Products</h3>
                <p>Fill in the data of products</p>
               
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_code"
                    placeholder="prod code"
                  />
                </div>
                
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_id"
                    placeholder="prod id"
                  />
                </div>
             

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_name"
                    placeholder="prod name"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.store_id"
                    placeholder="store id"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.type.price"
                    placeholder="price"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.type.qty"
                    placeholder="quantity"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.type.size"
                    placeholder="size"
                  />
                </div>
                <button type="submit" class="form-button mt-3">Submit</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <></>
      
    </div>
   
  )
}

export default Types