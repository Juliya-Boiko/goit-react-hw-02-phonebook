import { Component } from "react";
import { nanoid } from 'nanoid';

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    reset = () => {
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

    addContact = (evt) => {
        evt.preventDefault();
        const newName = {
            id: nanoid(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        };
        this.props.onSubmit(newName);
        this.reset();
    }

    render() {
        return <form onSubmit={this.addContact}>
             <label>
                Name:
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    onChange={this.handlerInput}
                    value={this.state.name}
                    />
            </label>
            <label>
                Number:
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                onChange={this.handlerInput}
                value={this.state.number}
                />
            </label>
        <button type="submit">Add contact</button>
      </form>
    }
}