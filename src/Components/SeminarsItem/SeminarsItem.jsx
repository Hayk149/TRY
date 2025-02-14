import './SeminarsItem.css'
import React, { useState } from "react"
import Button from '../Button/Button.jsx'
import SeminarEditModal from '../SeminarEditModal/SeminarEditModal.jsx'

const SeminarsItem = (props) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showEditing, setShowEditing] = useState(false);

    const EditClick = () => {
        setShowEditing(true);
    };

    const EditClose = () => {
        setShowEditing(false);
    };

    const DeleteClick = () => {
        setShowConfirmation(true);
    };

    const ConfirmDelete = () => {
        props.remove(props.seminar);
        setShowConfirmation(false);
    };

    const CancelDelete = () => {
        setShowConfirmation(false);
    };

    return (
        <div className='seminar'>
            <div className='seminar__inner'>
                <div className='seminar__content'>
                    <strong>{props.number}. {props.title}</strong>
                    <div className='seminar__content-description'>{props.description}</div>
                    <p>Дата проведения семинара: <time dateTime={props.date}>{props.date}</time></p>
                    <p>Время начала семинара: <time dateTime={props.time}>{props.time}</time></p>
                </div>
            </div>
            <div className='seminar__btns'>
                <Button onClick={EditClick}>Редактировать</Button >
                {
                    showEditing && (<SeminarEditModal
                        seminar={props.seminar}
                        close={EditClose}
                        update={props.update}
                        title={props.title}
                        description={props.description}
                        date={props.date}
                        time={props.time}/>)
                }
                <Button onClick={DeleteClick}>Удалить</Button >
                {
                    showConfirmation && (
                        <div className="confirmation-overlay">
                            <div className="confirmation-box">
                                <p>Удалить семинар?</p>
                                <button onClick={ConfirmDelete}>Да</button>
                                <button onClick={CancelDelete}>Нет</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SeminarsItem;