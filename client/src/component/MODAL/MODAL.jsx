import React from 'react'
import Modal from '@material-ui/core/Modal'

const MODAL = ({ body, open, setClose }) => {
  return (
    <>
      <Modal open={open} onClose={setClose}>
        {body}
    </Modal>
      {/* <ButtonAdd />
      <ButtonClassList />
      <ButtonAdd2 /> */}
    </>
  )
}

export default MODAL
