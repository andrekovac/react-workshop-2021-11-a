import { useRef } from "react";

const FileInputUncontrolled: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("fileInput", fileInput.current?.files?.[0].name);
    console.log("nameInput", nameInput.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameField">Name</label>
      <input
        id="nameField"
        type="text"
        placeholder="Your name"
        ref={nameInput}
      />
      <label htmlFor="fileUpload">Upload file</label>
      <input id="fileUpload" type="file" ref={fileInput} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileInputUncontrolled;
