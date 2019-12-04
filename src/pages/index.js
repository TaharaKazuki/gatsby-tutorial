import React from "react"
import { Link } from 'gatsby'

export default () => (
  <div>
    <h1>this is our home page</h1>
    Hello world!
    <div>
      <Link to="/blog/">blog page</Link>
    </div>
  </div>
)