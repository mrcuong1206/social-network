import React, { useState } from "react";

const EditPost = ({ post, onSave }) => {
  const [text, setText] = useState(post.text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave({ ...post, text });
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter post text"
        rows={5}
        cols={50}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditPost;
