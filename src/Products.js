import React from "react";
import { Formik, Form, Field } from "formik";
import "./app.css";
const Products= () => {
  return (
    <div>
      <Formik
        initialValues={{
          Products: {
            category: "",
            prod_code: "",
            prod_discount: "",
            prod_id: "",
            prod_image: "",
            prod_name: "",
            store_id: "",
          
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
                    name="Products.category"
                    placeholder="category"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_code"
                    placeholder="prod_code"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_discount"
                    placeholder="prod_discount"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_id"
                    placeholder="prod_id"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_image"
                    placeholder="prod_image"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_name"
                    placeholder="prod_name"
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
  );
};

export default Products;
