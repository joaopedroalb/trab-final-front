import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LayoutPage from '../../components/layout/LayoutPage'
import { DoctorService } from '../../services/doctor/DoctorService'
import { ListBg, ListContainer, PatientCard } from './style'

export default function ListPatient() {
    const [patients, setPatients] = useState([])

    const getData = useCallback(async ()=>{
        const result = await DoctorService.getPatientList()
        if(!result.error)
            setPatients(result.data)
    },[])

    useEffect(()=>{
        getData()
    },[])

    return (
        <LayoutPage>
            <ListBg>
                <ListContainer>
                {patients && patients.map(patient=>{
                    return (
                        <PatientCard key={patient.id}>
                            <div className='userInfo'>
                                <img src={patient.pictureUrl}/>
                                <p>{patient.name}</p>
                            </div>
                            <div className='btnActions'>
                                <Link to={`/patient/${patient.id}`}>
                                    <button>Ver Perfil</button>
                                </Link>
                            </div>
                        </PatientCard>
                    )
                })}
                </ListContainer>
            </ListBg>
        </LayoutPage>
    )
}
