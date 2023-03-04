import React from "react";

interface Props {
  id: number | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const Inputfield = ({ id, setId, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e: React.FormEvent) => setId(e.target.value)}
      />
      <button disabled={!id}>Submit</button>
    </form>
  );
};

export default Inputfield;
