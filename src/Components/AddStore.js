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
                    name="store.business_address"
                    placeholder="business_address"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.collect_times"
                    placeholder="collect_times"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.cordinates.Latitude"
                    placeholder="Cordinates-Latitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.cordinates.Longitude"
                    placeholder="Cordaintes-longitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.delivery_time"
                    placeholder="delivery_time"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.discount"
                    placeholder="discount"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.no_of_reviews"
                    placeholder="no_of_reviews"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.store_id"
                    placeholder="store_id"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.store_img"
                    placeholder="store_img"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="store.store_name"
                    placeholder="store_name"
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