import React, { useState, useEffect } from 'react';
import SeminarsItem from '../SeminarsItem/SeminarsItem';
import './SeminarsList.css'

const SeminarsList = ({ seminars, title, remove, update }) => {

    return (
        <div>
            <h1>{title}</h1>
            <ul className='seminars'>
                {seminars.map(seminar => (
                    <li key={seminar.id}>{
                        <SeminarsItem
                            remove={remove}
                            update={update}
                            key={seminar.id}
                            number={seminar.id}
                            title={seminar.title}
                            description={seminar.description}
                            date={seminar.date}
                            time={seminar.time}
                            seminar={seminar}
                        />
                    }</li>
                ))}
            </ul>
        </div>
    );
}

export default SeminarsList;