import { Component } from "react";
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().length(3).required(),
  number: yup.number().positive().integer().required(),
});

export class MyForm extends Component {
    state = {
        name: '',
        number: '',
    }

    resetForm = () => {
      this.setState({
          name: '',
          number: '',
      })
    }

    handlerInput = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        })
    }

    hadleSubmit = (evt) => {
        evt.preventDefault();
        const newName = {
            id: nanoid(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        };
        this.props.onSubmit(newName);
        this.resetForm();
    }

    render() {
        return <Formik
            initialValues={this.state}
            validationSchema={schema}
            >
            <Form onSubmit={this.hadleSubmit}>
            <label>
                Name:
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    // required
                    onChange={this.handlerInput}
                    value={this.state.name}
                    />
                <ErrorMessage name="name" />
            </label>
            <label>
                Number:
                <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                // required
                onChange={this.handlerInput}
                value={this.state.number}
                    />
                <ErrorMessage name="number" />
            </label>
            <button type="submit">Add contact</button>
            </Form>
        </Formik>
    }
}