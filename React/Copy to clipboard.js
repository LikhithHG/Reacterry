import styled from "styled-components";
import { useState } from 'react'

const CopyToClipboard = ({ str = 'test-input' }) => {
  // Edit this component
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    //str to be copied
    navigator.clipboard.writeText(str);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <Button onClick = {handleCopy}>{copied ? 'copied' : 'copy'}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;