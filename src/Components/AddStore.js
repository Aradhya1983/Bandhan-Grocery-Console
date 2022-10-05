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
            cordinates: {
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
                    placeholder="average reviews"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.business_address"
                    placeholder="business address"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.collect_times"
                    placeholder="collect times"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.cordinates.Latitude"
                    placeholder="Cordinates Latitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.cordinates.Longitude"
                    placeholder="Cordaintes-longitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.delivery_time"
                    placeholder="delivery time"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.discount"
                    placeholder="discount"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.no_of_reviews"
                    placeholder="no of reviews"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_id"
                    placeholder="store id"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_img"
                    placeholder="store img"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_name"
                    placeholder="store name"
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