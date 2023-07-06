import React, { useEffect, useState } from "react";
import "./Card.css";
import Modals from "../Modal/Modal";
import { Container, Row, Col } from "react-bootstrap";

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchcardData = async () => {
      const fetchdata = await fetch("https://api.chucknorris.io/jokes/categories");
      const data = await fetchdata.json();
      console.log(data);
      setItem(data);
    };

    fetchcardData();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container fluid className={`container ${modalOpen ? "modal-open" : ""}`}>
      <Modals isOpen={modalOpen} onClose={handleCloseModal} />
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={3}>
            <div className="joke_card" onClick={handleOpenModal}>
              <div>
                <h1 className="card-title">{item}</h1>
                <p className="card-para">Unlimited Jokes On {item}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
