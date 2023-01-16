import Paciente from "./Paciente"
import { useEffect } from "react";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-auto-scroll">
      {pacientes && pacientes.length ? (
        <>

          {
            pacientes.map((paciente) => (
              <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
            ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes