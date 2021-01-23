import React from 'react'



function Form(props) {
    function handleSubmit(e) {
      e.preventDefault()
      alert(props.appAddTask("Stay jiggy!"))
    }
    return (
        <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            input="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off" />
          <button type="submit" className="btn btn__primary btn_lg">
            Add
          </button>
      </form>
    )
}

export default Form;