import React from 'react';
import Card from './Card';



export const List = ({Data}) => {
  return (
    <div>
      {
        Data.map(data =>{
          return <Card key={data.id} id={data.id} name={data.name} email={data.email} />
        })
      }
      {/* <Card id={Data[0].id} name={Data[0].name} email={Data[0].email} />
      <Card id={Data[1].id} name={Data[1].name} email={Data[1].email}/>
      <Card id={Data[2].id} name={Data[2].name} email={Data[2].email}/>  */}
    </div>
  );
}
