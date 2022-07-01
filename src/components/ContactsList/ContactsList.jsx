export const ContactsList = ({ value, options, onClickDelete }) => {
  const normalizedValue = value.toLowerCase();
  const filteredArray = options.filter((option) => option.name.toLowerCase().includes(normalizedValue))
  return <ul>
    {filteredArray.map(({id, name, number}) => {
      return <li key={id}>
        {name}, {number}
        <button onClick={() => {onClickDelete(id)}}>Delete</button>
      </li>
    })}
  </ul>
}