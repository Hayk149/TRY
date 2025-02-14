import React, { useState } from 'react';

const SeminarEditModal = ( props ) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [date, setDate] = useState(props.date);
    const [time, setTime] = useState(props.time);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedSeminar = { ...props.seminar, title, description, date, time };
        props.update(updatedSeminar); // Отправляем обновленные данные
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Редактирование семинара</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={props.close}>
                        Назад
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SeminarEditModal;