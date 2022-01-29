import React from "react";
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface OwnProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

const NewCampaignModal: React.FC<OwnProps> = ({ isModalOpen, closeModal }) => {

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
                    <Form.Control type="text" placeholder="Kampagnenname eingeben" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Kunde*:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Kunde eingeben" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Laugzeit:</Form.Label>
                <Col sm="9" as={Row} className={styles.dateSection}>
                    <Col sm="2"><span>Start*:</span></Col>
                    <Col sm="3"><Form.Control type="date" name='date_of_birth' /></Col>
                    <Col sm="2"><span>Ende*:</span></Col>
                    <Col sm="3"><Form.Control type="date" name='date_of_birth' /></Col>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Status:</Form.Label>
                <Col sm="9">
                    <Form.Select aria-label="Default select example">
                        <option key='blankChoice' hidden>Status ferstellen</option>
                        <option value="Erstellt">Erstellt</option>
                        <option value="Gebucht">Gebucht</option>
                        <option value="Arhiviert">Arhiviert</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Notiz:</Form.Label>
                <Col sm="9">
                    <Form.Control as="textarea" rows={3} />
                </Col>
            </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
            <Button variant="white" onClick={closeModal} className={styles.cancelButton}>
                ABBRECHEN
            </Button>
            <Button variant="primary" onClick={closeModal}>
                ERSTELLEN
            </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default NewCampaignModal;
