import React from 'react';

function App() {
 return <div>
  <Folder name="Desktop">
    <Folder name="Music">
      <File name="fool_for_loving.mp4"/>
      <File name="smells_like_teen_spirit.mp4"/>
    </Folder>
    <File name="dogs.jpeg"/>
    <File name="cats.jpeg"/>
  </Folder>

  <Folder name="Applications"/>
  
 </div>
}

const Folder = (props) => {
  console.log(props);
  return <div> 
    {props.name} 
    <div style={{ marginLeft: '17px' }}>
      {props.children}
    </div>
  </div>
};

const File = (props) => {
  return <div> {props.name} </div>
};
export default App;
