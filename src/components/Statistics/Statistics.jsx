import PropTypes from 'prop-types';

import css from './Statistics.module.css';

import getRandomHexColor from './Statictics-generate-color';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat__list}>
                {stats.map(item => {
                    return (
                        <li
                            key={item.id}
                            className={css.stat__list__item}
                            style={{
                                backgroundColor: `${getRandomHexColor()}`,
                            }}
                        >
                            <span className="label">{item.label}</span>
                            <span className="percentage">
                                {item.percentage}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Statistics;
