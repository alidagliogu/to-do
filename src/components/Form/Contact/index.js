import { useState } from "react";
import "./index.css";
function Contact() {
  const [inputValue, setInputValue] = useState({
    status: false,
    name: "",
    age: "",
  });
  const [list, setList] = useState([]);

  const [listTwo,setLİstTwo]= useState([])
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.name.trim() !== "" && inputValue.age.trim() !== "") {
      setList([...list, inputValue]);
      setLİstTwo([...listTwo,inputValue])
      setInputValue({status:false, name: "", age: "" });
    }
  };

  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    setLİstTwo(newList)
    console.log(newList);
  };

  const handleCheckbox = (index) => {
    const updatedList = [...list]; // listeyi kopyala
    updatedList[index] = {
      ...updatedList[index],
      status: !updatedList[index].status, // istenen objenin statusunu tersine çevir
    };
    setList(updatedList); // kopyayı güncelle
    setLİstTwo(updatedList)
    console.log(updatedList[index].status);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>To-Do</h1>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={inputValue.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input type="checkbox" defaultChecked={item.status} onClick={() => handleCheckbox(index)} />
            <p className="contacts">
              Name: {item.name}, Age: {item.age}
            </p>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={()=>{
        setList(listTwo)
      }}>all</button>
      <button onClick={()=>{
        const copyList =[...list];
        const filterList = copyList.filter((list)=>list.status===true)
        console.log(filterList);
        setList(filterList)
      }}>checked</button>
    </div>
  );
}

export default Contact;