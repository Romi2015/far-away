import { useState } from "react";

const tripItems = [
  { id: 1, description: "Sunglasses 🕶️", quantity: 1, packed: true },
  { id: 2, description: "Passport 🛂", quantity: 1, packed: false },
  { id: 3, description: "T-shirts 👕", quantity: 5, packed: false },
  { id: 4, description: "Hiking boots 🥾", quantity: 1, packed: true },
  { id: 5, description: "Camera 📸", quantity: 1, packed: false },
  { id: 6, description: "Travel guide book 📖", quantity: 1, packed: false },
  { id: 7, description: "Water bottle 💧", quantity: 2, packed: true }
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴Far Away 👜</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.Value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> ADD </button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {tripItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼you have X items on your list,and you already packed X (X%)</em>
    </footer>
  );
}
