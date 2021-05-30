import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = (props) => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = contactContext;
  const { loadUser, loading } = authContext;

  useEffect(() => {
    if (isAuthenticated || loading) {
      props.history.push('/');
      loadUser();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
