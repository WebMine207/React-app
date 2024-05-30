import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log('chexk');
  }
  const toggleBold = () => {
    setIsBold(prevIsBold => !prevIsBold);
  };
  const handleClearClick = () => {
    setText('');
  }
  const handleCopyTextClick = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied');
  }
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  return (
    <>
    
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-6'>
            <h3>{props.heading} </h3>
            <div className="form-group">
                <textarea value={text}  onChange={handleOnChange} className="form-control" id="myText" rows="5"></textarea>
                <button onClick={handleClearClick} className='btn btn-danger mt-4 mx-2'>Clear text</button>
                <button onClick={handleUpClick} className='btn btn-primary mt-4 mx-2'>Capital your text</button>
                <button onClick={handleLwClick} className='btn btn-primary mt-4 mx-2'>Make Text Lower Case </button>
                <button onClick={handleCopyTextClick} className='btn btn-primary mt-4 mx-2'>Copy text</button>
                <button onClick={toggleBold} className='btn btn-dark mt-4 mx-2'>{isBold ? 'Unbold Text' : 'Bold Text'}</button>
            </div>
        </div>
        <div className='col-md-6 col-6'>
          <div className='container my-4'>
              < h4>Your Text summary </h4>
              <div>Your content has { text.split(" ").length} words & {text.length} charecters </div>
              <div>{ Math.round(0.008 * text.split(" ").length) } Minute Seconds to  read this contant </div>
          </div>

          <div className='container my-4'>
              < h4>Preview </h4>
              <hr/>
              <div className='border' style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{ text } </div>
          </div>
        </div>
      </div>
    </div>
    

    </>
  )
}

