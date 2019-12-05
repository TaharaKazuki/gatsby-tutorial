import React from "react"
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div>
      <h1>this is our home page</h1>
      Hello world!
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
        </div>
      </div>
    </div>
  </Layout>
)