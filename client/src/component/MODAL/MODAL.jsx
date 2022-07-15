import React from 'react'
import Modal from '@material-ui/core/Modal'
import ButtonAdd from './buttonAdd'
import ButtonClassList from './buttonClassList'
import ButtonAdd2 from './ButtonAdd2'

const MODAL = ({ body, open, setClose }) => {
  return (
    <>
      {/* <Modal open={open} onClose={setClose}>
        {body}
    </Modal> */}
      <ButtonAdd />
      <ButtonClassList />
      <ButtonAdd2 />
    </>
  )
}

export default MODAL
