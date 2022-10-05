import React from 'react'
import { Formik, Form, Field } from "formik";
const AddStore = () => {
  return (
    <div>
          <div>
      <Formik
        initialValues={{
          Store: {
            average_reviews: "",
            business_address: "",
            collect_times: "",
            coordinates: {
                Latitude:'',
                Longitude:''
            },
            delivery_time: "",
            discount: "",
            no_of_reviews: "",
            store_id:"",
            store_img:"",
            store_name:""
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
                <h3>Stores</h3>
                <p>Add stores data here</p>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.average_reviews"
                    placeholder="average_reviews"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.business_address"
                    placeholder="business_address"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.cordinates.Latitude"
                    placeholder="prod discount"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.coordinates.Longitude"
                    placeholder="prod id"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.delivery_time"
                    placeholder="prod image"
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
                    placeholder="store_id"
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
    </div>
  )
}

export default AddStore