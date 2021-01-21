import React, {createContext, useState} from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        textarea: '',
        status: ''
    })

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setForm({ 
                name: '',
                email: '',
                phone: '',
                textarea: '',
                status: 'SUCCESS'
            });

            document.querySelectorAll('div.overlay, body,.modal').forEach(function(element) {
                element.classList.remove('active')
            });
            document.querySelector('.thanks').classList.add('active')
            setTimeout(() => {
                document.querySelector('.thanks').classList.remove('active')
            }, 4000);

          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }

    const handleChange = e => {
        const { value,name} = e.target;
        setForm({[name]: value})
    }

    return (
        <FormContext.Provider value={{form,handleChange,handleSubmit}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;
