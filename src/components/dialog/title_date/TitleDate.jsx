import c from './title_date.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Celendar from 'dayjs/plugin/calendar';

dayjs.extend(Celendar);

function TitleDate ({ date }){
    return (
        <div className={c.date}>
            {dayjs(date).calendar(null, {
                sameDay: '[Сегодня]',
                lastWeek: 'DD MMMM',
                someElse: 'DD MMMM YYYY',
            })}
        </div>
    );
};

TitleDate.propTypes = {
    date: PropTypes.string.isRequired,
};

export default TitleDate;