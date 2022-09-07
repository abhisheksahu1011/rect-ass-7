export function StudentCard(props){
    const {name,age, course, batch, EditStudent } = props;
   return(
       <div className="StudentCard">
          <p> {name}</p>
          <p> {age}</p>
          <p>{course}</p>
          <p>{batch}</p>
          <button className="edit" onClick={ EditStudent} >Edit</button>
       </div>  
   )
}