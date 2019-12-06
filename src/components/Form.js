import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
          <div>
            <form>
              <div>
                <label>Email address</label>
                <input />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div>
                <label for="exampleInputPassword1">Password</label>
                <input />
              </div>
              <div>
                <input />
                <label>Check me out</label>
              </div>
              <button>Submit</button>
            </form>
          </div>
        );
    }
}
