import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question: {info, title}}) => {
  return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn"><AiOutlinePlus /></button>
        </header>
          <p>{info}</p>
      </article>
  );
};

export default Question;