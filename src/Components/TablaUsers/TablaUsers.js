import axios from 'axios'
import React, {useState, useEffect} from 'react'
import FilaTabla from '../FilaTabla/FilaTabla'


const Tabla = () => {

  const [datos, setData] = useState([]);


  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-users')
    setData(data);
  }

  useEffect(() => {
    getDatos()
  },[])


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Rol</th>
            <th scope="col">Pw</th>
          </tr>
        </thead>
        <tbody>
          {
            datos.map(e => <FilaTabla key1={e.email} nombre={e.nombre} email={e.email} estado={e.estado} id={e._id} rol={e.rol} pw={e.password} />)
          }
        </tbody>
    </table>
    </>
  )
}

export default Tabla