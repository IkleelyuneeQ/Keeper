import React, { useState } from "react";

function CreateArea(props) {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   if (name === "title") {
  //     setTitle(value);
  //   } else {
  //     setContent(value);
  //   }
  // }
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.btnAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
