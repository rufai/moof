import React, {useState} from 'react'



function Form(props) {
    const [name, setName] = useState('');
    
    function handleSubmit(e) {
      e.preventDefault()
      if(name)
      {
        props.appAddTask(name)
        setName("")
        console.log("inside form")
      }
    }
    
    function handleChange(e) {
      console.log("Typing!")
      console.log(e.target.value)
      setName(e.target.value)
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
            name={name}
            placeholder={name}
            // value={name}
            autoComplete="off"
            onChange={handleChange} />
          <button type="submit" className="btn btn__primary btn_lg">
            Add
          </button>
      </form>
    )
}

export default Form;