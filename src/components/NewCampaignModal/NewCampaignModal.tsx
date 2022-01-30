import React, { useState, useRef } from "react";
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import APIService from '../../services/api-service';
import { Campaign } from "../../types";
import { statuses } from "../../constants";

const apiService = new APIService();

interface OwnProps {
    isModalOpen: boolean;
    closeModal: () => void;
    setCampaigns: (campaigns: Campaign[]) => void;
}

const NewCampaignModal: React.FC<OwnProps> = ({ isModalOpen, closeModal, setCampaigns }) => {

  const nameRef = useRef<HTMLInputElement>(null);
  const clientRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState({
      name: '',
      client: '',
      start: '',
      end: '',
      status: '',
      note: '',
  });
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const onChange = () => {
    if(nameRef.current && nameRef.current.value && clientRef.current && clientRef.current.value && startRef.current
        && startRef.current.value && endRef.current && endRef.current.value && statusRef.current && statusRef.current.value) {
            setIsFormInvalid(false);
            setFormData({
                name: nameRef.current.value,
                client: clientRef.current.value,
                start: startRef.current.value,
                end: endRef.current.value,
                status: statusRef.current.value,
                note: noteRef.current ? noteRef.current.value : '',
            })
        } else {
            setIsFormInvalid(true);
        }    
  };

  const onSubmit = () => {
    closeModal();
    const campaigns = apiService.addCampaign(formData);
    setCampaigns(campaigns);    
  };

  return (
    <Modal show={isModalOpen} onHide={closeModal} size="xl">
        <Modal.Header className={styles.modalHeader}>
        <Modal.Title><b>Campaigne erstellen</b></Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalContent}>
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Kampagnenname*:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Kampagnenname eingeben" ref={nameRef} onChange={onChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Kunde*:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Kunde eingeben" ref={clientRef} onChange={onChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Laugzeit:</Form.Label>
                <Col sm="9" as={Row} className={styles.dateSection}>
                    <Col sm="2"><span>Start*:</span></Col>
                    <Col sm="3"><Form.Control type="date" name='date_of_birth' ref={startRef} onChange={onChange} /></Col>
                    <Col sm="2"><span>Ende*:</span></Col>
                    <Col sm="3"><Form.Control type="date" name='date_of_birth' ref={endRef} onChange={onChange} /></Col>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Status:</Form.Label>
                <Col sm="9">
                    <Form.Select aria-label="Default select example" ref={statusRef} onChange={onChange} >
                        <option key='blankChoice' hidden>Status ferstellen</option>
                        {statuses.map(status => 
                            <option value={status} key={status}>{status}</option>
                        )}                        
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Notiz:</Form.Label>
                <Col sm="9">
                    <Form.Control as="textarea" rows={3} ref={noteRef} onChange={onChange} />
                </Col>
            </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
            <Button variant="white" onClick={closeModal} className={styles.cancelButton}>
                ABBRECHEN
            </Button>
            <Button variant="primary" onClick={onSubmit} disabled={isFormInvalid}>
                ERSTELLEN
            </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default NewCampaignModal;
