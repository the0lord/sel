import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchLoggers } from '../../shared/store/reducer/loggers.reducer';
import Pagination from 'shared/ui/dynamic/Table/Pagination';
import { boxSizing, styled, width } from '@mui/system';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css'
// import styled from '@emotion/styled';

const Accordion = styled(MuiAccordion)(
    {
        boxSizing: "border-box",
    }
);

const AccordionDetails = styled(MuiAccordionDetails)(
    {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "flex-start",
        flexWrap: "wrap"

    }
)


const Loggers = () => {
    const dispatch = useDispatch();
    const { persons, isLoading, error, total } = useSelector(state => state.loggers);
    const [expanded, setExpanded] = useState(false);
    const [{ page, pageSize }, setPagination] = useState({
        page: 1,
        pageSize: 10
    });

    const loadPage = (page, pageSize) => {
        dispatch(fetchLoggers({ page, pageSize }));
    };

    useEffect(() => {
        loadPage(page, pageSize);
    }, [page, pageSize])
    const onPageChange = (page) => {
        return setPagination(obj => ({ ...obj, page }))
    }

    useEffect(() => {
        dispatch(fetchLoggers());
    }, [dispatch]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toISOString().split('T')[0];
        const time = date.toISOString().split('T')[1].split('Z')[0];
        return `${formattedDate} \n ${time}`;
    };

    return (
        <div>
            {isLoading && <p>Загрузка...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {persons.map((person) => (
                    <Accordion
                        key={person.ID}
                        expanded={expanded === `panel${person.ID}`}
                        onChange={handleChange(`panel${person.ID}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${person.ID}bh-content`}
                            id={`panel${person.ID}bh-header`}
                        >
                            <Typography>
                                <strong>Api:</strong> {person.Api} <br />
                                <strong>ApiDescription:</strong> {person.ApiDescription} <br />
                                <strong>Request Date:</strong> {formatDate(person.RequestDate)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='w-1/2 break-words'>
                                <Typography>Show Input Data</Typography>
                                <JsonView
                                    style={{
                                        maxWidth: "500px"
                                    }}
                                    src={person.InputData} />
                            </div>
                            <div className='w-1/2 break-words'>
                                <Typography>Show Output Data</Typography>
                                <JsonView
                                    style={{
                                        maxWidth: "500px"
                                    }}
                                    src={person.OutputData} />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <Pagination
                totalPages={Math.ceil(total / pageSize)}
                currentPage={page}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default Loggers;














