import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactHeading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <div />
      </ContactHeading>

      <ContactContent>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactInfoItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <div>
              <h4>Location</h4>
              <p>Yaoundé, Cameroon</p>
            </div>
          </ContactInfoItem>

          <ContactInfoItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <div>
              <h4>Email</h4>
              <p>contact@jabuh.cm</p>
            </div>
          </ContactInfoItem>

          <ContactInfoItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <div>
              <h4>Phone</h4>
              <p>+237 6XX XXX XXX</p>
            </div>
          </ContactInfoItem>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
`;

const ContactHeading = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
    white-space: nowrap;
  }

  div {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.text};
    opacity: 0.2;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  h4 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.cardHover};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
    }
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }

  svg {
    font-size: 1rem;
  }
`;

export default ContactSection;