import React, { useEffect, useState, useContext } from 'react';
import Context from '../services/context/Context';
import Rating from '../components/Rating';
import Header from '../components/Header';
import '../style/Community.css'
import Member from '../components/Member';

function Community() {
  const { data } = useContext(Context);
  console.log(data)

  return (
    <section className='community'>
      <Header text="BELA VISTA" />
      <Rating text="A AVALIAÇÃO DA COMUNIDADE ESTÁ" rate="95" />
      <div className='members'>
        <h3>Membros</h3>
        {
          data.data.comunidade.integrantes.map((element) => (
            <>
              <hr></hr>
              <Member member={element} />
            </>
          ))
        }
      </div>
    </section>

  );
}

export default Community;