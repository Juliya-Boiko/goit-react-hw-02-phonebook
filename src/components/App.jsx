import { Component } from "react";
import { nanoid } from 'nanoid';

const ContactsList = ({options}) => {
    return <ul>
      {options.map(({id, name, number}) => {
        return <li key={id}>{name}, {number}</li>
      })}
    </ul>
}

const FilteredList = ({ value, options }) => {
  const normalizedValue = value.toLowerCase();
  const filteredArray = options.filter((option) => option.name.toLowerCase().includes(normalizedValue))
  return <ul>
    {filteredArray.map(({id, name, number}) => {
      return <li key={id}>{name}, {number}</li>
    })}
  </ul>
}

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: '',
    number: '',
    filter: '',
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

  handlerFilter = (evt) => {
    this.setState({
      filter: evt.target.value,
    })
  }

  addContact = (evt) => {
    evt.preventDefault();
    const newName = {
        id: nanoid(),
        name: evt.target.elements.name.value,
        number: evt.target.elements.number.value,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newName],
      }
    })
    this.reset();
  }

  render() {
    return <>
      <h2>Contact App</h2>
      <form onSubmit={this.addContact}>
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
        <ContactsList options={this.state.contacts} />
      </form>
      <h2>Search by name</h2>
      <input
        type="text"
        name="name"
        onChange={this.handlerFilter}
        value={this.state.filter}
      />
      {this.state.filter !== '' && <FilteredList value={this.state.filter} options={this.state.contacts} />}
    </>
  }
}
