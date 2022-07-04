import 'modern-normalize';
import { Component } from "react";
import { Container, Title } from './components/common/common.styled';
import { MyForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  validateContact = (data) => {
      const normalizedValue = data.name.toLowerCase();
      const result = this.state.contacts.find((item) => item.name.toLowerCase().includes(normalizedValue));
      return result;
  }

  handlerFilter = (evt) => {
    this.setState({
    filter: evt.target.value,
    })
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
      }
    })
  }

  handlerSubmit = (data) => {
    if (this.validateContact(data)) {
      alert(`${data.name} already exist`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, data],
        }
      })
    }
  }

  render() {
    return  <Container>
              <Title>Contact App</Title>
                <MyForm onSubmit={this.handlerSubmit} />
              <Title>Search by name</Title>
                <Filter value={this.state.filter} onChange={this.handlerFilter} />
                <ContactsList
                value={this.state.filter}
                options={this.state.contacts}
                onClickDelete={this.deleteContact}
              />
            </Container>
  }
}
